import { NextResponse } from "next/server"
import { z } from "zod"

const registerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().optional(),
  course: z.enum(["co-tranh", "dan-tranh"]),
  format: z.enum(["tai-nha-co", "1-1-tai-nha", "lop-ghep"]),
  note: z.string().optional(),
})

function mapCourse(value: "co-tranh" | "dan-tranh") {
  return value === "co-tranh" ? "Đàn Cổ Tranh (Trung Quốc)" : "Đàn Tranh (Việt Nam)"
}

function mapFormat(value: "tai-nha-co" | "1-1-tai-nha" | "lop-ghep") {
  if (value === "tai-nha-co") return "Tại nhà cô"
  if (value === "1-1-tai-nha") return "1:1 tại nhà học sinh"
  return "Lớp ghép"
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Dữ liệu chưa hợp lệ." },
        { status: 400 },
      )
    }

    const webhookUrl = process.env.GAS_WEBHOOK_URL
    const webhookSecret = process.env.GAS_WEBHOOK_SECRET

    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, message: "Thiếu cấu hình GAS_WEBHOOK_URL." },
        { status: 500 },
      )
    }

    const data = parsed.data
    const payload = {
      ...data,
      courseLabel: mapCourse(data.course),
      formatLabel: mapFormat(data.format),
      submittedAt: new Date().toISOString(),
      source: "website-form",
      secret: webhookSecret ?? "",
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, message: "Không gửi được sang Google Sheets." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, message: "Có lỗi khi gửi đăng ký." },
      { status: 500 },
    )
  }
}

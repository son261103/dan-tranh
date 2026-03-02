"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import type { CourseType } from "./courses-section"

interface RegisterModalProps {
  open: boolean
  onClose: () => void
  defaultCourse?: CourseType
}

export function RegisterModal({ open, onClose, defaultCourse }: RegisterModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<{
    name: string
    phone: string
    email: string
    address: string
    course: Exclude<CourseType, null>
    format: "tai-nha-co" | "1-1-tai-nha" | "lop-ghep"
    note: string
  }>({
    name: "",
    phone: "",
    email: "",
    address: "",
    course: defaultCourse ?? "dan-tranh",
    format: "tai-nha-co",
    note: "",
  })

  useEffect(() => {
    if (open && defaultCourse) {
      setForm((prev) => ({ ...prev, course: defaultCourse }))
    }
  }, [open, defaultCourse])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const result = await res.json()

      if (!res.ok || !result?.ok) {
        throw new Error(result?.message || "Gửi đăng ký thất bại")
      }

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        course: defaultCourse ?? "dan-tranh",
        format: "tai-nha-co",
        note: "",
      })

      onClose()
      toast({
        title: "Đăng ký thành công!",
        description: "Thông tin đã được lưu vào Google Sheets và gửi email thông báo.",
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Có lỗi khi gửi đăng ký."
      toast({
        title: "Gửi đăng ký chưa thành công",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldStyle = {
    borderColor: "#CED9BF",
    backgroundColor: "#FFFFFF",
    color: "#354024",
    "--tw-ring-color": "#4C3D19",
  } as React.CSSProperties
  const readableFont = "'Segoe UI', 'Noto Sans', Arial, sans-serif"

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose() }}>
      <DialogContent
        className="inset-0 top-0 left-0 translate-x-0 translate-y-0 w-[100svw] h-[100svh] max-w-none rounded-none p-0 overflow-hidden border-0 flex flex-col sm:top-[50%] sm:left-[50%] sm:h-auto sm:max-w-lg sm:max-h-[90vh] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl"
        style={{ backgroundColor: "#F8FBF3" }}
      >
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #4C3D19, #354024)" }} />

        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-8 pb-4 sm:pb-6" style={{ fontFamily: readableFont }}>
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold" style={{ color: "#354024" }}>
              Đăng Ký Tư Vấn
            </DialogTitle>
            <DialogDescription className="text-sm mt-1" style={{ color: "#5A6645" }}>
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ để tư vấn phù hợp nhất.
            </DialogDescription>
          </DialogHeader>

          <form id="register-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="name">
                Họ và tên <span style={{ color: "#4C3D19" }}>*</span>
              </label>
              <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Nguyễn Văn A" className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none transition-all focus:ring-2" style={fieldStyle} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="phone">
                  Số điện thoại <span style={{ color: "#4C3D19" }}>*</span>
                </label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="0984 542 058" className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all" style={fieldStyle} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all" style={fieldStyle} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="address">Địa chỉ</label>
              <input id="address" name="address" value={form.address} onChange={handleChange} placeholder="Số nhà, đường, phường, quận..." className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all" style={fieldStyle} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="course">
                  Khóa học <span style={{ color: "#4C3D19" }}>*</span>
                </label>
                <select id="course" name="course" required value={form.course} onChange={handleChange} className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all appearance-none cursor-pointer" style={fieldStyle}>
                  <option value="co-tranh">Đàn Cổ Tranh (Trung Quốc)</option>
                  <option value="dan-tranh">Đàn Tranh (Việt Nam)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="format">Hình thức học</label>
                <select id="format" name="format" value={form.format} onChange={handleChange} className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all appearance-none cursor-pointer" style={fieldStyle}>
                  <option value="tai-nha-co">Học 1:1 tại nhà cô</option>
                  <option value="1-1-tai-nha">1:1 tại nhà học sinh</option>
                  <option value="lop-ghep">Lớp ghép</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#354024" }} htmlFor="note">Ghi chú</label>
              <textarea id="note" name="note" value={form.note} onChange={handleChange} rows={3} placeholder="Trình độ hiện tại, thời gian rảnh, yêu cầu đặc biệt..." className="w-full text-sm px-4 py-2.5 rounded-lg border outline-none focus:ring-2 transition-all resize-none" style={fieldStyle} />
            </div>
          </form>
        </div>

        <div className="px-5 pb-5 sm:px-8 sm:pb-8 pt-3 border-t border-[#CED9BF]/70 bg-[#F8FBF3]" style={{ fontFamily: readableFont }}>
          <button
            type="submit"
            form="register-form"
            disabled={isSubmitting}
            className="w-full font-semibold py-3.5 rounded-xl text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(76,61,25,0.35)] disabled:opacity-70 active:scale-98"
            style={{ backgroundColor: "#354024" }}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

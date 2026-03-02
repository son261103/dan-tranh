"use client"

import { motion } from "framer-motion"

export type CourseType = "co-tranh" | "dan-tranh" | null

interface CourseCard {
  id: CourseType
  title: string
  subtitle: string
  sessions: number
  pricingOptions: { label: string; price: string }[]
  badge?: string
}

const courses: CourseCard[] = [
  {
    id: "co-tranh",
    title: "Đàn Cổ Tranh",
    subtitle: "Trung Quốc",
    sessions: 20,
    badge: "Guzheng",
    pricingOptions: [
      { label: "1:1 tại nhà học sinh", price: "300.000đ/buổi" },
      { label: "Học 1:1 tại nhà cô", price: "250.000đ/buổi" },
      { label: "Lớp ghép", price: "150.000đ/buổi" },
    ],
  },
  {
    id: "dan-tranh",
    title: "Đàn Tranh",
    subtitle: "Việt Nam",
    sessions: 20,
    badge: "Truyền thống",
    pricingOptions: [
      { label: "1:1 tại nhà học sinh", price: "250.000đ/buổi" },
      { label: "Học 1:1 tại nhà cô", price: "200.000đ/buổi" },
      { label: "Lớp ghép", price: "100.000đ/buổi" },
    ],
  },
]

interface CoursesSectionProps {
  onRegisterClick: (course: CourseType) => void
}

export function CoursesSection({ onRegisterClick }: CoursesSectionProps) {
  return (
    <section id="khoa-hoc" className="py-14 md:py-16 px-4 sm:px-6" style={{ backgroundColor: "#EAF4FA" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-10"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: "#8B4A5A" }}>
            Chương trình học
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold leading-tight text-balance" style={{ color: "#64313E" }}>
            Các Khóa Học
          </h2>
          <p className="font-sans text-base mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "#486A7E" }}>
            Mỗi khóa học gồm 20 buổi, thiết kế linh hoạt theo trình độ và nhu cầu của học viên.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border p-5 md:p-7 mb-8 md:mb-10"
          style={{ backgroundColor: "#F7FBFE", borderColor: "#B7CFDC" }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4" style={{ color: "#64313E" }}>
            🎶✨ TUYỂN SINH LỚP HỌC ĐÀN TRANH ✨🎶
          </h3>

          <div className="mt-4 space-y-3 font-sans text-[0.98rem] sm:text-base leading-7 sm:leading-relaxed" style={{ color: "#5D3A46" }}>
            <p>Bạn yêu thích âm nhạc dân tộc?</p>
            <p>Bạn muốn tìm một nhạc cụ vừa duyên dáng vừa giàu cảm xúc?</p>
            <p>Hãy đến với lớp học đàn tranh - nơi gìn giữ và lan tỏa vẻ đẹp của âm nhạc truyền thống Việt Nam!</p>
          </div>

          <div className="mt-6 space-y-6 font-sans" style={{ color: "#5D3A46" }}>
            <div>
              <h4 className="font-semibold text-[1.02rem] sm:text-[1.05rem] mb-2.5" style={{ color: "#8B4A5A" }}>🌸 Nội dung khóa học</h4>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[0.98rem] leading-7 sm:leading-relaxed">
                <li>Làm quen và nắm vững kỹ thuật cơ bản trên đàn tranh.</li>
                <li>Luyện ngón, nhạc lý, tiết tấu.</li>
                <li>Học các làn điệu dân ca, nhạc truyền thống và những bản nhạc hiện đại được chuyển soạn cho đàn tranh.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[1.02rem] sm:text-[1.05rem] mb-2.5" style={{ color: "#8B4A5A" }}>🌸 Đối tượng</h4>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[0.98rem] leading-7 sm:leading-relaxed">
                <li>Lớp học linh hoạt - phù hợp với mọi lứa tuổi, không cần có kiến thức âm nhạc trước.</li>
                <li>Học viên muốn học từ cơ bản hoặc nâng cao.</li>
                <li>Có nhiều phương thức học tập như: 1 kèm 1 tại nhà hoặc gộp lớp ( khi có trên 2 học viên có nhu cầu)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[1.02rem] sm:text-[1.05rem] mb-2.5" style={{ color: "#8B4A5A" }}>🌸 Ưu điểm của lớp học</h4>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[0.98rem] leading-7 sm:leading-relaxed">
                <li>Giáo viên có kinh nghiệm biểu diễn và giảng dạy.</li>
                <li>Giáo trình dễ hiểu, phù hợp với từng trình độ.</li>
                <li>Không khí học tập thân thiện, truyền cảm hứng.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[1.02rem] sm:text-[1.05rem] mb-2.5" style={{ color: "#8B4A5A" }}>🌸 Giải đáp thắc mắc</h4>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[0.98rem] leading-7 sm:leading-relaxed">
                <li>Liên hệ: [Số điện thoại/Zalo: 0984542058].</li>
              </ul>
            </div>

            <p className="pt-2 text-[1rem] sm:text-[1.05rem] leading-8 sm:leading-relaxed" style={{ color: "#64313E" }}>
              👉 Hãy để tiếng đàn tranh đưa bạn đến gần hơn với âm nhạc Việt Nam – dịu dàng, sâu lắng mà đầy sức sống.
            </p>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border-2"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#B7CFDC",
                boxShadow: "0 10px 28px rgba(100,49,62,0.1)",
              }}
            >
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #64313E, #C1DBE8)" }} />

              <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
                <div className="mb-5">
                  <span
                    className="font-sans text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#E7F2F8", color: "#8B4A5A" }}
                  >
                    {course.badge}
                  </span>
                  <h3 className="font-serif text-[2rem] font-extrabold mt-3 leading-tight" style={{ color: "#64313E" }}>
                    {course.title}
                  </h3>
                  <p className="font-sans text-sm mt-1 font-medium" style={{ color: "#3F6D83" }}>
                    {course.subtitle} · {course.sessions} buổi/khóa
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden mb-5 border" style={{ borderColor: "#B7CFDC" }}>
                  {course.pricingOptions.map((opt, i) => (
                    <div
                      key={opt.label}
                      className="flex items-center justify-between gap-3 px-4 py-3"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#F4FAFE" : "#FFFFFF",
                        borderTop: i > 0 ? "1px solid #B7CFDC" : undefined,
                      }}
                    >
                      <span className="font-sans text-sm sm:text-base" style={{ color: "#486A7E" }}>
                        {opt.label}
                      </span>
                      <span className="font-sans font-bold text-[1.05rem] sm:text-[1.12rem]" style={{ color: "#64313E" }}>
                        {opt.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => onRegisterClick(course.id)}
                    className="w-full font-sans font-semibold py-3 rounded-xl transition-all duration-300 text-white hover:shadow-[0_4px_20px_rgba(100,49,62,0.35)] hover:brightness-110 active:scale-95 tracking-wide"
                    style={{ backgroundColor: "#64313E" }}
                  >
                    Đăng ký khóa này
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

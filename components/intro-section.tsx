"use client"

import { motion, type Variants } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const skills = [
  "Học kỹ thuật cơ bản đến nâng cao theo từng giai đoạn",
  "Luyện ngón - nhạc lý - tiết tấu bài bản",
  "Học dân ca & nhạc hiện đại chuyển soạn",
  "Biểu diễn thực tế trong các buổi học và sự kiện",
  "Lớp học linh hoạt: 1:1 hoặc lớp ghép",
  "Phù hợp mọi lứa tuổi, không cần kinh nghiệm trước",
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export function IntroSection() {
  return (
    <section id="gioi-thieu" className="relative py-16 md:py-20 px-6 overflow-hidden" style={{ backgroundColor: "#F2F8FC" }}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{ background: "linear-gradient(180deg, rgba(100,49,62,0.16) 0%, rgba(100,49,62,0) 100%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1 grid grid-cols-[1.08fr_0.92fr] sm:grid-cols-2 grid-rows-[1.02fr_0.98fr] sm:grid-rows-2 gap-3 h-[500px] sm:h-[520px]">
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-[1.35rem] sm:rounded-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-qeg4GmaOzsypf2R1XIfSHPZ79TRLUu.jpeg"
                alt="Nghệ sĩ đàn tranh trong tà áo dài trắng"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 56vw, (max-width: 768px) 50vw, 50vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: "#64313E" }} />
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-[1.35rem] sm:rounded-2xl group h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xu8SUGBq07VWF5r8IFu2qRJq0aIWE3.png"
                alt="Biểu diễn trên sân khấu"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 44vw, (max-width: 768px) 25vw, 25vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: "#64313E" }} />
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-[1.35rem] sm:rounded-2xl group h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eHRkajEqCKNI4K5dz1wla2vOAQxmHH.png"
                alt="Bằng tốt nghiệp đại học âm nhạc"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 44vw, (max-width: 768px) 25vw, 25vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: "#64313E" }} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: "#8B4A5A" }}>
              Giới thiệu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold leading-tight text-balance" style={{ color: "#64313E" }}>
              Lộ Trình Bài Bản
              <br />
              Nuôi Dưỡng Tâm Hồn Âm Nhạc
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#486A7E" }}>
              Lộ trình học được thiết kế bài bản và thực tiễn, giúp học viên phát triển kỹ thuật, nhạc lý, tiết tấu và khả năng biểu đạt cảm xúc qua từng tác phẩm đàn tranh.
            </p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2.5"
            >
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 font-sans text-[0.98rem] leading-[1.55]" style={{ color: "#5D3A46" }}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#8B4A5A" }} aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </motion.ul>

            <div className="h-px w-16 mt-2" style={{ backgroundColor: "#8B4A5A" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

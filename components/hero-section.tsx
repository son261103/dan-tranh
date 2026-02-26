"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  onRegisterClick: () => void
  onCoursesClick: () => void
}

export function HeroSection({ onRegisterClick, onCoursesClick }: HeroSectionProps) {
  return (
    <section className="relative h-[100svh] min-h-[100svh] md:min-h-screen flex items-start md:items-center md:justify-start justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:58%_74%] md:bg-[position:70%_center] lg:bg-[position:67%_center]"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xu8SUGBq07VWF5r8IFu2qRJq0aIWE3.png')`,
        }}
        aria-hidden="true"
      />

      {/* Layered overlay: darker top/bottom, clearer center (face area) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,18,0.8) 0%, rgba(10,24,18,0.45) 38%, rgba(10,24,18,0.2) 60%, rgba(10,24,18,0.72) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(8,22,15,0.72) 0%, rgba(8,22,15,0.55) 35%, rgba(8,22,15,0.1) 63%, rgba(8,22,15,0) 82%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 46%, rgba(0,0,0,0.4) 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20 sm:pt-16 sm:pb-16 md:py-0 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto flex flex-col md:mx-0 md:max-w-[500px] lg:max-w-[560px] md:ml-2 lg:ml-4 xl:ml-8"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-12 sm:w-16 rounded-full bg-[#D6E4C7]"
            />
            <p
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.35em] font-semibold"
              style={{ color: "#DDEACF" }}
            >
              Âm Nhạc Dân Tộc
            </p>
          </div>

          <h1
            className="font-serif text-[2.65rem] sm:text-5xl md:text-[4rem] lg:text-[4.8rem] font-extrabold leading-[1.02] sm:leading-[1.08] tracking-tight text-balance mb-4 md:mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Lớp Học Đàn Tranh
            <br />
            <span style={{ color: "#DDEACF" }}>Giữ Hồn</span> Âm Nhạc <br className="hidden sm:block" />Dân Tộc
          </h1>

          <p
            className="font-sans text-[1.02rem] sm:text-lg md:text-xl leading-relaxed mb-5 md:mb-10 font-light max-w-2xl mx-auto md:mx-0"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Học từ cơ bản đến nâng cao - Phù hợp mọi lứa tuổi
          </p>

          <div className="hidden md:flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center md:justify-start items-center w-full max-w-md sm:max-w-none mx-auto md:mx-0 mt-2 sm:mt-0">
            <button
              onClick={onRegisterClick}
              className="w-full sm:w-auto font-sans font-semibold text-[1.02rem] sm:text-base px-8 sm:px-9 py-2.5 sm:py-4 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(221,234,207,0.35)] hover:scale-105 active:scale-95 tracking-wide"
              style={{ backgroundColor: "#354024" }}
            >
              Đăng ký tư vấn ngay
            </button>
            <button
              onClick={onCoursesClick}
              className="w-full sm:w-auto font-sans font-semibold text-[1.02rem] sm:text-base px-8 sm:px-9 py-2.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-white/15 active:scale-95 border sm:border-2 backdrop-blur-sm tracking-wide"
              style={{
                borderColor: "rgba(221,234,207,0.65)",
                color: "#F4F7EE",
              }}
            >
              Xem khóa học
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown
          className="w-8 h-8"
          style={{ color: "rgba(245, 241, 232, 0.6)" }}
          aria-label="Cuộn xuống"
        />
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#EAF4FA", borderTop: "1px solid #AAC2CF" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#F7FBFE", border: "1.5px solid #AAC2CF" }}>
            <Music className="w-5 h-5" style={{ color: "#8B4A5A" }} aria-hidden="true" />
          </div>
          <h2 className="font-serif text-xl font-extrabold" style={{ color: "#64313E" }}>
            Lớp Học Đàn Tranh
          </h2>
          <p className="font-sans text-sm font-medium" style={{ color: "#3F6D83" }}>
            Âm Nhạc Dân Tộc
          </p>
        </motion.div>

        <div className="h-px w-24" style={{ backgroundColor: "#AAC2CF" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: "#8B4A5A" }} aria-hidden="true" />
            <span className="font-sans text-sm" style={{ color: "#486A7E" }}>
              Phường Hải Dương, TP Hải Phòng
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ backgroundColor: "rgba(72,106,126,0.25)" }} />
          <a href="tel:0984542058" className="flex items-center gap-2 transition-colors" style={{ color: "#486A7E" }}>
            <Phone className="w-4 h-4 shrink-0" style={{ color: "#8B4A5A" }} aria-hidden="true" />
            <span className="font-sans text-sm">0984 542 058</span>
          </a>
        </motion.div>

        <p className="font-sans text-xs" style={{ color: "#6A8494" }}>
          © {new Date().getFullYear()} Lớp Học Đàn Tranh Việt Nam & Đàn Cổ Tranh Trung Quốc
        </p>
      </div>
    </footer>
  )
}

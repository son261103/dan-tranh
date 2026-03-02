"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#E3ECD9", borderTop: "1px solid #CBD7BC" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "#F3F7EB", border: "1.5px solid #CBD7BC" }}>
            <Music className="w-5 h-5" style={{ color: "#4C3D19" }} aria-hidden="true" />
          </div>
          <h2 className="font-serif text-xl font-extrabold" style={{ color: "#354024" }}>
            Lớp Học Đàn Tranh
          </h2>
          <p className="font-sans text-sm font-medium" style={{ color: "#4C3D19" }}>
            Âm Nhạc Dân Tộc
          </p>
        </motion.div>

        <div className="h-px w-24" style={{ backgroundColor: "#CBD7BC" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: "#4C3D19" }} aria-hidden="true" />
            <span className="font-sans text-sm" style={{ color: "#5A6645" }}>
              Phường Hải Dương, TP Hải Phòng
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ backgroundColor: "rgba(90,102,69,0.25)" }} />
          <a href="tel:0984542058" className="flex items-center gap-2 transition-colors" style={{ color: "#5A6645" }}>
            <Phone className="w-4 h-4 shrink-0" style={{ color: "#4C3D19" }} aria-hidden="true" />
            <span className="font-sans text-sm">0984 542 058</span>
          </a>
        </motion.div>

        <p className="font-sans text-xs" style={{ color: "#7A8565" }}>
          © {new Date().getFullYear()} Lớp Học Đàn Tranh Việt Nam & Đàn Cổ Tranh Trung Quốc
        </p>
      </div>
    </footer>
  )
}

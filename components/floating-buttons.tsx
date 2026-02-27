"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

// Simple Zalo SVG icon
function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="24" fill="currentColor" />
      <text
        x="50%"
        y="57%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
        fontFamily="var(--font-main), 'Oleo Script', sans-serif"
      >
        Z
      </text>
    </svg>
  )
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3 items-end">
      {/* Zalo button */}
      <motion.a
        href="https://zalo.me/0984542058"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ Zalo"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,104,255,0.5)]"
        style={{ backgroundColor: "#0068FF" }}
      >
        <span className="sr-only">Zalo</span>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 sm:w-8 sm:h-8"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="57%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="800"
            fontFamily="var(--font-main), 'Oleo Script', sans-serif"
          >
            Zalo
          </text>
        </svg>
      </motion.a>

      {/* Phone button */}
      <motion.a
        href="tel:0984542058"
        aria-label="Gọi điện 0984542058"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        whileHover={{ scale: 1.15 }}
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(76,61,25,0.5)]"
        style={{ backgroundColor: "#354024" }}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
      </motion.a>

      {/* Tooltip label on hover */}
      <div
        className="absolute right-16 bottom-1 font-sans text-xs whitespace-nowrap px-2 py-1 rounded-md opacity-0 pointer-events-none"
        style={{ backgroundColor: "#4C3D19", color: "#F4F7EE" }}
      />
    </div>
  )
}

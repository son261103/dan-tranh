"use client"

import { useState, useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { CoursesSection } from "@/components/courses-section"
import { RegisterModal } from "@/components/register-modal"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Toaster } from "@/components/ui/toaster"
import type { CourseType } from "@/components/courses-section"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<CourseType>(null)
  const coursesRef = useRef<HTMLDivElement>(null)

  function openRegisterModal(course?: CourseType) {
    setSelectedCourse(course ?? null)
    setModalOpen(true)
  }

  function scrollToCourses() {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="overflow-x-hidden">
      <HeroSection
        onRegisterClick={() => openRegisterModal()}
        onCoursesClick={scrollToCourses}
      />

      <IntroSection />

      <div ref={coursesRef}>
        <CoursesSection onRegisterClick={(course) => openRegisterModal(course)} />
      </div>

      <Footer />

      <FloatingButtons />

      <RegisterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />

      <Toaster />
    </main>
  )
}

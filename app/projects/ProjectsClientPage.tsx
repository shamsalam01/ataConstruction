"use client"

import Image from "next/image"
import ProjectsSection from "@/components/projects-section"
import AchievementsSection from "@/components/achievements-section"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function ProjectsClientPage() {
  return (
    <>
      {/* Page Header */}
      {/* <section className="bg-[#132d4c] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Projects</h1>
          <div className="w-24 h-1 bg-[#00aee7] mx-auto mt-6"></div>
        </div>
      </section> */}

      {/* Project Showcase */}
     

      {/* Projects Section */}
      <ProjectsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </>
  )
}

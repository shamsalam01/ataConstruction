'use client';
import HeroSlider from "@/components/hero-slider"

import ServicesSection from "@/components/services-section"
import ProjectGallery from "@/components/project-gallery"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import AchievementsSection from "@/components/achievements-section"
// import ProjectsSection from "@/components/projects-section"
import ClientsSection from "@/components/clients-section"
// import TestimonialsSection from "@/components/testimonials-section"
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ProjectGallery />
      <WhyChooseUsSection />
      <AchievementsSection />
{/*       <ProjectsSection /> */}
      <ClientsSection />
{/*       <TestimonialsSection /> */}
    </>
  )
}

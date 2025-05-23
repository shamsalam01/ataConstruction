"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const backgroundImages = [
  "/images/front_02.jpg",
  "/images/service12.png",
  "/images/service1.jpg",
  "/images/Front Slide _02.png",
  "/images/Front_01.png",
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Images (Only these change) */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          {image ? (
            <Image
              src={image || "/placeholder.svg"}
              alt={`ATA CONSTRUCTIONS - Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-800"></div>
          )}
        </div>
      ))}

      {/* Static Content (Doesn't change with slides) */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col space-y-2 sm:space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">Welcome</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">to</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">ATA CONSTRUCTIONS PVT LTD</h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold font-serif mt-2">
              " Reliable. Resilient. Remarkable."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${index === currentSlide ? "bg-[#00aee7]" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider

"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projectImages = [
   "/images/Paras_01.png",
  "/images/Paras_02.png",
  "/images/Paras_03.png",
  "/images/Mahindra_01.png",
  "/images/mahindra_02.png",
  "/images/Tata_01.png",
  "/images/Tata_02.png",
  "/images/gal4.jpeg",
  "/images/Taj Resort_01.png",
  "/images/gal6.jpeg",
  "/images/gal7.jpeg",
  "/images/gal8.jpeg",
  "/images/gal9.jpeg",
  "/images/School_01.png",
  "/images/School_02.png",
  "/images/School_03.png",
  "/images/LEARNING SCHOOL MATTER_04.png",
  "/images/LEARNING SCHOOL MATTER_02.png",
  "/images/LEARNING SCHOOL MATTER_03.png",
  "/images/Umang_02.png",
]

const ProjectGallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! - 1 + projectImages.length) % projectImages.length)
    }
  }

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! + 1) % projectImages.length)
    }
  }

  return (
    <section ref={ref} className="pt-0 pb-2 mt-0 sm:mt-0 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-[#132d4c] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          PROJECT GALLERY
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-60 overflow-hidden cursor-pointer group rounded-lg" // Added rounded-lg for border radius
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg" // Added rounded-lg for border radius
              />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen image modal with navigation */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              key="fullscreen"
              className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 text-white z-50 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
                >
                  <ChevronLeft size={30} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 text-white z-50 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
                >
                  <ChevronRight size={30} />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="absolute top-4 right-4 text-white z-50 p-2 hover:text-gray-300"
                  aria-label="Close fullscreen"
                >
                  <X size={32} />
                </button>

                {/* Fullscreen Image */}
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <Image
                    src={projectImages[activeImageIndex]}
                    alt={`Project ${activeImageIndex + 1}`}
                    priority
                    fill
                    sizes="100vw"
                    className="object-contain h-full rounded-lg" // Added rounded-lg for border radius
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectGallery

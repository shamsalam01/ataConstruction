"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Pause, Play } from "lucide-react"

const clients = [
  { id: 1, name: "TAJ", logo: "/images/client1.png" },
  { id: 2, name: "Mahindra Lifespaces", logo: "/images/client2.png" },
  { id: 3, name: "TATA Housing", logo: "/images/client3.png" },
  { id: 4, name: "The Heritage", logo: "/images/client14.jpeg" },
  { id: 5, name: "Conscient", logo: "/images/client5.png" },
  { id: 6, name: "PARAS", logo: "/images/client16.jpeg" },
  { id: 7, name: "UMANG", logo: "/images/client7.png" },
   { id: 8, name: "BRIJWASI", logo: "/images/client8.png" },
]

const ClientsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [isPaused, setIsPaused] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number
    let lastTimestamp = 0
    const speed = 0.5

    const animate = (timestamp: number) => {
      if (!isPaused && carouselRef.current) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp
          const newPosition = currentPosition + speed * delta
          const containerWidth = carouselRef.current.scrollWidth
          const viewportWidth = carouselRef.current.offsetWidth

          if (newPosition > containerWidth - viewportWidth) {
            setCurrentPosition(0)
          } else {
            setCurrentPosition(newPosition)
          }
        }
        lastTimestamp = timestamp
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, currentPosition])

  const togglePause = () => setIsPaused((prev) => !prev)

  const handleHover = () => setIsPaused(true)
  const handleUnhover = () => setIsPaused(false)

  return (
    <section ref={ref} className="relative py-16 bg-[#2c6cb0]">
      {/* Top-right pause/play icon */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={togglePause}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Toggle Pause"
        >
          {isPaused ? <Play className="text-[#2c6cb0] w-5 h-5" /> : <Pause className="text-[#2c6cb0] w-5 h-5" />}
        </button>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white font-['Poppins']">OUR CLIENTS</h2>
          <div className="w-24 h-1 bg-white mx-auto my-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div
            ref={carouselRef}
            className="flex items-center space-x-16 py-8"
            style={{
              transform: `translateX(-${currentPosition}px)`,
              transition: isPaused ? "none" : "transform 0.1s linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 bg-white/80 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center h-24 w-40"
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {client.logo ? (
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <div className="text-white text-center">{client.name}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection

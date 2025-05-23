"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-4 bottom-8 z-50"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <a
            href="https://wa.me/919891561318"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            aria-label="Contact us on WhatsApp"
          >
            <Image src="/images/whatsapp-icon.jpeg" alt="WhatsApp" width={32} height={32} className="rounded-full" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton

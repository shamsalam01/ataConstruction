"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

interface PortfolioItem {
  category: string
  images: string[]
}

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[]
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioItems }) => {
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>({})

  const handlePrev = (category: string) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [category]:
        prev[category] > 0
          ? prev[category] - 1
          : portfolioItems.find((item) => item.category === category)!.images.length - 1,
    }))
  }

  const handleNext = (category: string) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [category]:
        prev[category] < portfolioItems.find((item) => item.category === category)!.images.length - 1
          ? prev[category] + 1
          : 0,
    }))
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.category} className="relative h-96 overflow-hidden rounded-lg shadow-md">
              <div className="absolute top-2 left-2 bg-white bg-opacity-75 rounded px-2 py-1 text-sm font-medium">
                {item.category}
              </div>
              {item.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === (currentSlides[item.category] || 0) ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {image ? (
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${item.category} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      onError={(e: any) => {
                        e.currentTarget.onerror = null // prevents looping
                        e.currentTarget.src = "/images/placeholder.png"
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-300"></div>
                  )}
                </div>
              ))}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
                <button
                  onClick={() => handlePrev(item.category)}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleNext(item.category)}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection

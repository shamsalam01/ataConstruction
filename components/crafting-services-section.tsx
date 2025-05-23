"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const CraftingServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29.png-SmRPnHVHtrCWOw832ky2iC9CPS9mOA.jpeg"
                alt="OPTIMA STAR Technical Services"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#00aee7] h-full flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#132d4c] mr-3">OPTIMA STAR TECHNICAL SERVICES</h2>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services%20icon-KjjlUsL4SyJKmQfeD1d1Nc5BlJUNmO.png"
                  alt="Services"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="w-16 sm:w-20 h-1 bg-[#00aee7] mb-5 sm:mb-6"></div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                OPTIMA STAR TECHNICAL SERVICES L.L.C. is a professionally managed company catering to the growing demand
                in the U.A.E. market for reliable services and consultancy in building insulation. The ongoing
                construction boom and continuous expansion of various entities have fueled the growth of both the
                industry and our company.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                At OPTIMA STAR TECHNICAL SERVICES L.L.C., we adhere to stringent quality control systems and safety
                policies. Our vision for growth is centered on delivering superior quality, innovation, and integrity.
                Within this framework, we assure all our clients sustainable, environmentally friendly, and integrated
                solutions, driven by our commitment to excellence and continuous development.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                As a full-service professional engineering firm, OPTIMA STAR TECHNICAL SERVICES L.L.C. serves the
                construction industry with expertise in:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex flex-col">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <button
                        className="font-medium text-left flex items-center justify-between w-full"
                        onClick={(e) => {
                          e.preventDefault()
                          const dropdown = e.currentTarget.nextElementSibling
                          if (dropdown) {
                            dropdown.classList.toggle("hidden")
                          }
                        }}
                      >
                        <span>Insulation Contracting</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <ul className="ml-0 mt-1 space-y-1 pl-5 hidden">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#00aee7] rounded-full mr-2"></span>
                          <span className="text-sm">Combo</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#00aee7] rounded-full mr-2"></span>
                          <span className="text-sm">GRP</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#00aee7] rounded-full mr-2"></span>
                          <span className="text-sm">Waterproofing</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#00aee7] rounded-full mr-2"></span>
                          <span className="text-sm">Injection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Tiling Works</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Painting Services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Interior Services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Flooring Solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Electromechanical Services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Wallpaper Fixing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Electrical Fitting & Fixtures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Plumbing & Sanitary Installation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>False Ceiling & Partition Installation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Plaster Works</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                  <span>Swimming Pool Installation</span>
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  size="lg"
                  className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8"
                  onClick={() => document.getElementById("booking-form-trigger")?.click()}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blue banner section */}
      <div className="mt-8 bg-[#1e3a8a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold">ONE CALL CAN SOLVE ALL YOUR HOUSE PROBLEMS</h3>
                <p className="text-sm mt-1">
                  Call us today for a quote on your Home Renovation and enjoy our exclusive discount.
                </p>
              </div>
            </div>
            <Button
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded-md font-semibold"
              onClick={() => document.getElementById("booking-form-trigger")?.click()}
            >
              BOOK AN APPOINTMENT NOW!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftingServicesSection

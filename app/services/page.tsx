"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const mainServices = [
  {
    id: "civil-structural",
    title: "Civil & Structural Construction.",
    description:
      "We provide comprehensive civil and structural construction services for residential, commercial, and industrial projects. Our team of experienced engineers and workers ensures high-quality construction that meets all safety standards and client requirements.",
    image: "/images/civilcons3.jpg",
  },
  {
    id: "internal-external",
    title: "Internal Finishing.",
    description:
      "Our finishing services ensure high-quality interior and exterior aesthetics for all types of buildings. We specialize in wall finishes, flooring, ceiling work, painting, and exterior cladding to enhance the appearance and durability of your property.",
    image: "/images/intserv.jpeg",
  },
  {
    id: "external-development",
    title: "External Development.",
    description:
      "We offer complete external development solutions including landscaping, drainage systems, and site improvements. Our services help create functional and attractive outdoor spaces that complement your building and enhance its value.",
    image: "/images/ext1.jpg",
  },
  {
    id: "Electrical-works",
    title: "Electrical Works.",
    description:
      "Our electrical services cover everything from wiring and lighting to power distribution and safety systems. We ensure that all electrical installations are safe, efficient, and compliant with local regulations.",
    image: "/images/serv4.jpg",
  },
]

const specializedServices = [
  {
    id: "civil-construction",
    title: "Civil Construction",
    description:
      "Our civil construction services cover everything from foundation work to structural framing and concrete pouring. We handle projects of all sizes with precision and attention to detail, ensuring structural integrity and longevity.",
    image: "/images/civilcons2.png",
  },
  {
    id: "interior-works",
    title: "Interior Works",
    description:
      "Our interior services include custom cabinetry, shelving, and woodwork to enhance the functionality and aesthetics of your living spaces. We create beautiful and practical interiors tailored to your specific needs and preferences.",
    image: "/images/School_03.png",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    description:
      "We offer end-to-end project management and execution for turnkey construction projects. From initial design to final handover, we handle all aspects of the construction process, providing a hassle-free experience for our clients.",
    image: "/images/Tata_02.png",
  },
  {
    id: "plumbing-firefighting",
    title: "Plumbing & Firefighting Works",
    description:
      "Our specialized team handles all plumbing and firefighting system installations with expertise. We ensure reliable water supply, efficient drainage, and comprehensive fire safety systems that comply with all relevant regulations and standards.",
    image: "/images/Taj Resort_03.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBookService = (serviceId: string) => {
    sessionStorage.setItem("selectedService", serviceId)
    document.getElementById("quotation-form-trigger")?.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Section */}
      <motion.section className="pt-4 pb-12" variants={containerVariants} initial="hidden" animate="visible">
        <div className="container mx-auto px-4">
          {/* Main Services */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-300"></div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#132d4c] mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-6 text-justify">{service.description}</p>
                    <div className="mt-auto pt-4">
                      <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button
                          className="bg-[#00aee7] hover:bg-[#132d4c] text-white"
                          onClick={() => handleBookService(service.id)}
                        >
                          Book Service
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#132d4c]">SPECIALIZED CORPORATE SERVICES:</h2>
            <div className="w-20 h-1 bg-[#00aee7] mx-auto my-4"></div>
          </motion.div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-300"></div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#132d4c] mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-6 text-justify">{service.description}</p>
                    <div className="mt-auto pt-4">
                      <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button
                          className="bg-[#00aee7] hover:bg-[#132d4c] text-white"
                          onClick={() => handleBookService(service.id)}
                        >
                          Book Service
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-12 bg-[#132d4c]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Our Services?</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a free quote. Our team is ready to assist you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button
              size="lg"
              className="bg-white text-[#132d4c] hover:bg-[#00aee7] hover:text-white px-10 py-6 h-auto text-lg"
              onClick={() => document.getElementById("quotation-form-trigger")?.click()}
            >
              Get Quotation
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

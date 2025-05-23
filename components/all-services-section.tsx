"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// All services with the provided images
const services = [
  {
    id: "painting-waterproofing",
    title: "Painting & Waterproofing Systems",
    description:
      "Our professional painting and waterproofing services ensure long-lasting protection and aesthetic appeal for all types of surfaces and structures.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/painting%20and%20waterproofing.jpg-F9l5Axup05XGBdPBGyFLENJNipn3Gy.jpeg",
  },
  {
    id: "flooring",
    title: "Flooring Solutions",
    description:
      "We provide high-quality flooring solutions for residential and commercial properties, offering a wide range of materials and designs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flooring%20solutions.jpg-BaqRsiZc1y8YByynJQcVGXRruqD1Ws.jpeg",
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description:
      "Our comprehensive HVAC services include installation, maintenance, and repair of air-conditioning, ventilation, and air filtration systems for optimal indoor comfort.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HVAC%20systems.jpg-xZff7OdMj3oHdqXJC2FqLolNFCgilE.jpeg",
  },
  {
    id: "electromechanical",
    title: "Electromechanical Services",
    description:
      "We offer expert installation and maintenance of electromechanical equipment, ensuring efficient and reliable operation for all your technical needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Electromechanical%20services.jpg-1UcuWtzjwHSxGXgBVYpvUT8UgYJ1vk.jpeg",
  },
  {
    id: "plumbing",
    title: "Plumbing & Sanitary Installation",
    description:
      "Our plumbing services cover installation, repair, and maintenance of water supply, drainage, and sanitary systems with high-quality materials and workmanship.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plumbing%20and%20sanitary.jpg-tu9iV5unTeJ0L4J2rgo6q6NMpiXM6V.jpeg",
  },
  {
    id: "tiling",
    title: "Tiling Works",
    description:
      "We provide professional floor and wall tiling services with precision and attention to detail, using premium materials for lasting results.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiling%20works.jpg-dzhgiFaFIYRX4wfCR4pyPqfE23Ghfe.jpeg",
  },
  {
    id: "insulation",
    title: "Insulation Contracting",
    description:
      "Our insulation services help improve energy efficiency and comfort in buildings through high-quality materials and expert installation techniques.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insulation%20contracting.jpg-QxqA9rclvRvUKRzsDYzPaLkl5Fk9lN.jpeg",
    subServices: [
      { id: "combo", name: "Combo" },
      { id: "grp", name: "GRP" },
      { id: "waterproofing", name: "Waterproofing" },
    ],
  },
  {
    id: "wallpaper",
    title: "Wallpaper Fixing",
    description:
      "Transform your spaces with our professional wallpaper installation services, offering a wide selection of designs and textures for any interior.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaper%20fixing.jpg-nNrSgz6YMd5aVp38fGMAPKHROT7JWs.jpeg",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Partition Installation",
    description:
      "We design and install custom false ceilings and light partitions to enhance the aesthetics and functionality of your spaces.",
    image: "/images/ceiling-installation.jpeg",
  },
  {
    id: "electrical",
    title: "Electrical Fittings & Fixtures",
    description:
      "Our electrical services include installation, repair, and maintenance of electrical fittings and fixtures for safe and efficient power distribution.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electrical%20fitting%20and%20fixtures.jpg-ihGsPpduaN1DqtCAi2d6vTFN7eE6w5.jpeg",
  },
  {
    id: "plaster",
    title: "Plaster Works",
    description:
      "We provide high-quality plastering services for walls and ceilings, ensuring smooth and durable surfaces for your property.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plaster%20works.jpg-5YShlk1hJ65TFlp7YQLZARUc2A3Vdl.jpeg",
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool Installation",
    description:
      "From design to completion, our swimming pool installation services create beautiful and functional aquatic spaces for residential and commercial properties.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-03%20070501-yeCTDsEBO1eVXzHdrQenlrGupXOvfp.png",
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

const AllServicesSection = () => {
  const [selectedSubServices, setSelectedSubServices] = useState<{ [key: string]: string[] }>({})

  const handleSubServiceToggle = (serviceId: string, subServiceId: string) => {
    setSelectedSubServices((prev) => {
      const current = prev[serviceId] || []
      if (current.includes(subServiceId)) {
        return {
          ...prev,
          [serviceId]: current.filter((id) => id !== subServiceId),
        }
      } else {
        return {
          ...prev,
          [serviceId]: [...current, subServiceId],
        }
      }
    })
  }

  const handleBookService = (serviceId: string) => {
    // Store the selected service and any sub-services
    const subServices = selectedSubServices[serviceId] || []
    sessionStorage.setItem("selectedService", serviceId)
    if (subServices.length > 0) {
      sessionStorage.setItem("selectedSubServices", JSON.stringify({ [serviceId]: subServices }))
    }

    // Trigger the booking form
    document.getElementById("booking-form-trigger")?.click()
  }

  return (
    <section id="all-services-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132d4c]">ALL OUR SERVICES</h2>
          <div className="w-24 h-1 bg-[#00aee7] mx-auto my-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive range of technical services designed to meet all your needs with excellence and
            precision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 ${index % 2 === 0 ? "bg-[#132d4c]/70" : "bg-[#00aee7]/70"} z-10`}
                ></div>
                {service.image ? (
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gray-300"></div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#132d4c] mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>

                {/* Sub-services selection for insulation */}
                {service.id === "insulation" && service.subServices && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Select options:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((subService) => (
                        <button
                          key={subService.id}
                          onClick={() => handleSubServiceToggle(service.id, subService.id)}
                          className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            selectedSubServices[service.id]?.includes(subService.id)
                              ? "bg-[#00aee7] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {subService.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center mt-4">
                  <Button
                    className="bg-[#00aee7] hover:bg-[#132d4c] text-white"
                    onClick={() => handleBookService(service.id)}
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AllServicesSection

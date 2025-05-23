"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const homeServices = [
  {
    id: "civil-construction",
    title: "Civil & Structural Construction",
    description:
      "We provide comprehensive civil and structural construction services for residential, commercial, and industrial projects.",
    image: "/images/civilcons3.jpg",
  },
  {
    id: "interior-exterior",
    title: "Internal Finishing",
    description:
      "Our finishing services ensure high-quality interior and exterior aesthetics for all types of buildings.",
    image: "/images/intserv.jpeg",
  },
 {
    id: "external-development",
    title: "External Development",
    description:
      "We offer complete external development solutions including landscaping, drainage systems, and site improvements.",
    image: "/images/ext1.jpg",
  },
]

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-10 sm:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#132d4c]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
           OUR SERVICES 
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-[#00aee7] mx-auto my-4 sm:my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
{/*             We offer a wide range of construction and development services to meet all your needs. Our expert team
            ensures high-quality service delivery for both residential and commercial projects. */}
          </motion.p>
        </div>

        {/* Display 3 services on homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                {/* Removed blue overlay */}
                {service.image ? (
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gray-300"></div>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-[#132d4c] mb-2 sm:mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center mb-5 sm:mb-6">{service.description}</p>
                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    className="border-[#00aee7] text-[#132d4c] hover:bg-[#00aee7] hover:text-white w-full"
                    onClick={() => {
                      sessionStorage.setItem("selectedService", service.id)
                      document.getElementById("quotation-form-trigger")?.click()
                    }}
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services button */}
        <div className="pt-4 text-center mt-3 sm:mt-3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="/services">
              <Button size="lg" className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8 py-6 h-auto text-lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

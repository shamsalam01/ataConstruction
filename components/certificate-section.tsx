"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const CertificateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-4"
          >
            <h2 className="text-3xl font-bold text-[#132d4c] mr-3">OUR CERTIFICATIONS</h2>
            <Award className="h-8 w-8 text-[#00aee7]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#00aee7] mx-auto my-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto"
          >
            We are proud to be certified by industry-leading organizations, demonstrating our commitment to quality and
            excellence in all our services.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md max-w-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-[#00aee7] mr-3" />
              <h3 className="text-xl font-bold text-[#132d4c]">Geobit Approved Applicator</h3>
            </div>
            <p className="text-gray-700 mb-4">
              OPTIMA STAR TECHNICAL SERVICES L.L.C. is registered as an Approved and Experienced Applicator for the
              Betoflex range of products.
            </p>
            <div className="relative h-48 overflow-hidden rounded-md border-2 border-gray-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APPROVED%20APPLICATOR%20CERTIFICATE-GEOBIT-ZtqvDqq9HdQKQJEHtj4BoGm3Fnxjs4.png"
                alt="Geobit Certificate"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <Button className="bg-[#00aee7] hover:bg-[#132d4c]">View Certificate</Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certificate Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              <div className="p-1">
                <div className="relative w-full" style={{ height: "80vh" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APPROVED%20APPLICATOR%20CERTIFICATE-GEOBIT-ZtqvDqq9HdQKQJEHtj4BoGm3Fnxjs4.png"
                    alt="Geobit Approved Applicator Certificate"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CertificateSection

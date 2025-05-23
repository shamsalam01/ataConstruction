"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Award } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const CertificateModal = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  return (
    <Dialog>
      <DialogTrigger id="certificate-modal-trigger" className="hidden">
        Open Certificate
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 bg-white rounded-xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-[#132d4c]">OUR CERTIFICATIONS</h2>
              <Award className="h-6 w-6 text-[#00aee7] ml-2" />
            </div>
            <button
              onClick={() => document.querySelector('[data-state="open"] button[data-state="closed"]')?.click()}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="w-24 h-1 bg-[#00aee7] mb-6"></div>

          <p className="text-gray-700 mb-8 text-center">
            We are proud to be certified by industry-leading organizations, demonstrating our commitment to quality and
            excellence in all our services.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-[#00aee7] mr-2" />
              <h3 className="text-xl font-bold text-[#132d4c]">Geobit Approved Applicator</h3>
            </div>

            <p className="text-gray-700 mb-6">
              OPTIMA STAR TECHNICAL SERVICES L.L.C. is registered as an Approved and Experienced Applicator for the
              Betoflex range of products.
            </p>

            <div className="flex justify-center">
              <div
                className="relative h-64 w-full max-w-md overflow-hidden rounded-md border-2 border-gray-200 cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APPROVED%20APPLICATOR%20CERTIFICATE-GEOBIT-ZtqvDqq9HdQKQJEHtj4BoGm3Fnxjs4.png"
                  alt="Geobit Certificate"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                  <button className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-4 py-2 rounded-md transition-colors">
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>

      {/* Full-screen certificate modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  )
}

export default CertificateModal

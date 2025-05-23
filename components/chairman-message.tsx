"use client"

import { motion } from "framer-motion"

const ChairmanMessage = () => {
  return (
    <section className="py-16 bg-[#132d4c] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 font-['Poppins'] text-[#00aee7]">
            CHAIRMAN MESSAGE
          </h2>
          <div className="w-24 h-1 bg-white mb-8"></div>

          <div className="space-y-6 font-['Roboto'] leading-relaxed text-justify">
            <p>
              Dear Partners, Clients, and Well-Wishers,
              It gives me immense pride and gratitude to witness the journey of ATA Constructions Pvt. Ltd.
              —a vision that began over a decade ago, now standing strong as a trusted name in the construction and interior industry.
              What started in 2012 under the banner of ACES BUILDCON was born from a simple yet powerful idea: 
              to build with purpose, precision, and integrity. In 2018, with the evolution of our mission and the growing 
              demands of the industry, we transformed into ATA Constructions Pvt. Ltd., a name that now symbolizes trust, commitment, and quality.
            </p>

            <p>
              At ATA, we believe construction is not just about brick and mortar—it’s about building relationships,
              creating meaningful spaces, and transforming visions into reality. Every project we take on, whether 
              it’s a high-rise residential complex, a school, a hotel, or a home, carries the soul of our dedication
              and the strength of our standards. Our success is driven by a passionate team, loyal clients, and a firm
              belief in ethical practices. We constantly strive to stay ahead with innovation, sustainable solutions,
              and a customer-first approach.
            </p>

            <p>
              We are not just constructing buildings—we are crafting legacies that will stand the test of time. And as we 
              look to the future, we remain committed to growing responsibly, contributing to nation-building, and inspiring 
              trust with every brick we lay. Thank you for your continued support, belief, and partnership. Together, let us build
              a better tomorrow.
            </p>
          </div>

          <div className="mt-8 text-right">
            <p className="text-xl font-semibold font-['Poppins']">Warm regards,</p>
            <p className="text-xl font-semibold font-['Poppins']">Mr. Mustafa Ahmad</p>
            <p className="text-[#00aee7]">Chairman & Founder, ATA CONSTRUCTIONS PVT LTD</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChairmanMessage

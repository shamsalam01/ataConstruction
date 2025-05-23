"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Award, Lightbulb, Users, UserPlus, HardHat, Leaf } from "lucide-react"

import AchievementsSection from "@/components/achievements-section"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      {/* Company Introduction - Left Image, Right Text */}
      <motion.section
        className="py-16 sm:py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
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
                  src="/images/about0.png"
                  alt="ATA CONSTRUCTIONS"
                  width={800}
                  height={1200}
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
              <div className="bg-white p-6 sm:p-8 pt-4 sm:pt-5 rounded-lg shadow-lg border-l-4 border-[#00aee7] h-full flex flex-col justify-start">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#132d4c] mb-6 font-['Poppins']">
                  ATA CONSTRUCTIONS PVT LTD
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-[#00aee7] mb-5 sm:mb-6"></div>

                <div className="text-gray-700 leading-relaxed font-['Roboto'] text-justify">
                  <p className="mb-4">
                    ATA Constructions Pvt. Ltd. is a leading name in the construction and interior industry, known for
                    its commitment to excellence, innovation, and client-centric solutions. Our journey began in 2012 as
                    M/s ACES BUILDCON, and in response to evolving market dynamics and growing project scale, we
                    transitioned into a Private Limited entity in 2018, rebranded as ATA Constructions Pvt. Ltd.
                  </p>
                  <p className="mb-4">
                    We provide end-to-end construction solutions with a focus on timely delivery, quality control, and
                    attention to detail. From modern office spaces with contemporary lighting to luxury residential
                    interiors, structural construction, and large-scale developments, our portfolio demonstrates our
                    versatility and expertise across diverse project types.
                  </p>

                  <h3 className="text-xl font-semibold text-[#132d4c] mb-3">Core Services</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Civil & Structural Construction</li>
                    <li>Internal Finishing</li>
                    <li>External Site Development</li>
                    <li>Electrical Works</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#132d4c] mb-3">Specialized Services</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Interior Designing & Execution</li>
                    <li>Turnkey Project Management</li>
                    <li>Plumbing and Firefighting Installations</li>
                    <li>Corporate Fit-Outs and Custom Builds</li>
                    <li>Electrical Work & Systems Integration</li>
                  </ul>

                  <p className="mb-4">
                    With a skilled team of engineers, architects, and project managers, we ensure every project is
                    executed seamlessly—from blueprint to handover. Our reputation is built on transparency, timely
                    delivery, and long-term relationships with our clients.We aspire to shape the future of
                    infrastructure by delivering world-class civil, structural, and turnkey solutions that not only meet
                    but exceed client expectations. Our goal is to consistently elevate the standards of quality,
                    sustainability, and efficiency in every project we undertake.Executing every project with
                    excellence, combining modern design, superior materials, and skilled workmanship.Innovating
                    continually, embracing new technologies and methods that enhance productivity, quality, and customer
                    satisfaction.
                  </p>

                  <p>
                    At ATA Constructions Pvt. Ltd., we don't just build structures—we create spaces that inspire,
                    endure, and add value for generations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-200 text-gray-800 p-8 rounded-xl shadow-lg h-full"
            >
              <h2 className="text-2xl font-bold mb-6 font-['Poppins'] text-[#132d4c]">OUR MISSION</h2>
              <div className="w-16 h-1 bg-[#00aee7] mb-6"></div>

              <div className="space-y-4 font-['Roboto'] text-justify">
                <p>
                  Our mission at ATA Constructions Pvt. Ltd. is to deliver high-quality, reliable, and cost-effective
                  construction and interior solutions that meet the evolving needs of our clients across residential,
                  commercial, hospitality, and institutional sectors.
                </p>

                <p>We are committed to:</p>

                <p>
                  Executing every project with excellence, combining modern design, superior materials, and skilled
                  workmanship.
                </p>

                <p>
                  Fostering long-term relationships with clients, consultants, and partners based on transparency,
                  trust, and mutual respect.
                </p>

                <p>
                  Maintaining the highest standards of safety, sustainability, and compliance, ensuring that our work
                  contributes positively to the environment and society.
                </p>

                <p>
                  Innovating continually, embracing new technologies and methods that enhance productivity, quality, and
                  customer satisfaction.
                </p>

                <p>
                  Empowering our team, investing in professional development and a collaborative work culture that
                  drives performance and accountability.
                </p>

                <p>
                  Our mission is not just to build structures—but to create lasting impressions, uplift communities, and
                  contribute to a better built environment with every project we undertake.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-200 text-gray-800 p-8 rounded-xl shadow-lg h-full"
            >
              <h2 className="text-2xl font-bold mb-6 font-['Poppins'] text-[#132d4c]">OUR VISION</h2>
              <div className="w-16 h-1 bg-[#00aee7] mb-6"></div>

              <div className="space-y-4 font-['Roboto'] text-justify">
                <p>
                  At ATA Constructions Pvt. Ltd., our vision is to be recognized as a leading force in the construction
                  and interior industry—renowned for our integrity, innovation, and commitment to excellence.
                </p>

                <p>
                  We aspire to shape the future of infrastructure by delivering world-class civil, structural, and
                  turnkey solutions that not only meet but exceed client expectations. Our goal is to consistently
                  elevate the standards of quality, sustainability, and efficiency in every project we undertake.
                </p>

                <p>
                  We envision a company where design meets durability, where every structure tells a story of
                  craftsmanship and care, and where our clients find lasting value and trust.
                </p>

                <p>
                  Driven by a passion for precision and a commitment to continuous improvement, we aim to grow
                  responsibly, build lasting partnerships, and contribute meaningfully to the urban and social landscape
                  of India and beyond.
                </p>

                <p>
                  Through technological advancement, skilled expertise, and a client-first approach, we see ourselves
                  becoming the preferred construction partner for diverse sectors—laying the foundation for a better,
                  stronger, and more beautiful tomorrow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chairman Message Section */}
      <section className="py-16 bg-[#132d4c] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 font-['Poppins'] text-[#00aee7]">CHAIRMAN MESSAGE</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>

            <div className="space-y-6 font-['Roboto'] leading-relaxed text-justify">
              <p>
                Dear Partners, Clients, and Well-Wishers, It gives me immense pride and gratitude to witness the journey
                of ATA Constructions Pvt. Ltd. —a vision that began over a decade ago, now standing strong as a trusted
                name in the construction and interior industry. What started in 2012 under the banner of ACES BUILDCON
                was born from a simple yet powerful idea: to build with purpose, precision, and integrity. In 2018, with
                the evolution of our mission and the growing demands of the industry, we transformed into ATA
                Constructions Pvt. Ltd., a name that now symbolizes trust, commitment, and quality.
              </p>

              <p>
                At ATA, we believe construction is not just about brick and mortar—it's about building relationships,
                creating meaningful spaces, and transforming visions into reality. Every project we take on, whether
                it's a high-rise residential complex, a school, a hotel, or a home, carries the soul of our dedication
                and the strength of our standards. Our success is driven by a passionate team, loyal clients, and a firm
                belief in ethical practices. We constantly strive to stay ahead with innovation, sustainable solutions,
                and a customer-first approach.
              </p>

              <p>
                We are not just constructing buildings—we are crafting legacies that will stand the test of time. And as
                we look to the future, we remain committed to growing responsibly, contributing to nation-building, and
                inspiring trust with every brick we lay. Thank you for your continued support, belief, and partnership.
                Together, let us build a better tomorrow.
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

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#132d4c] mb-4 font-['Poppins']">OUR CORE VALUES</h2>
            <div className="w-24 h-1 bg-[#00aee7] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto font-['Roboto']">
              At ATA Constructions Pvt. Ltd., our values are the foundation of everything we build. They guide our
              decisions, define our culture, and reflect our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Shield className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">1. Integrity</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We uphold the highest standards of honesty and ethics. Transparency in communication and fairness in all
                our dealings are non-negotiable principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Award className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">2. Quality</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We never compromise on quality. From material selection to final execution, we ensure every detail meets
                our rigorous standards and delivers long-term value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">3. Innovation</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We embrace change and continuously seek smarter, more efficient, and sustainable ways to build.
                Innovation is at the heart of our growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Users className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">4. Customer-Centric Approach</h3>
              </div>
              <p className="text-gray-700 text-justify">
                Our clients are our partners. We listen, understand, and customize solutions that align with their
                vision, timeline, and budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <UserPlus className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">5. Teamwork</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We believe that collaboration brings the best outcomes. Our strength lies in our people—skilled,
                passionate, and driven to achieve common goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <HardHat className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">6. Safety</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We prioritize the safety of our team, clients, and communities. Strict adherence to safety protocols
                ensures a secure working environment across all our projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md lg:col-start-2"
            >
              <div className="flex items-center mb-4">
                <Leaf className="text-[#00aee7] mr-3 h-6 w-6" />
                <h3 className="text-xl font-bold text-[#132d4c]">7. Sustainability</h3>
              </div>
              <p className="text-gray-700 text-justify">
                We are committed to environmentally responsible construction practices that reduce waste, conserve
                resources, and promote green development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </motion.div>
  )
}

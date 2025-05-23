"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

// Update the contact page to handle service selection

// Add useSearchParams to get the selected service
import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Inside the component, add this code to get the selected service
  const searchParams = useSearchParams()
  const selectedService = searchParams.get("service")

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Add useEffect to set the selected service in the form
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        subject: `Service Inquiry: ${selectedService.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
      }))
    }
  }, [selectedService])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Prepare the email data
      const emailData = {
        ...formData,
        to: "info@optimastaruae.com",
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", emailData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("An error occurred. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      {/* Hero Section */}
      <motion.section
        className="relative h-[200px] md:h-[250px]"
        initial={{ rotateX: 10 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us.jpg-h7hopppgMSQdd4UdFx80uBM1E7OqtO.jpeg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="h-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <motion.section className="py-20" variants={containerVariants} initial="hidden" animate="visible">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-[#132d4c] text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#00aee7] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p>
                        <a href="tel:+971568180793" className="hover:text-[#00aee7] transition-colors">
                          +971 568180793
                        </a>
                      </p>
                      <p>
                        <a href="tel:+971551828836" className="hover:text-[#00aee7] transition-colors">
                          +971 551828836
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#00aee7] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p>
                        <a href="mailto:info@optimastaruae.com" className="hover:text-[#00aee7] transition-colors">
                          info@optimastaruae.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#00aee7] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p>54-0 Shaikha Mhara-Al Qusais Bldg Near Al Qusais Second Dubai, UAE</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://wa.me/971551828836"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      WhatsApp
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-[#132d4c] mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We will get back to you soon.</p>
                  </div>
                ) : null}

                {submitError ? (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-6">
                    {submitError}
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#00aee7] focus:ring-[#00aee7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#00aee7] focus:ring-[#00aee7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#00aee7] focus:ring-[#00aee7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00aee7] focus:border-[#00aee7]"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Service Request">Service Request</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-[#00aee7] focus:ring-[#00aee7] w-full"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8 py-3 h-auto text-lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0978776039636!2d55.38394!3d25.2631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4a5d4b4b4b%3A0x5d5d5d5d5d5d5d5d!2s54-0%20Shaikha%20Mhara-Al%20Qusais%20Bldg%2C%20Al%20Qusais%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sus!4v1648226924520!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OPTIMA STAR Location"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

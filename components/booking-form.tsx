"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Send } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"

// Updated services list with reordered services
const services = [
  { id: "insulation", name: "Insulation contracting" },
  { id: "tiling", name: "Floor & wall tiling works" },
  { id: "interior", name: "Interior Services" },
  { id: "painting", name: "Painting Services" },
  { id: "waterproofing", name: "Waterproofing systems" },
  { id: "flooring", name: "Flooring solutions" },
  { id: "hvac", name: "Air-conditioning, ventilation, and air filtration system installation & maintenance" },
  { id: "electromechanical", name: "Electromechanical equipment installation & maintenance" },
  { id: "plumbing", name: "Plumbing & sanitary installation" },
  { id: "wallpaper", name: "Wallpaper fixing" },
  { id: "false-ceiling", name: "False ceiling & light partition installation" },
  { id: "electrical", name: "Electrical fittings & fixture repair & maintenance" },
  { id: "plaster", name: "Plaster works" },
  { id: "swimming-pool", name: "Swimming pool installation" },
]

// Updated sub-services for insulation with injection added
const subServices = {
  insulation: [
    { id: "combo", name: "Combo" },
    { id: "grp", name: "GRP" },
    { id: "waterproofing", name: "Waterproofing" },
    { id: "injection", name: "Injection" },
  ],
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

interface BookingFormProps {
  initialService?: string
}

export default function BookingForm({ initialService }: BookingFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedSubServices, setSelectedSubServices] = useState<{ [key: string]: string[] }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Check for selected service in sessionStorage
  useEffect(() => {
    const storedService = sessionStorage.getItem("selectedService")
    if (storedService && !selectedServices.includes(storedService)) {
      setSelectedServices((prev) => [...prev, storedService])

      // Check for sub-services
      const storedSubServices = sessionStorage.getItem("selectedSubServices")
      if (storedSubServices) {
        try {
          const parsedSubServices = JSON.parse(storedSubServices)
          setSelectedSubServices((prev) => ({ ...prev, ...parsedSubServices }))
        } catch (e) {
          console.error("Error parsing sub-services:", e)
        }
      }

      // Clear the stored service after using it
      sessionStorage.removeItem("selectedService")
      sessionStorage.removeItem("selectedSubServices")

      // Open the dialog
      setIsDialogOpen(true)
    }

    if (initialService && !selectedServices.includes(initialService)) {
      setSelectedServices((prev) => [...prev, initialService])
    }
  }, [initialService, selectedServices])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        // Also remove any sub-services when removing a service
        setSelectedSubServices((current) => {
          const updated = { ...current }
          delete updated[serviceId]
          return updated
        })
        return prev.filter((id) => id !== serviceId)
      } else {
        return [...prev, serviceId]
      }
    })
  }

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

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Prepare the email data
      const emailData = {
        ...formData,
        services: selectedServices
          .map((id) => {
            const service = services.find((s) => s.id === id)
            let serviceName = service ? service.name : id

            // Add sub-services if any
            const subs = selectedSubServices[id]
            if (subs && subs.length > 0) {
              const subNames = subs
                .map((subId) => {
                  const subService = subServices[id]?.find((s) => s.id === subId)
                  return subService ? subService.name : subId
                })
                .join(", ")
              serviceName += ` (${subNames})`
            }

            return serviceName
          })
          .join(", "),
        to: "info@optimastaruae.com",
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Booking submitted:", emailData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: undefined,
        time: "",
        message: "",
      })
      setSelectedServices([])
      setSelectedSubServices({})

      // Close dialog after successful submission
      setTimeout(() => {
        setIsDialogOpen(false)
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      setSubmitError("An error occurred. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            id="booking-form-trigger"
            size="lg"
            className="bg-[#00aee7] hover:bg-[#132d4c] text-white text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg"
          >
            Book Appointment
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#132d4c]">Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule a service appointment with our team.
          </DialogDescription>
        </DialogHeader>

        {submitSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg my-4">
            <p className="font-medium">Thank you for your booking request!</p>
            <p>We will confirm your appointment shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-2">Services Required *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 border rounded-md">
                {services.map((service) => (
                  <div key={service.id} className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label htmlFor={`service-${service.id}`} className="text-sm leading-tight cursor-pointer">
                        {service.name}
                      </label>
                    </div>

                    {/* Show sub-services for insulation if selected */}
                    {service.id === "insulation" && selectedServices.includes(service.id) && (
                      <div className="ml-6 mt-1">
                        <button
                          className="text-xs font-medium flex items-center mb-1"
                          onClick={(e) => {
                            e.preventDefault()
                            const dropdown = e.currentTarget.nextElementSibling
                            if (dropdown) {
                              dropdown.classList.toggle("hidden")
                            }
                          }}
                        >
                          Options:
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
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
                        <div className="space-y-1 hidden">
                          {subServices.insulation.map((subService) => (
                            <div key={subService.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`subservice-${service.id}-${subService.id}`}
                                checked={selectedSubServices[service.id]?.includes(subService.id) || false}
                                onCheckedChange={() => handleSubServiceToggle(service.id, subService.id)}
                              />
                              <label
                                htmlFor={`subservice-${service.id}-${subService.id}`}
                                className="text-xs leading-tight cursor-pointer"
                              >
                                {subService.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Preferred Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateChange}
                      initialFocus
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 || date.getDay() === 6
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-medium">
                  Preferred Time *
                </label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time">
                      {formData.time ? (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {formData.time}
                        </div>
                      ) : (
                        "Select a time"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Additional Details
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full"
                placeholder="Please provide any additional details about your service requirements"
              />
            </div>

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{submitError}</div>
            )}

            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-[#00aee7] hover:bg-[#132d4c] text-white" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Submit Request
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

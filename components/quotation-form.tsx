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

// Updated services list - only the 7 specified services
const services = [
  { id: "civil-structural", name: "Civil & Structural Construction" },
  { id: "internal-external", name: "Internal Finishing" },
  { id: "external-development", name: "External Development" },
  { id: "Electrical Works", name: "Electrical Works" },
  { id: "civil-construction", name: "Civil Construction" },
  { id: "interior-works", name: "Interior Works" },
  { id: "turnkey-projects", name: "Turnkey Projects" },
  { id: "plumbing-firefighting", name: "Plumbing & Firefighting Works" },
]

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

interface QuotationFormProps {
  initialService?: string
}

export default function QuotationForm({ initialService }: QuotationFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
    service: "",
    attachment: null as File | null,
  })

  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Check for selected service in sessionStorage
  useEffect(() => {
    const storedService = sessionStorage.getItem("selectedService")
    if (storedService) {
      setFormData((prev) => ({ ...prev, service: storedService }))

      // Open the dialog
      setIsDialogOpen(true)

      // Clear the stored service after using it
      sessionStorage.removeItem("selectedService")
    }

    if (initialService && formData.service === "") {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService, formData.service])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((i) => i !== interest)
      } else {
        return [...prev, interest]
      }
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }))
    }
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
        interests: selectedInterests.join(", "),
        to: "constructionsata@gmail.com",
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Quotation submitted:", emailData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: undefined,
        time: "",
        message: "",
        service: "",
        attachment: null,
      })
      setSelectedInterests([])

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
            id="quotation-form-trigger"
            size="lg"
            className="bg-[#00aee7] hover:bg-[#132d4c] text-white text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg"
          >
            Get Quotation
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#132d4c]">Let's Get Acquainted</DialogTitle>
          <DialogDescription>Fill out the form below to request a quotation for our services.</DialogDescription>
        </DialogHeader>

        {submitSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg my-4">
            <p className="font-medium">Thank you for your request!</p>
            <p>We will get back to you shortly with a quotation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your name"
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
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Mobile *
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your mobile"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium">
                Service *
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-2">Interests</label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-civil-structural"
                    checked={selectedInterests.includes("Civil & Structural Construction")}
                    onCheckedChange={() => handleInterestToggle("Civil & Structural Construction")}
                  />
                  <label htmlFor="interest-civil-structural" className="text-sm">
                    Civil & Structural Construction
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-internal-external"
                    checked={selectedInterests.includes("Internal & External Finishing")}
                    onCheckedChange={() => handleInterestToggle("Internal & External Finishing")}
                  />
                  <label htmlFor="interest-internal-external" className="text-sm">
                    Internal Finishing
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-external-development"
                    checked={selectedInterests.includes("External Development")}
                    onCheckedChange={() => handleInterestToggle("External Development")}
                  />
                  <label htmlFor="interest-external-development" className="text-sm">
                    External Development
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-civil-structural"
                    checked={selectedInterests.includes("Civil & Structural Construction")}
                    onCheckedChange={() => handleInterestToggle("Civil & Structural Construction")}
                  />
                  <label htmlFor="interest-civil-structural" className="text-sm">
                    Civil & Structural Construction
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-civil-construction"
                    checked={selectedInterests.includes("Civil Construction")}
                    onCheckedChange={() => handleInterestToggle("Civil Construction")}
                  />
                  <label htmlFor="interest-civil-construction" className="text-sm">
                    Electrical Works
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-interior-works"
                    checked={selectedInterests.includes("Interior Works")}
                    onCheckedChange={() => handleInterestToggle("Interior Works")}
                  />
                  <label htmlFor="interest-interior-works" className="text-sm">
                    Interior Works
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-turnkey-projects"
                    checked={selectedInterests.includes("Turnkey Projects")}
                    onCheckedChange={() => handleInterestToggle("Turnkey Projects")}
                  />
                  <label htmlFor="interest-turnkey-projects" className="text-sm">
                    Turnkey Projects
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interest-plumbing-firefighting"
                    checked={selectedInterests.includes("Plumbing & Firefighting Works")}
                    onCheckedChange={() => handleInterestToggle("Plumbing & Firefighting Works")}
                  />
                  <label htmlFor="interest-plumbing-firefighting" className="text-sm">
                    Plumbing & Firefighting
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="attachment" className="block text-sm font-medium">
                Upload Attachment
              </label>
              <Input id="attachment" name="attachment" type="file" onChange={handleFileChange} className="w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Preferred Date</label>
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
                  Preferred Time
                </label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
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
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full"
                placeholder="Write your message here..."
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
                    <Send className="mr-2 h-4 w-4" /> Submit
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

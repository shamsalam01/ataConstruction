"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  // First slide with 3 testimonials
  [
    {
      id: 1,
      title: "Excellence in Execution",
      content:
        "We are extremely pleased with the quality and efficiency demonstrated by the team during the execution of civil and structural works for Project A-11. The professionalism, adherence to safety standards, and commitment to timelines have been exceptional. The attention to engineering detail and project coordination ensured seamless progress without compromising quality.",
      author: "Abhishek Gupta (Managing Director)",
      company: "Eagle International India Ltd",
      rating: 5,
    },
    {
      id: 2,
      title: "Quality Construction & Finishing ",
      content:
        "The execution team showcased outstanding professionalism and technical expertise during the construction and internal finishing of the remaining 28 units of LR-1 & 2 at Paras Tiera. Despite the complexity and scale, the work was completed with strict adherence to timelines and quality benchmarks. The team’s commitment to precision, on-site coordination, and seamless project delivery truly stood out. We appreciate the dedication and look forward to future collaborations",
      author: "Mr. S.P. Thakur",
      company: "Paras Buildtech India Pvt. Ltd.",
      rating: 5,
    },
    {
      id: 3,
      title: "Precision Delivered",
      content:
        "We are highly satisfied with the execution of internal finishing, boundary wall construction, road works, MS works, and external painting carried out at both Chloris and Aura projects. The team maintained exceptional quality standards, timely delivery, and clear communication throughout the process. Their technical proficiency and on-ground coordination reflect a deep understanding of Mahindra Lifespace’s expectations",
      author: "Mr. Raisuddin",
      company: "Mahindra Lifespace & Developers Ltd.",
      rating: 5,
    },
  ],
  // Second slide with 3 testimonials (duplicated for demonstration)
  [
    {
      id: 4,
      title: "Quality Execution",
      content:
        "We express our sincere appreciation for the exceptional execution of external plumbing and civil works at Taj Vivanta, Rishikesh. The team demonstrated a high level of craftsmanship, professionalism, and adherence to hospitality-grade quality standards. Their ability to manage work within challenging site conditions and strict deadlines was truly commendable. It was a pleasure working with such a dedicated and technically sound partner.",
      author: "Mr. Ehtesham",
      company: "Derramecks Hotels & Developers Pvt. Ltd",
      rating: 5,
    },
    {
      id: 5,
      title: "TATA Housing Project: Gurgaon Gateway, 2017",
      content:
        "We would like to acknowledge the outstanding execution of the Podium Façade MS works at the Gurgaon Gateway project by Mr. Manmohan Jha. The work was carried out with precision, ensuring seamless integration with the architectural vision and adhering to all safety and quality benchmarks. Mr. Jha exhibited exemplary leadership, technical insight, and effective coordination across all stages of the project.",
      author: "Mr. Manmohan Jha",
      company: "TATA Housing – Gurgaon Gateway, Gurugram",
      rating: 5,
    },
    {
      id: 6,
      title: "Exceeded Expectations",
      content:
        "We are highly satisfied with the execution of internal finishing works at the Winter Hills project in Dwarka Mor, New Delhi. The team delivered consistent quality, adhering to project timelines and maintaining close attention to detail throughout the duration of the work. Mr. Malik demonstrated commendable site coordination, technical proficiency, and an unwavering commitment to meeting design and workmanship standards.",
      author: "Mr. Malik",
      company: "UMANG Realtech Pvt. Ltd.",
      rating: 5,
    },
  ],
  // Third slide with 3 testimonials (duplicated for demonstration)
  [
    {
      id: 7,
      title: "Execution Excellence",
      content:
        "We are pleased to acknowledge the successful execution of the internal finishing work at Heritage School, Sector 58, Gurgaon. The project demanded high attention to detail, quality, and adherence to strict timelines—requirements that were fully met by the team under the supervision of Mr. Aftab Alam. His technical proficiency, methodical planning, and consistent on-site coordination ensured the delivery of superior workmanship in alignment with the school’s architectural and functional standards",
      author: " Mr. Aftab Alam",
      company: "Heritage School – Sector 58, Gurgaon",
      rating: 5,
    },
    {
      id: 8,
      title: "Exceptional Project Management",
      content:
        "We acknowledge and appreciate the successful execution of structure and civil works for the commercial complex project at Mughal Sarai. Under the leadership of Mr. Prashant Gola, the work was completed with a strong focus on quality, engineering precision, and timely delivery. His expertise in civil construction, on-site management, and coordination with all stakeholders ensured smooth progress and adherence to project specifications.",
      author: "Mr. Prashant Gola",
      company: "Esotico – Commercial Complex, Mughal Sarai",
      rating: 5,
    },
    {
      id: 9,
      title: "High-Quality Structural Work",
      content:
        "We express our appreciation for the successful execution of the meeting room interior work at VIVANTA by TAJ Hotel, Surajkund. The scope required high standards of detailing, finish quality, and coordination with hotel operations—all of which were excellently handled under the supervision of Mr. Pravin Upadhayay. His precision-driven approach, commitment to timelines, and adherence to luxury hospitality standards ensured a refined and elegant outcome",
      author: "Mr. Pravin Upadhayay",
      company: "VIVANTA by TAJ Hotel, Surajkund",
      rating: 5,
    },
  ],
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section ref={ref} className="py-16 bg-gray-100 bg-opacity-50 bg-[url('/images/dot-pattern.png')] bg-repeat">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-[#132d4c] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          TESTIMONIALS
        </motion.h2>

        <div className="relative w-full mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((slideTestimonials, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slideTestimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: (testimonial.id % 3) * 0.2 }}
                      >
                        <h3 className="text-xl font-bold text-[#132d4c] mb-3 text-center">{testimonial.title}</h3>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 text-sm flex-grow overflow-y-auto max-h-40">
                          "{testimonial.content}"
                        </p>
                        <div className="text-center mt-auto pt-4 border-t border-gray-100">
                          <p className="font-bold text-[#132d4c]">{testimonial.author}</p>
                          <p className="text-gray-600 text-sm">{testimonial.company}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#132d4c]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#132d4c]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#00aee7]" : "bg-gray-300"
                } focus:outline-none`}
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

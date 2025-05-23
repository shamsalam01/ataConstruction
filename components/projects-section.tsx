"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Building, IndianRupeeIcon } from "lucide-react"

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  const projects = [
     {
      id: 1,
      title: "TATA HOUSING - GURGAON GATEWAY",
      description: "External Paint SKK Project at Gurgaon Gateway",
      images: ["/images/1.3.jpg", "/images/Tata_01.png", "/images/Tata_02.png", "/images/1.1.bmp", "/images/1.2.bmp"],
      category: "External Paint SKK",
      client: "TATA HOUSING",
      amount: "₹1,21,33,181/-",
      year: "2017",
      contactPerson: "Mr. Vivek Anand Jha (+91-9910066857)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
     {
      id: 2,
      title: "HERITAGE INTERNATIONAL SCHOOL",
      description: "Interior Finishing work at Heritage International school",
      images: [
        "/images/School_01.png",
        "/images/her1.jpeg",
        "/images/her2.jpeg",
        "/images/her3.jpeg",
        "/images/her4.jpeg",
      ],
      category: "Interior",
      client: "HERITAGE INTERNATIONAL SCHOOL",
      amount: "₹1,47,98,030/-",
      year: "2023",
      contactPerson: "Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
    {
      id: 3,
      title: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      description:
        "Internal Finishing, Boundary wall, Road Works, MS works, External Development at Choloris-Faridabad and Aura-Gurugram",
      images: [
        "/images/Mahindra_01.png",
        "/images/mahindra_02.png",
        "/images/5.3.png",
        "/images/5.2.png",
        "/images/5.1.png",
      ],
      category: "External Development",
      client: "MAHINDRA LIFESPACE & DEVELOPERS LTD",
      amount: "₹1,07,65,363/-",
      year: "2017",
      contactPerson: "Mr. Raisuddin (+91-9971136382)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },
     {
      id: 4,
      title: "CONSCIENT",
      description: "Structure, Civil and Interior Works at Heritage One sec102",
      images: ["/images/service3.jpg", "/images/service4.jpg", "/images/service5.jpg"],
      category: "Structure, Civil, Interior",
      client: "CONSCIENT",
      amount: "₹2,83,80,157/-",
      year: "2021-2022",
      contactPerson: "Mr. Aftab Alam",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Gurgaon",
    },

    {
      id: 5,
      title: "BRIJWASI GROUP",
      description: "Structure, Civil and Interior work of Staff Quarter",
      images: ["/images/service2.jpg", "/images/service3.jpg", "/images/service4.jpg"],
      category: "Structure, Civil, Interior",
      client: "BRIJWASI GROUP",
      amount: "₹2,43,70,276/-",
      year: "2024",
      contactPerson: "Mr. Shyaam Sharma",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Mathura",
    },
    
    {
      id: 6,
      title: "EAGLE INTERNATIONAL LIMITED",
      description: "Constructions of Structure, Civil & Interior Works at A-11, Nizamuddun West",
      images: ["/images/2.1.jpg", "/images/2.2.png", "/images/2.3.jpg"],
      category: "Structure, Civil, Interior",
      client: "EAGLE INTERNATIONAL LIMITED",
      amount: "₹2,89,97,905/-",
      year: "2018",
      contactPerson: "Mr. Abhishek Gupta (MD EAGLE INTERNATIONAL INDIA LTD)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
    {
      id: 7,
      title: "PARAS BUILDTECH - TIERA, SEC-137",
      description: "Construction of Balance Structure, civil & Internal Finishing of 28 units of LR-1&2",
      images: [
        "/images/Paras_01.png",
        "/images/Paras_02.png",
        "/images/Paras_03.png",
        "/images/3.1.png",
        "/images/3.2.png",
      ],
      category: "Civil and Interior",
      client: "PARAS BUILDTECH",
      amount: "₹2,59,49,595/-",
      year: "2012-2015",
      contactPerson: "Mr. SP Thakur (+91-9999797547)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
    },
    
    {
      id: 8,
      title: "TAJ RESORT RISHIKESH",
      description: "External Development Project at Taj Resort",
      images: [
        "/images/Taj Resort_02.png",
        "/images/Taj Resort_01.png",
        "/images/Taj Resort_05.png",
        "/images/Taj Resort _04.png",
        "/images/Taj Resort_03.png",
      ],
      category: "External Development",
      client: "TAJ RESORT",
      amount: "₹1,19,54,129/-",
      year: "2018-2019",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Rishikesh",
    },
   
    {
      id: 9,
      title: "UMANG REALTECH PVT LTD - WINTER HILLS",
      description: "Interior Finishing Project at Winter Hills, Dwarka Mode",
      images: ["/images/4.1.png", "/images/Umang_02.png", "/images/Umang_04.png", "/images/4.2.png", "/images/4.3.png"],
      category: "Interior",
      client: "UMANG REALTECH PVT LTD",
      amount: "₹1,39,31,060/-",
      year: "2017-2018",
      contactPerson: "Mr. Malik (+91-9711053789)",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
     {
      id: 10,
      title: "LEARNING MATTERS SCHOOL",
      description: "Interior, Electrical, Plumbing and External Development Works",
      images: [
        "/images/LEARNING SCHOOL MATTER_04.png",
        "/images/LEARNING SCHOOL MATTER_02.png",
        "/images/LEARNING SCHOOL MATTER_03.png",
        "/images/LEARNING SCHOOL MATTER_01.png",
        "/images/ler1.jpeg",
      ],
      category: "Interior, Electrical, Plumbing, External Development",
      client: "LEARNING MATTERS SCHOOL",
      amount: "₹46,58,690/-",
      year: "2021",
      contactPerson: "School Administrator",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
     {
      id: 11,
      title: "TAJ VIVANTA SURAJKUND",
      description: "Interior, Fire Fighting and Electrical Works",
      images: [
        "/images/tajviv1.jpg",
        "/images/tajviv2.jpg",
        "/images/tajviv3.jpg",
        "/images/tajviv4.jpg",
        "/images/tajviv5.jpg",
      ],
      category: "Interior, Fire Fighting, Electrical",
      client: "TAJ VIVANTA",
      amount: "₹65,28,450/-",
      year: "2020",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Faridabad",
    },
    {
      id: 12,
      title: "ESOTICO ASSOCIATES",
      description: "Structure and Civil work of Commercial Complex at Mughal Sarai",
      images: ["/images/8.1.png", "/images/8.2.png", "/images/8.3.png"],
      category: "Structure, Civil, Interior",
      client: "ESOTICO ASSOCIATES",
      amount: "₹2,13,00,000/-",
      year: "2022",
      contactPerson: "Mr. Prashant Gola",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Banaras",
    },
    {
      id: 13,
      title: "INDIVIDUAL PROJECTS",
      description: "Multiple Individual Villa Projects in Delhi and Noida",
      images: ["/images/ind1.jpeg", "/images/ind2.jpeg", "/images/ind3.jpeg", "/images/ind4.jpeg", "/images/ind5.jpeg"],
      category: "Turnkey",
      client: "INDIVIDUAL",
      amount: "₹34,00,000/- | ₹2,34,00,000/- | ₹2,60,39,200/-",
      year: "2014-2024",
      contactPerson: "Individual Clients",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi & Noida",
    },
    
   
    {
      id: 14,
      title: "STARWIRE INDIA LTD",
      description: "Structure, Civil and Interior Works",
      images: ["/images/service5.jpg", "/images/6.1.png", "/images/6.2.png"],
      category: "Structure, Civil, Interior",
      client: "STARWIRE INDIA LTD",
      amount: "₹93,56,850/-",
      year: "2019",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Delhi",
    },
   
    {
      id: 15,
      title: "INDIRA GANDHI EYE HOSPITAL",
      description: "Interior, Electrical and Plumbing Works",
      images: ["/images/service3.jpg", "/images/service4.jpg", "/images/service5.jpg"],
      category: "Interior, Electrical, Plumbing",
      client: "INDIRA GANDHI EYE HOSPITAL",
      amount: "₹70,00,000/-",
      year: "2022",
      contactPerson: "Hospital Administrator",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Lucknow",
    },
   
    {
      id: 16,
      title: "IVOR INDIA",
      description: "Structure, Civil and Interior Works",
      images: ["/images/service4.jpg", "/images/service5.jpg", "/images/6.3.png"],
      category: "Structure, Civil, Interior",
      client: "IVOR INDIA",
      amount: "₹93,00,000/-",
      year: "2022",
      contactPerson: "Project Manager",
      contractorPerson: "Mr. Tarique (+91-9891561318)",
      area: "Noida",
    },
    
  ]

  const project = projects[currentProject] || null

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0)
  }

  const nextImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImage((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project && project.images.length > 0) {
      setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentProject, currentImage])

  if (!project) return null

  return (
    <section ref={ref} className="pt-19 pb-16 bg-white">
      <div className="container mx-auto px-4">
{/*         <h2 className="text-3xl font-bold text-center text-[#132d4c] mb-12">Our Projects</h2> */}

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Top Section - Image Carousel */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={index === currentImage ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === currentImage}
                />
              </motion.div>
            ))}

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-4 py-2 bg-[#00aee7] text-white text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>

            {/* Image Navigation */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImage ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevImage}
                  className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Project Details */}
          <div className="p-6 md:p-8 bg-white">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Left Column - Title and Description */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#132d4c] mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{project.description}</p>

                {project.id === 16 && (
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-[#132d4c] mb-2">Project Details:</p>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1">
                      <li>Individual Villa Interior in Noida - ₹34,00,000/- (Turnkey)</li>
                      <li>Individual Villa Structure & Interior in Delhi - ₹2,34,00,000/- (Turnkey)</li>
                      <li>Individual Villa Structure & Interior in Delhi - ₹2,60,39,200/- (Turnkey)</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Project Details */}
              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-[#00aee7] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#132d4c]">Client</p>
                    <p className="text-gray-700">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <IndianRupeeIcon className="h-5 w-5 text-[#00aee7] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#132d4c]">Project Value</p>
                    <p className="text-gray-700">{project.amount}</p>
                  </div>
                </div>

{/*                 <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-[#00aee7] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#132d4c]">Year</p>
                    <p className="text-gray-700">{project.year}</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#00aee7] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#132d4c]">Location</p>
                    <p className="text-gray-700">{project.area}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={prevProject}
                className="flex items-center text-[#132d4c] hover:text-[#00aee7] transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Project</span>
              </button>

              <div className="hidden md:flex items-center space-x-1">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentProject(index)
                      setCurrentImage(0)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProject ? "bg-[#00aee7] scale-125" : "bg-gray-300"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="flex items-center text-[#132d4c] hover:text-[#00aee7] transition-colors group"
              >
                <span>Next Project</span>
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Project Indicators */}
        <div className="flex justify-center mt-8 space-x-1 md:hidden flex-wrap">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProject(index)
                setCurrentImage(0)
              }}
              className={`w-2.5 h-2.5 rounded-full m-1 transition-all duration-300 ${
                index === currentProject ? "bg-[#00aee7] scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

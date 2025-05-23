"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#132d4c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6 ">
              <button onClick={scrollToTop} className="cursor-pointer focus:outline-none">
                <Image
                  src="/images/ata-logo1.png"
                  alt="ATA CONSTRUCTIONS Logo"
                  width={220}
                  height={70}
                  className="h-auto w-auto max-h-20"
                />
              </button>
            </div>
            <p className="text-gray-300 text-base">
              As a proficient company operating in Delhi, ATA CONSTRUCTIONS PVT LTD always strives to meet its clients'
              demands with skill and capability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919891561318"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Our Services</h3>
            <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Civil & Structural Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Internal Finishing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> External Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Electrical Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Civil Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Interior Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Turnkey Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Plumbing & Firefighting Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+919891561318" className="hover:text-[#00aee7] transition-colors">
                    +91 9891561318
                  </a>
                  <br />
                  <a href="tel:+917065425011" className="hover:text-[#00aee7] transition-colors">
                    +91 7065425011
                  </a>
                   <br />
                  <a href="tel:+918743881877" className="hover:text-[#00aee7] transition-colors">
                    +91 8743881877
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <a href="mailto:constructionsata@gmail.com" className="hover:text-[#00aee7] transition-colors">
                  info@ataconstructions.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <span>
                  C-76, Ground Floor, Abul Fazal Enclave-I, (Near Axis Bank ATM), Okhla, Jamia Nagar, New Delhi-110025
                </span>
              </li>
              <li className="flex space-x-4 mt-6">
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/919891561318"
                  className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm flex items-center"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ATA CONSTRUCTIONS PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

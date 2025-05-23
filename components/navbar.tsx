"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import QuotationForm from "./quotation-form"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Contact Banner */}
      <div className="bg-[#132d4c] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <a
              href="https://wa.me/919891561318"
              className="flex items-center text-sm hover:text-[#00aee7] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/whatsapp-icon.jpeg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="mr-1 rounded-full"
              />
              +91 9891561318
            </a>
            <a href="tel:+918743881877" className="flex items-center text-sm hover:text-[#00aee7] transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              +91 7065425011
            </a>
           <a href="tel:+918743881877" className="flex items-center text-sm hover:text-[#00aee7] transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              +91 8743881877
            </a>

          </div>
          <a
            href="mailto:constructionsata@gmail.com"
            className="flex items-center text-sm hover:text-[#00aee7] transition-colors"
          >
            <Mail className="h-4 w-4 mr-1" />
            info@ataconstructions.com
          </a>
        </div>
      </div>

      {/* Navbar Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-0" : "bg-white/95 backdrop-blur-sm py-0.5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ata-logo1.png"
              alt="ATA CONSTRUCTIONS Logo"
              width={240}
              height={80}
              className="h-16 sm:h-18 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Portfolio", href: "/portfolio" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base lg:text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#00aee7] border-b-2 border-[#00aee7]"
                    : "text-[#132d4c] hover:text-[#00aee7]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919891561318"
              className="text-base lg:text-lg font-medium text-[#132d4c] hover:text-[#00aee7] transition-colors"
            >
              Contact
            </a>
            {/* QuotationForm shown on md+ screens */}
            <div className="ml-4">
              <QuotationForm />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-[#132d4c] p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium py-2 ${pathname === "/" ? "text-[#00aee7]" : "text-[#132d4c]"}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium py-2 ${pathname === "/about" ? "text-[#00aee7]" : "text-[#132d4c]"}`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`text-lg font-medium py-2 ${pathname === "/services" ? "text-[#00aee7]" : "text-[#132d4c]"}`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`text-lg font-medium py-2 ${pathname === "/projects" ? "text-[#00aee7]" : "text-[#132d4c]"}`}
              >
                Projects
              </Link>
              <Link
                href="/portfolio"
                className={`text-lg font-medium py-2 ${pathname === "/portfolio" ? "text-[#00aee7]" : "text-[#132d4c]"}`}
              >
                Portfolio
              </Link>
              <a
                href="https://wa.me/919891561318"
                className="text-lg font-medium py-2 text-left text-[#132d4c]"
              >
                Contact
              </a>
            </nav>

            {/* Show QuotationForm inside mobile menu */}
            <div className="pt-4">
              <QuotationForm />
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar

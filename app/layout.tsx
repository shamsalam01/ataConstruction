// app/layout.tsx

import { Inter, Poppins, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Providers } from "./providers"

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ATA CONSTRUCTIONS PVT LTD",
  description: "Built on Expertise, Driven by Excellence",
  icons: {
    icon: "/favicon.ico", // Make sure this is correct
    apple: "/images/ata-logo1.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
        {/* Optional: If you want to manually add Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/images/ata-logo1.png" />
      </head>
      <body className={`${inter.className} ${poppins.variable} ${roboto.variable}`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}

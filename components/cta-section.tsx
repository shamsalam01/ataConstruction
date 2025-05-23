import Link from "next/link"
import { Button } from "@/components/ui/button"

const CTASection = () => {
  return (
    <section className="py-20 bg-[#00aee7] w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">EXPERT SERVICES FOR YOUR NEEDS</h2>
        <p className="text-white text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your space? Contact us today for a consultation and let our experts bring your vision to
          life.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-[#132d4c] hover:bg-[#132d4c] hover:text-white px-10 py-7 h-auto text-xl"
        >
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </div>
    </section>
  )
}

export default CTASection

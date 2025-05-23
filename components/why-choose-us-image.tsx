import Image from "next/image"

const WhyChooseUsImage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-xl max-w-5xl">
            <Image
              src="/images/why-choose-us.png"
              alt="Why Choose OPTIMA STAR Technical Services"
              width={1000}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsImage

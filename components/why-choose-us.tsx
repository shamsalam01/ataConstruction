import { CheckCircle } from "lucide-react"

const reasons = [
  {
    id: 1,
    title: "Quality Material",
    description:
      "We use only the highest quality materials in all of our services and management to achieve optimal results and customer satisfaction.",
  },
  {
    id: 2,
    title: "Expert Team",
    description: "We have an experienced team, from base to field, that adds grace and beauty to the work.",
  },
  {
    id: 3,
    title: "Reasonable Cost",
    description:
      "We offer ways to reduce costs and energy consumption while maintaining reasonable prices for technical services to our clients in Dubai.",
  },
  {
    id: 4,
    title: "Secure & Safe",
    description: "We provide work and quality that is being delivered through safe and competent hands.",
  },
  {
    id: 5,
    title: "Customer Satisfaction",
    description: "Customer satisfaction is our top priority, and we strive to exceed expectations with every project.",
  },
  {
    id: 6,
    title: "Timely Delivery",
    description: "We understand the importance of time and ensure timely completion of all projects.",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#132d4c] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">WHY CHOOSE OPTIMA STAR TECHNICAL SERVICES</h2>
          <div className="w-24 h-1 bg-[#00aee7] mx-auto my-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We are committed to excellence and dedicated to providing the best technical services in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`${
                index % 2 === 0 ? "bg-[#1a3a5f]" : "bg-[#1d4270]"
              } p-8 rounded-xl hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300`}
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="h-7 w-7 text-[#00aee7] mr-4 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-300 ml-11 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

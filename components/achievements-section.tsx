"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const achievements = [
  {
    id: 1,
    number: 13,
    suffix: "+",
    title: "Years of Experience",
  },
  {
    id: 2,
    number: 50,
    suffix: "+",
    title: "Completed Projects",
  },
  {
    id: 3,
    number: 50,
    suffix: "+",
    title: "Satisfied Customers",
  },
]

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/service1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#132d4c]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          ACHIEVEMENT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CounterAnimation
                target={achievement.number}
                inView={inView}
                suffix={achievement.suffix}
                className="text-[#00aee7] text-6xl md:text-7xl font-bold mb-4"
              />
              <h3 className="text-white text-xl md:text-2xl font-medium">{achievement.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterAnimationProps {
  target: number
  inView: boolean
  suffix?: string
  className?: string
}

const CounterAnimation = ({ target, inView, suffix = "", className = "" }: CounterAnimationProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target])

  return <div className={className}>{`${count}${suffix}`}</div>
}

export default AchievementsSection

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "SetClaims Technologies completely transformed our claims processing. Their AI-powered system reduced our processing time by 60% and increased our accuracy to 99.8%. The team is incredibly professional and responsive to our needs.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer",
      company: "Regional Healthcare Network",
      rating: 5,
      avatar: "SJ",
    },
    {
      text: "We've been using SetClaims for two years and highly recommend them. They understood our complex billing requirements, kept our reimbursements flowing smoothly, and provided exceptional support at competitive rates.",
      author: "Michael Chen",
      position: "Practice Administrator",
      company: "Metro Medical Group",
      rating: 5,
      avatar: "MC",
    },
    {
      text: "Having been in healthcare for 15+ years, SetClaims Technologies has managed our diverse provider needs more effectively than any other solution. Their technology platform is cutting-edge, and the team is truly reliable and skilled.",
      author: "Jennifer Martinez",
      position: "Revenue Cycle Director",
      company: "City Hospital System",
      rating: 5,
      avatar: "JM",
    },
    {
      text: "SetClaims handled our complex transition seamlessly in just 2 weeks. They're efficient, cost-effective, and ready for any specialty. The AI-powered insights have been absolutely game-changing for our operations.",
      author: "Robert Thompson",
      position: "CFO",
      company: "Advanced Surgical Center",
      rating: 5,
      avatar: "RT",
    },
    {
      text: "The level of automation and accuracy we've achieved with SetClaims is remarkable. Our denial rates dropped by 75% and our revenue increased by 40% in the first quarter. Outstanding technology and support.",
      author: "Dr. Lisa Wang",
      position: "Medical Director",
      company: "Integrated Health Solutions",
      rating: 5,
      avatar: "LW",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how healthcare providers are transforming their operations with our AI-powered technology
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Quote Icon */}
                    <div className="relative mb-8">
                      <Quote className="w-16 h-16 text-blue-500/20 mx-auto" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Quote className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-slate-900">{testimonials[currentIndex].author}</h4>
                        <p className="text-blue-600 font-medium">{testimonials[currentIndex].position}</p>
                        <p className="text-slate-600 text-sm">{testimonials[currentIndex].company}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => goToTestimonial(index)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500"
                    : "bg-white hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                      index === currentIndex ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-slate-400"
                    }`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-600">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-semibold">99.8% Success Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

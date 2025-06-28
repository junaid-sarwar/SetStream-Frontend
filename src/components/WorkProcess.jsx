"use client"

import { motion } from "framer-motion"
import { CheckCircle, FileText, Code, Send, CreditCard, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Verification",
      description: "We verify patient eligibility and benefits with the payer to ensure accurate claim processing.",
      icon: <CheckCircle className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      number: "02",
      title: "Transcription",
      description: "Our experts transcribe and review doctor's comments and medical documentation with precision.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.2,
    },
    {
      number: "03",
      title: "Coding",
      description: "We accurately code procedures using the latest ICD-10, CPT, and HCPCS coding standards.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.3,
    },
    {
      number: "04",
      title: "Submission",
      description: "Claims are submitted electronically to insurance payers with real-time tracking and monitoring.",
      icon: <Send className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      delay: 0.4,
    },
    {
      number: "05",
      title: "Payment",
      description: "We ensure timely payment collection and handle any follow-ups or appeals if necessary.",
      icon: <CreditCard className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      delay: 0.5,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-100/50 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-purple-100/50 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">WORK PROCESS</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Easy Work Process <br className="hidden md:block" />
            in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              5 Simple Steps
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial verification to final payment, our streamlined process ensures accuracy, efficiency, and
            maximum revenue for your practice
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                  />
                </div>
              )}

              <Card className="relative bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 group-hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600 mx-auto" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Our Process Works</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our proven 5-step methodology has helped hundreds of healthcare providers streamline their revenue cycle
                and maximize collections.
              </p>
              <div className="space-y-3">
                {[
                  "99.8% accuracy rate across all claims",
                  "40% average increase in revenue",
                  "90% reduction in processing time",
                  "24/7 monitoring and support",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="text-4xl font-bold text-cyan-300 mb-2">15+</div>
                <div className="text-blue-200 mb-4">Years of Experience</div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">500+</div>
                <div className="text-blue-200 mb-4">Healthcare Providers</div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">$50M+</div>
                <div className="text-blue-200">Revenue Processed</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  UserCheck,
  FileText,
  Shield,
  TrendingUp,
  CreditCard,
  BarChart3,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import WhatsAppButton from "../components/WhatsAppButton"
import { useLocation } from "react-router-dom"

export default function ServicesPage() {
  const location = useLocation()
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.replace("#", "")
      const index = services.findIndex((service) => service.anchor === anchor)
      if (index !== -1) {
        setActiveService(index)
        // Scroll to the service section
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        }, 100)
      }
    }
  }, [location.hash])

  const services = [
    {
      id: 0,
      anchor: "credentialing",
      icon: <UserCheck className="w-12 h-12" />,
      title: "Credentialing & Enrollment",
      description:
        "Credentialing with different health plans is the basic step for starting any healthcare facility. Get yourself credentialed & enrolled with different health plans efficiently.",
      features: [
        "Provider Credentialing",
        "Enrollment with Govt. and commercial payers",
        "NPI Registration (Both Type 1 & 2)",
        "CAQH update",
        "Document Management",
        "Revalidation & Re-credentialing",
        "Fee schedule negotiations",
        "EDI Management (ERA/EFT Setup)",
      ],
      benefits: ["90% faster credentialing", "100% compliance rate", "Streamlined enrollment", "Expert documentation"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: 1,
      anchor: "coding-billing",
      icon: <FileText className="w-12 h-12" />,
      title: "Medical Coding & Billing",
      description:
        "Medical coding is the key stone in medical billing industry. All your revenue depends on proper coding. Claims with incorrect coding cause denials/rejections which ultimately affect your finance.",
      features: [
        "ICD-10 & CPT coding expertise",
        "Real-time claim validation",
        "Automated error detection",
        "Denial management & appeals",
        "Clean claim submission",
        "Revenue cycle optimization",
        "Compliance monitoring",
        "Quality assurance reviews",
      ],
      benefits: ["99.5% coding accuracy", "50% reduction in denials", "Faster claim processing", "Improved cash flow"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      id: 2,
      anchor: "eligibility",
      icon: <Shield className="w-12 h-12" />,
      title: "Eligibility & Benefits Verification",
      description:
        "Verification of eligibility and benefits of patients at the time of services plays most important role in your revenue. Referrals & prior auth requirements can only be verified by checking the benefit details.",
      features: [
        "Real-time eligibility verification",
        "Benefits coverage analysis",
        "Prior authorization management",
        "Referral verification",
        "Co-pay and deductible tracking",
        "Insurance plan validation",
        "Patient responsibility calculation",
        "Automated verification workflows",
      ],
      benefits: [
        "95% verification accuracy",
        "Reduced claim denials",
        "Improved patient satisfaction",
        "Streamlined workflows",
      ],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      id: 3,
      anchor: "ar-recovery",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "AR & Aging Recovery",
      description:
        "Our team of experts specializes in recovering old AR. We have been serving the industry for decades. Failure to reimburse your work means no revenue for us.",
      features: [
        "Aged AR analysis and prioritization",
        "Systematic follow-up processes",
        "Denial appeals and resubmissions",
        "Payment posting and reconciliation",
        "Insurance correspondence management",
        "Patient collection strategies",
        "Bad debt recovery solutions",
        "Performance tracking and reporting",
      ],
      benefits: [
        "40% improvement in collections",
        "Reduced AR aging",
        "Expert appeal management",
        "Maximized revenue recovery",
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      id: 4,
      anchor: "payment-posting",
      icon: <CreditCard className="w-12 h-12" />,
      title: "Payment Posting",
      description:
        "Payment posting provides insight into a practice's daily revenue stream and shouldn't be ignored. It includes noting adjustments, write-offs and deciding whether to pursue payment on denied or rejected claims.",
      features: [
        "Electronic payment posting",
        "Manual payment entry",
        "Adjustment and write-off tracking",
        "Denial code analysis",
        "Revenue reconciliation",
        "Daily deposit management",
        "Insurance payment verification",
        "Patient payment processing",
      ],
      benefits: [
        "99% posting accuracy",
        "Real-time revenue tracking",
        "Improved cash flow visibility",
        "Reduced posting errors",
      ],
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      id: 5,
      anchor: "reporting",
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Reporting & Financial Analysis",
      description:
        "Our financial reporting gives you the insight you need to address root causes of charge issues, resolve process inefficiencies, improve coding compliance, and ensure the integrity of all claims.",
      features: [
        "Real-time performance dashboards",
        "Custom report generation",
        "KPI tracking and monitoring",
        "Financial trend analysis",
        "Compliance reporting",
        "Denial pattern analysis",
        "Revenue cycle metrics",
        "Benchmarking and comparisons",
      ],
      benefits: [
        "360° business visibility",
        "Data-driven decisions",
        "Performance optimization",
        "Compliance assurance",
      ],
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
    },
    {
      id: 6,
      anchor: "patient-support",
      icon: <Headphones className="w-12 h-12" />,
      title: "Patient Help Desk",
      description:
        "You want to provide excellent customer service. However, this can be challenging when your team is bogged down. Our team assists you with patient's billing queries so you can focus on patient care.",
      features: [
        "24/7 patient support hotline",
        "Billing inquiry resolution",
        "Payment plan setup",
        "Insurance claim status updates",
        "Statement explanations",
        "Financial counseling services",
        "Multi-language support",
        "Patient portal assistance",
      ],
      benefits: [
        "Improved patient satisfaction",
        "Reduced staff workload",
        "Faster query resolution",
        "Enhanced patient experience",
      ],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-sm font-medium">COMPREHENSIVE MEDICAL BILLING SOLUTIONS</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed">
              We Offer Complete Medical Billing Services For Your Healthcare Practice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.anchor}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(service.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeService === service.id ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <Card
                    className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      activeService === service.id
                        ? `bg-gradient-to-r ${service.bgGradient} ring-2 ring-blue-500`
                        : "bg-white/80 backdrop-blur-sm"
                    }`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} text-white`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                        <ArrowRight
                          className={`w-5 h-5 transition-all duration-300 ${
                            activeService === service.id ? "text-blue-600 translate-x-1" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${services[activeService].gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${services[activeService].gradient} text-white`}>
                      {services[activeService].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{services[activeService].title}</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {services[activeService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {services[activeService].benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`p-4 rounded-xl bg-gradient-to-r ${services[activeService].bgGradient} text-center`}
                          >
                            <div className="text-lg font-bold text-slate-900">{benefit}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="pt-6 border-t border-slate-200"
                    >
                      <Link to="/contact">
                        <Button
                          className={`w-full bg-gradient-to-r ${services[activeService].gradient} hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all duration-300`}
                        >
                          Learn More About This Service
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Practice?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a free consultation and discover how our medical billing solutions can revolutionize your
              healthcare operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl">
                    Schedule Free Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

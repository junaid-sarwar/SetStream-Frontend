"use client"

import { motion } from "framer-motion"
import { Users, Award, Target, Heart, Lightbulb, Shield, TrendingUp, CheckCircle, Sparkles, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Healthcare Providers", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "99.8%", label: "Accuracy Rate", icon: <Target className="w-8 h-8" /> },
    { number: "$50M+", label: "Revenue Processed", icon: <TrendingUp className="w-8 h-8" /> },
  ]

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Patient-Centered Innovation",
      description:
        "Every solution we create is designed with the ultimate goal of improving patient care and outcomes.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Continuous Innovation",
      description:
        "We constantly push the boundaries of what's possible in healthcare technology and claims processing.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Transparency",
      description:
        "We operate with complete transparency, building lasting partnerships based on trust and mutual success.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Results-Driven Excellence",
      description: "Our success is measured by your success. We're committed to delivering measurable improvements.",
      gradient: "from-purple-500 to-indigo-500",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      description:
        "15+ years in healthcare technology with a passion for transforming patient care through innovation.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      description: "AI and machine learning expert with extensive experience in healthcare data processing.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Jennifer Martinez",
      role: "Chief Operating Officer",
      description: "Healthcare operations specialist focused on optimizing revenue cycles and operational efficiency.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Robert Thompson",
      role: "Chief Financial Officer",
      description: "Financial strategist with deep expertise in healthcare economics and revenue optimization.",
      gradient: "from-orange-500 to-red-500",
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              >
                <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-sm font-medium">ABOUT SETCLAIMS TECHNOLOGIES</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Pioneering the{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Future
                </span>{" "}
                of Healthcare
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We're not just another technology company. We're healthcare innovators, problem-solvers, and partners in
                your success, dedicated to transforming the way healthcare claims are processed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
                      Partner With Us
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-cyan-300 mb-3 flex justify-center">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To revolutionize healthcare claims processing through cutting-edge AI technology, empowering
                    healthcare providers to focus on what matters most - delivering exceptional patient care.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Maximize operational efficiency through AI automation",
                    "Eliminate administrative burden and reduce costs",
                    "Ensure 100% compliance with healthcare regulations",
                    "Provide real-time insights for better decision making",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To be the global leader in AI-powered healthcare technology, creating a world where administrative
                    complexities never compromise the quality of patient care.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium italic">
                    "We envision a healthcare ecosystem where technology seamlessly supports human expertise, enabling
                    providers to deliver the best possible care while maximizing their operational success."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence in healthcare
              technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in healthcare technology and transforming the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${member.gradient}`}></div>
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Join Our Mission?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Partner with us to transform your healthcare operations and deliver exceptional patient care through
              innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl">
                    Start Your Journey
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

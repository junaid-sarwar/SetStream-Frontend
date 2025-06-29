import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  BarChart3,
  Brain,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react"
import axios from "axios"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { useState } from "react"
import WhatsAppButton from "../components/WhatsAppButton"
import ClientTestimonials from "../components/ClientTestimonials"
import HowOurBilling from "../components/HowOurBilling"
import WorkProcess from "../components/WorkProcess"
import Marquee from "../components/Marquee"
import HeroSection from "../components/HeroSection"
import DedicatedConsultant from "../components/DedicatedConsultant"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await axios.post("https://setstream-backend.onrender.com/api/contact", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  } catch (error) {
    console.error("Error sending contact form:", error)
    alert("Failed to send message. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="min-h-screen">
      <WhatsAppButton />

      <HeroSection/>

       {/* Marquee Section - Added here */}
      <Marquee />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Powered by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our cutting-edge technology stack delivers unprecedented accuracy and efficiency in healthcare claims
              processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Processing",
                description:
                  "Advanced machine learning algorithms that learn and adapt to optimize claim accuracy and processing speed.",
                gradient: "from-blue-500 to-cyan-500",
                stats: "99.8% Accuracy",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compliance Automation",
                description:
                  "Automated compliance monitoring ensures adherence to HIPAA and all regulatory requirements.",
                gradient: "from-purple-500 to-blue-500",
                stats: "100% Compliant",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-time Analytics",
                description: "Comprehensive dashboards provide instant insights into your revenue cycle performance.",
                gradient: "from-cyan-500 to-teal-500",
                stats: "Live Insights",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Process claims in seconds, not days. Our technology reduces processing time by 90%.",
                gradient: "from-yellow-500 to-orange-500",
                stats: "90% Faster",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Revenue Optimization",
                description: "Maximize reimbursements with intelligent claim optimization and denial prevention.",
                gradient: "from-green-500 to-emerald-500",
                stats: "40% Increase",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Processing",
                description: "Round-the-clock automated processing ensures your claims never stop moving forward.",
                gradient: "from-indigo-500 to-purple-500",
                stats: "Always On",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                      >
                        {feature.stats}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      {/* <WorkProcess /> */}

       {/* Dedicated Consultant Section */}
      <DedicatedConsultant />

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Healthcare Leaders</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join hundreds of healthcare organizations that have transformed their operations with our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Healthcare Providers", icon: <Users className="w-8 h-8" /> },
              { number: "99.8%", label: "Claim Accuracy", icon: <CheckCircle className="w-8 h-8" /> },
              { number: "$50M+", label: "Revenue Processed", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-300 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Billing Works Section */}
      <HowOurBilling />

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Practice?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Schedule a free consultation and see how our AI-powered platform can revolutionize your claims processing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Schedule Free Consultation
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                content: "+1 413 321 3900",
                subtitle: "Mon-Fri 9AM-6PM EST",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                content: "setclaimstechnologies@gmail.com",
                subtitle: "We'll respond within 24 hours",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                content: "109 Grape st Chicopee MA 01013",
                subtitle: "Our headquarters",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-slate-700 font-medium mb-1">{contact.content}</p>
                <p className="text-sm text-slate-500">{contact.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

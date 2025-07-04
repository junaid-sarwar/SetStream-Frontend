"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  UserCheck,
  FileText,
  Shield,
  TrendingUp,
  CreditCard,
  BarChart3,
  Headphones,
} from "lucide-react"
import SetClaimsLogo from "../assets/logo/setClaimsLogo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Credentialing & Enrollment", href: "/services#credentialing", icon: <UserCheck className="w-4 h-4" /> },
    { name: "Medical Coding & Billing", href: "/services#coding-billing", icon: <FileText className="w-4 h-4" /> },
    { name: "Eligibility Verification", href: "/services#eligibility", icon: <Shield className="w-4 h-4" /> },
    { name: "AR & Aging Recovery", href: "/services#ar-recovery", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Payment Posting", href: "/services#payment-posting", icon: <CreditCard className="w-4 h-4" /> },
    { name: "Reporting & Analytics", href: "/services#reporting", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Patient Help Desk", href: "/services#patient-support", icon: <Headphones className="w-4 h-4" /> },
  ]

  const company = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
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
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Link to="/" className="inline-block mb-4">
                  <img src={SetClaimsLogo || "/placeholder.svg"} alt="SetClaims Technologies" className="h-12 w-auto" />
                </Link>

                <p className="text-slate-300 leading-relaxed max-w-md">
                  Transforming healthcare claims processing with cutting-edge AI technology. We help healthcare
                  providers maximize revenue and minimize administrative burden.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>
                      <a href="mailto:setclaimstechnologies@gmail.com" className="hover:text-white transition-colors">
                        setclaimstechnologies@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>
                      <a href="tel:+14133213900" className="hover:text-white transition-colors">
                        +1 413 321 3900
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>109 Grape st Chicopee MA 01013</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-blue-300">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                          {service.icon}
                        </span>
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-blue-300">Stay Updated</h4>
                <p className="text-slate-300 mb-4 text-sm">
                  Get the latest insights on healthcare technology and claims processing.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} SetClaims Technologies SMC-Private Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

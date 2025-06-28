import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, TrendingUp, Clock, Users, Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button' // Update this import path based on your project structure

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-36 pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-sm font-medium">Trusted by 500+ Healthcare Providers</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            The Future of{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Healthcare Claims
            </span>{" "}
            is Here
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed"
          >
            Revolutionary AI-powered technology that transforms healthcare claims processing, maximizes revenue, and
            eliminates administrative burden for healthcare providers.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { icon: <CheckCircle className="w-6 h-6" />, text: "99.8% Accuracy", color: "text-green-400" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "40% Revenue Increase", color: "text-blue-400" },
              { icon: <Clock className="w-6 h-6" />, text: "24/7 Processing", color: "text-purple-400" },
              { icon: <Users className="w-6 h-6" />, text: "500+ Providers", color: "text-cyan-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-sm md:text-base font-medium">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact">
                <Button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#how-billing-works">
                <Button
                  variant="outline"
                  className="group px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection

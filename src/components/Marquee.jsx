import { motion } from "framer-motion"
import { CheckCircle, Star, Award, Shield } from "lucide-react"

function Marquee() {
  // Healthcare technology partners and integrations
  const partners = [
    { name: "Epic", category: "EHR Integration", logo: "/placeholder.svg?height=60&width=120", verified: true },
    { name: "Cerner", category: "EHR Platform", logo: "/placeholder.svg?height=60&width=120", verified: true },
    { name: "Allscripts", category: "Healthcare IT", logo: "/placeholder.svg?height=60&width=120", verified: true },
    { name: "AWS", category: "Cloud Partner", logo: "/placeholder.svg?height=60&width=120", verified: true },
    {
      name: "Microsoft Azure",
      category: "Cloud Platform",
      logo: "/placeholder.svg?height=60&width=120",
      verified: true,
    },
    {
      name: "Athenahealth",
      category: "Practice Management",
      logo: "/placeholder.svg?height=60&width=120",
      verified: true,
    },
    { name: "NextGen", category: "EHR Solution", logo: "/placeholder.svg?height=60&width=120", verified: true },
    {
      name: "eClinicalWorks",
      category: "Healthcare Software",
      logo: "/placeholder.svg?height=60&width=120",
      verified: true,
    },
    { name: "Practice Fusion", category: "EHR Platform", logo: "/placeholder.svg?height=60&width=120", verified: true },
    { name: "DrChrono", category: "Medical Software", logo: "/placeholder.svg?height=60&width=120", verified: true },
    { name: "Kareo", category: "Practice Management", logo: "/placeholder.svg?height=60&width=120", verified: true },
    {
      name: "SimplePractice",
      category: "Healthcare Platform",
      logo: "/placeholder.svg?height=60&width=120",
      verified: true,
    },
  ]

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Trusted Healthcare Technology Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Seamlessly Integrated with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leading Platforms
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform connects with 500+ healthcare systems and EHR platforms for seamless data flow
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 40,
              }}
              className="flex items-center space-x-8 pr-8"
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
                  style={{ minWidth: "280px" }}
                >
                  {/* Verified Badge */}
                  {partner.verified && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1.5 shadow-lg"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </motion.div>
                  )}

                  {/* Logo */}
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=48&width=120"
                      }}
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                      {partner.category}
                    </p>
                  </div>

                  {/* Hover Effect - Integration Status */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium py-2 px-4 rounded-b-2xl text-center"
                  >
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Live Integration</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-slate-200"
        >
          {[
            { icon: <Shield className="w-5 h-5" />, text: "HIPAA Compliant", color: "text-green-600" },
            { icon: <CheckCircle className="w-5 h-5" />, text: "500+ Integrations", color: "text-blue-600" },
            { icon: <Star className="w-5 h-5" />, text: "Real-time Sync", color: "text-purple-600" },
            { icon: <Award className="w-5 h-5" />, text: "99.9% Uptime", color: "text-orange-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md"
            >
              <span className={stat.color}>{stat.icon}</span>
              <span className="text-sm font-medium text-slate-700">{stat.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Marquee

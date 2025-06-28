import { motion } from "framer-motion"
import { CheckCircle, FileText, Code, Send, CreditCard } from "lucide-react"
import BillingProcess from '../assets/images/billing-process2.png'

export default function HowOurBilling() {
  const steps = [
    {
      number: "1",
      title: "Verification",
      description: "We verify patient with the payer.",
      icon: <CheckCircle className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "2",
      title: "Transcription",
      description: "We transcribe doctor's comments.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      number: "3",
      title: "Coding",
      description: "We code the procedure.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "4",
      title: "Submission",
      description: "We submit the medical claim.",
      icon: <Send className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "5",
      title: "Payment",
      description: "The provider gets paid.",
      icon: <CreditCard className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="how-billing-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Billing Process
            </span>{" "}
            Works?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined 5-step process ensures accurate, efficient, and timely claims processing
          </p>
        </motion.div>

        {/* Desktop Version - Diamond Flow */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={BillingProcess}
              alt="Billing Process Flow"
              className="w-full h-auto max-w-6xl mx-auto"
            />
          </motion.div>
        </div>

        {/* Mobile Version - Vertical Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-white`}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                  >
                    {step.number}.
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "99.8% Accuracy",
              description: "AI-powered verification ensures maximum precision",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />,
            },
            {
              title: "24/7 Processing",
              description: "Round-the-clock automated claims processing",
              icon: <FileText className="w-8 h-8 text-blue-500" />,
            },
            {
              title: "Faster Payments",
              description: "Streamlined process reduces payment delays",
              icon: <CreditCard className="w-8 h-8 text-purple-500" />,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

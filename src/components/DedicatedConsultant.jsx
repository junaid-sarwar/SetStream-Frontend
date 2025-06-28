import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, TrendingUp, Clock, Shield, BarChart3, Users, Award } from "lucide-react"
import {Link} from 'react-router-dom'

function DedicatedConsultant() {
    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Revenue Optimization",
            description: "Maximize your cash flow with expert billing strategies",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Real-time Reporting",
            description: "Get instant insights into your billing performance",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Error Reduction",
            description: "Minimize billing errors and claim denials",
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics Dashboard",
            description: "Comprehensive reporting and analytics tools",
        },
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
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
                    className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
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
                    className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://bellmedex.com/wp-content/uploads/2023/11/MB-S9-P1.webp"
                                    alt="Dedicated Billing Consultant"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10" />
                            </motion.div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">40%</div>
                                        <div className="text-sm text-slate-600">Revenue Increase</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                                        <div className="text-sm text-slate-600">Support</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                            <Award className="w-4 h-4 mr-2" />
                            Expert Billing Consultants
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                        >
                            Get a Dedicated Billing Consultant For Your Clinic's{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Revenue Cycle Management
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-600 leading-relaxed"
                        >
                            Medical billing can be prone to errors, delays, and inefficiencies that affect your cash flow and
                            profitability. SetClaims Technologies' billing associates streamline your clinic's billing process by
                            taking care of the entire RCM with real-time reports and analytics.
                        </motion.p>

                        {/* Benefits Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <CardContent className="p-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                                    {benefit.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to='/contact'>  <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                                    Let's Talk
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200"
                        >
                            {[
                                { icon: <Users className="w-5 h-5" />, text: "500+ Clients", color: "text-blue-600" },
                                { icon: <CheckCircle className="w-5 h-5" />, text: "99.8% Accuracy", color: "text-green-600" },
                                { icon: <Shield className="w-5 h-5" />, text: "HIPAA Compliant", color: "text-purple-600" },
                            ].map((indicator, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-2"
                                >
                                    <span className={indicator.color}>{indicator.icon}</span>
                                    <span className="text-sm font-medium text-slate-700">{indicator.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default DedicatedConsultant

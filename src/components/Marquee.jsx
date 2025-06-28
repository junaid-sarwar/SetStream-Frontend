import { motion } from "framer-motion"
import AssociateLogo1 from '../assets/images/companies-association/association-logo-1.webp'
import AssociateLogo2 from '../assets/images/companies-association/association-logo-2.webp'
import AssociateLogo3 from '../assets/images/companies-association/association-logo-3.webp'
import AssociateLogo4 from '../assets/images/companies-association/association-logo-4.webp'
import AssociateLogo5 from '../assets/images/companies-association/association-logo-5.webp'
import AssociateLogo6 from '../assets/images/companies-association/association-logo-6.webp'

function Marquee() {
    const partners = [
        {
            name: "HIPAA Compliant",
            logo: AssociateLogo1,
            category: "Compliance Certification",
        },
        {
            name: "NILA",
            logo: AssociateLogo2,
            category: "Laboratory Association",
        },
        {
            name: "ASRM",
            logo: AssociateLogo3,
            category: "Medical Society",
        },
        {
            name: "ISO",
            logo: AssociateLogo4,
            category: "Standards Organization",
        },
        {
            name: "BBB",
            logo: AssociateLogo5,
            category: "Accreditation Body",
        },
        {
            name: "AAPC",
            logo: AssociateLogo6,
            category: "Medical Coding & Billing",
        },
    ]


    const duplicatedPartners = [...partners, ...partners]

    return (
        <div className="w-full py-20 bg-gradient-to-r from-slate-50 to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center space-x-2 mb-4"
                    >
                        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Trusted Partners</span>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Integrated with Leading{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Healthcare Platforms
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Seamlessly connect with your existing EHR systems and healthcare technology stack.
                    </motion.p>
                </div>

                {/* Marquee Section */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Track */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-50%" }}
                            transition={{
                                ease: "linear",
                                repeat: Infinity,
                                duration: 40,
                            }}
                            className="flex items-center space-x-12 min-w-max"
                        >
                            {duplicatedPartners.map((partner, index) => (
                                <motion.div
                                    key={`${partner.name}-${index}`}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group relative flex-shrink-0"
                                >
                                    <div className="bg-white rounded-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 backdrop-blur-sm min-w-[220px] h-40 flex flex-col items-center justify-center">
                                        {/* Logo */}
                                        <div className="mb-4">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                        </div>
                                        {/* Info */}
                                        <div className="text-center">
                                            <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                                {partner.name}
                                            </h3>
                                            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                {partner.category}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-8 mt-16 text-slate-600"
                >
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">50+ EHR Integrations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Real-time Sync</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">99.9% Uptime</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee

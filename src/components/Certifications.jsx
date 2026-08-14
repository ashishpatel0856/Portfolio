import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, CheckCircle, Shield, ArrowUpRight, BookOpen, Clock, Layers } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Advanced Spring Boot & Microservices',
    provider: 'CodingShuttle',
    date: '2024',
    duration: '5 Months',
    skills: ['Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'Kafka', 'AWS', 'Redis'],
    link: 'https://drive.google.com/file/d/16IoF-7SqSldyTtWdlIywFJqWiyaxSOF9/view?usp=sharing',
    verified: true,
    accent: 'violet',
  },
  {
    id: 2,
    title: 'Spring Boot Fundamentals',
    provider: 'CodingShuttle',
    date: '2024',
    duration: '3 Months',
    skills: ['Spring Boot', 'REST APIs', 'JPA', 'JWT', 'OAuth', 'CI/CD', 'JUnit'],
    link: 'https://drive.google.com/file/d/1ShrgjkMqL_BVove5l03hGhynRPoZHPEO/view?usp=sharing',
    verified: true,
    accent: 'cyan',
  },
]

const accentMap = {
  violet: { text: 'text-violet-400', border: 'border-violet-500/15', bg: 'bg-violet-500/10', bar: 'from-violet-500 to-cyan-500' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/15', bg: 'bg-cyan-500/10', bar: 'from-cyan-500 to-violet-500' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="certifications" className="py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Training</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            Industry-recognized certifications validating backend and system design expertise.
          </p>
        </motion.div>

        {/* Cert Cards */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {certifications.map((cert) => {
            const c = accentMap[cert.accent]
            return (
              <motion.div key={cert.id} variants={itemVariants} className="group relative"
                onMouseEnter={() => setHoveredId(cert.id)} onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative border border-white/[0.06] bg-white/[0.02] rounded-xl p-5 hover:border-white/[0.10] transition-all duration-300 h-full flex flex-col">
                  <div className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r ${c.bar} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${c.bar} flex items-center justify-center shadow-lg`}>
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white leading-tight">{cert.title}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span className="text-[10px] text-gray-600">{cert.provider}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-md ${c.bg} ${c.text} ${c.border} border text-[10px] font-semibold`}>
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3 text-[10px] text-gray-600">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{cert.duration}</span>
                    <span className="flex items-center gap-1"><Layers className="w-3 h-3" />{cert.skills.length} Skills</span>
                    {cert.verified && (
                      <span className="flex items-center gap-1 text-emerald-500"><Shield className="w-3 h-3" />Verified</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.02] text-gray-500 border border-white/[0.05] hover:bg-white/[0.04] hover:text-gray-300 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/[0.04]">
                    <motion.a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium ${c.text} hover:opacity-80 transition-opacity`}
                      whileHover={{ x: 2 }}
                    >
                      View Certificate <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>

                  <AnimatePresence>
                    {hoveredId === cert.id && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className={`absolute -inset-px rounded-xl bg-gradient-to-r ${c.bar} opacity-[0.03] -z-10`}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <BookOpen className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-xs text-gray-600">
              Currently exploring <span className="text-white font-medium">System Design</span> & <span className="text-white font-medium">Cloud-Native Dev</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
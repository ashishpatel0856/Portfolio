import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Building2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'Cloud Computing Club (CCC), AKGEC',
    location: 'Ghaziabad, India',
    period: 'Sep 2025 – Present',
    type: 'On-site',
    status: 'Current',
    icon: Building2,
    highlights: [
      'Developed backend services using Spring Boot, Node.js, Express.js, MongoDB, and PostgreSQL',
      'Implemented JWT authentication, REST APIs, and RBAC for dashboards and event management',
      'Mentored junior developers, conducted code reviews, and maintained Swagger/OpenAPI documentation',
    ],
    tech: ['Spring Boot', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT', 'Swagger'],
  },
  {
    id: 2,
    role: 'Remote Full Stack Development Intern',
    company: 'CodeSquadz',
    location: 'Remote',
    period: 'Jun 2026 – Jul 2026',
    type: 'Internship',
    status: 'Completed',
    icon: Briefcase,
    highlights: [
      'Developed full-stack applications using React.js, Node.js, Express.js, and MongoDB',
      'Built REST APIs and integrated frontend with backend seamlessly',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 3,
    role: 'Remote Full Stack Development Intern',
    company: 'Codveda Technologies',
    location: 'Remote',
    period: 'Jul 2026 – Aug 2026',
    type: 'Internship',
    status: 'Completed',
    icon: Briefcase,
    highlights: [
      'Worked on full-stack web development using React.js, Node.js, Express.js, and MongoDB',
      'Contributed to application development, API integration, and feature implementation',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'API Integration'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [expandedId, setExpandedId] = useState(1)

  return (
    <section id="experience" className="py-8 md:py-10 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-amber-500 to-rose-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">Experience</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            Hands-on industry experience building scalable backend systems and full-stack applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Center line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-rose-500/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-start mb-5 md:mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-[#08080c] flex items-center justify-center">
                    <exp.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                <div
                  className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-4 hover:border-white/[0.10] transition-all duration-300 cursor-pointer group"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  {/* Top Row: Role + Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm md:text-base font-bold text-white truncate">{exp.role}</h3>
                        {exp.status === 'Current' && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 font-medium animate-pulse">
                            {exp.status}
                          </span>
                        )}
                        {exp.status === 'Completed' && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/15 font-medium">
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                        <Building2 className="w-3 h-3 inline" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[10px] font-semibold border border-amber-500/15">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Row */}
                  <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{exp.period}
                    </span>
                  </div>

                  {/* Tech Stack Pills (always visible, compact) */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {exp.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-[9px] rounded bg-white/[0.03] text-gray-500 border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.tech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-white/[0.03] text-gray-600 border border-white/[0.05]">
                        +{exp.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Expandable Highlights */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-white/[0.05]">
                          <p className="text-[10px] text-gray-600 font-medium mb-2 uppercase tracking-wider">Key Responsibilities</p>
                          <ul className="space-y-1.5">
                            {exp.highlights.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.06 }}
                                className="flex items-start gap-2 text-[11px] text-gray-400 leading-relaxed"
                              >
                                <span className="w-1 h-1 rounded-full bg-amber-500/60 mt-1.5 flex-shrink-0" />
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Full Tech Stack */}
                          <div className="mt-3 pt-2 border-t border-white/[0.03]">
                            <p className="text-[10px] text-gray-600 font-medium mb-1.5 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-1">
                              {exp.tech.map((tech, idx) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.04 }}
                                  className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.03] text-gray-500 border border-white/[0.05]"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand/Collapse indicator */}
                  <div className="flex items-center justify-center mt-2 pt-1.5 border-t border-white/[0.03]">
                    <span className="text-[10px] text-gray-700 flex items-center gap-0.5 group-hover:text-gray-500 transition-colors">
                      {expandedId === exp.id ? (
                        <>Less <ChevronUp className="w-3 h-3" /></>
                      ) : (
                        <>Details <ChevronDown className="w-3 h-3" /></>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
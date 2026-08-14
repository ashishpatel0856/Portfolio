import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'Ajay Kumar Garg Engineering College',
    location: 'Ghaziabad, India',
    period: '2023 – 2027',
    score: 'CGPA: 7.86/10',
    icon: GraduationCap,
    status: 'Pursuing',
    coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
  },
  {
    id: 2,
    degree: 'Intermediate (Science)',
    institution: 'BLSS Convent ICV',
    location: 'Prayagraj, India',
    period: '2022',
    score: '80.40%',
    icon: Award,
    status: 'Completed',
  },
  {
    id: 3,
    degree: 'High School (General)',
    institution: 'Sardar Patel Dr. Abdul Kalam Inter College',
    location: 'Prayagraj, India',
    period: '2020',
    score: '82%',
    icon: BookOpen,
    status: 'Completed',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [expandedId, setExpandedId] = useState(1)

  return (
    <section id="education" className="py-14 md:py-16 bg-[#08080c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Education</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            Strong academic foundation in Computer Science with hands-on project experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-cyan-500/20 to-transparent md:-translate-x-px" />

          {education.map((edu, index) => (
            <motion.div key={edu.id} variants={itemVariants}
              className={`relative flex items-start mb-5 md:mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-[#08080c] flex items-center justify-center">
                    <edu.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-violet-400" />
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                <div className="border border-white/[0.06] bg-white/[0.02] rounded-xl p-4 hover:border-white/[0.10] transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm md:text-base font-bold text-white truncate">{edu.degree}</h3>
                        {edu.status === 'Pursuing' && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 font-medium">{edu.status}</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{edu.institution}</p>
                    </div>
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 text-[10px] font-semibold border border-violet-500/15">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-600">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</span>
                  </div>

                  <AnimatePresence>
                    {edu.coursework && expandedId === edu.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-white/[0.05]">
                          <p className="text-[10px] text-gray-600 font-medium mb-2 uppercase tracking-wider">Relevant Coursework</p>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.coursework.map((course, idx) => (
                              <motion.span key={course} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.04 }}
                                className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.03] text-gray-500 border border-white/[0.05]"
                              >{course}</motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {edu.coursework && (
                    <div className="flex items-center justify-center mt-2 pt-1.5 border-t border-white/[0.03]">
                      <span className="text-[10px] text-gray-700 flex items-center gap-0.5">
                        {expandedId === edu.id ? <>Less <ChevronUp className="w-3 h-3" /></> : <>Coursework <ChevronDown className="w-3 h-3" /></>}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs text-gray-500">
              Scoring <span className="text-white font-semibold">7.86 CGPA</span> with active involvement in <span className="text-violet-400 font-medium">Cloud Computing Club</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
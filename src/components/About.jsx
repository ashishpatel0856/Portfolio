import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Server, GraduationCap, Trophy, GitBranch, Target, ChevronDown, ChevronUp } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const [showMore, setShowMore] = useState(false)

  const features = [
    { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable & efficient code following best practices and design patterns.' },
    { icon: Server, title: 'Backend Expert', desc: 'Spring Boot, Microservices architecture & RESTful API development at scale.' },
    { icon: Database, title: 'Database Design', desc: 'SQL & NoSQL databases with query optimization and indexing strategies.' },
    { icon: Globe, title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD pipelines and infrastructure automation.' },
  ]

  const stats = [
    { icon: Trophy, value: '200+', label: 'LeetCode Solved' },
    { icon: GitBranch, value: '30+', label: 'Repositories' },
    { icon: Target, value: '700+', label: 'GitHub Commits' },
    { icon: GraduationCap, value: '7.86', label: 'CGPA' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="about" className="py-14 md:py-16 bg-[#08080c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Header */}
        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-10">
          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">About Me</span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Who I <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Am</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-500 text-sm max-w-md">
            Full Stack Developer passionate about building scalable, real-world solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5">

          {/* Left: Bio + Stats */}
          <motion.div className="lg:col-span-3 space-y-4" variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>

            {/* Bio Card */}
            <motion.div variants={item}
              className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.10] transition-all duration-300"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                I'm a passionate <span className="text-violet-400 font-medium">Full Stack Developer</span> currently pursuing 
                B.Tech in Computer Science at <span className="text-white font-medium">Ajay Kumar Garg Engineering College</span> with a CGPA of 7.86/10.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With expertise in <span className="text-cyan-400 font-medium">Spring Boot</span>,{' '}
                <span className="text-violet-400 font-medium">React.js</span>, and modern web technologies, 
                I build scalable applications that solve real-world problems.
              </p>

              <AnimatePresence>
                {showMore && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="pt-3 mt-3 border-t border-white/[0.05]">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        I have solved <span className="text-violet-400 font-medium">200+ problems on LeetCode</span> and 
                        contributed to <span className="text-cyan-400 font-medium">30+ repositories on GitHub</span> with 
                        700+ commits, constantly learning and improving my skills.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={() => setShowMore(!showMore)} className="mt-3 text-xs text-gray-600 hover:text-gray-400 flex items-center gap-1 transition-colors">
                {showMore ? <>Less <ChevronUp size={12} /></> : <>Read more <ChevronDown size={12} /></>}
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center group hover:border-violet-500/15 hover:bg-white/[0.03] transition-all duration-300">
                  <stat.icon className="w-4 h-4 text-violet-400/70 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Feature Bento Grid */}
          <motion.div className="lg:col-span-2 grid grid-cols-2 gap-3" variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {features.map((feature) => (
              <motion.div key={feature.title} variants={item}
                className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm group hover:border-violet-500/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-[11px] text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Server, Container, Sparkles, Terminal, Layers, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    accent: 'violet',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'cyan',
    skills: [
      { name: 'Spring Boot', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Spring Framework', level: 88 },
      { name: 'Hibernate', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 85 },
      { name: 'JWT Auth', level: 88 },
      { name: 'Spring AI', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    accent: 'violet',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    accent: 'cyan',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 86 },
      { name: 'Redis', level: 82 },
      { name: 'Neo4j', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Container,
    accent: 'violet',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'AWS', level: 78 },
      { name: 'Kubernetes', level: 72 },
      { name: 'Kafka', level: 75 },
      { name: 'Postman', level: 88 },
    ],
  },
]

const accentColors = {
  violet: { text: 'text-violet-400', bg: 'from-violet-500/10 to-cyan-500/10', border: 'border-violet-500/10', bar: 'from-violet-500 to-cyan-500' },
  cyan: { text: 'text-cyan-400', bg: 'from-cyan-500/10 to-violet-500/10', border: 'border-cyan-500/10', bar: 'from-cyan-500 to-violet-500' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const activeCat = skillCategories[activeCategory]
  const colors = accentColors[activeCat.accent]

  return (
    <section id="skills" className="py-14 md:py-16 bg-[#08080c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            Technologies I use to build scalable, production-grade applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-wrap gap-2 mb-6">
          {skillCategories.map((cat, idx) => (
            <motion.button key={cat.title} variants={itemVariants} onClick={() => setActiveCategory(idx)}
              className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === idx
                  ? 'text-white bg-white/[0.08] border border-white/[0.12] shadow-lg'
                  : 'text-gray-500 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:text-gray-400'
              }`}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            >
              <cat.icon className={`w-3.5 h-3.5 ${activeCategory === idx ? 'text-violet-400' : 'text-gray-600'}`} />
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Panel */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/[0.06] bg-white/[0.02] rounded-2xl p-5 md:p-6"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.05]">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                <activeCat.icon className={`w-4 h-4 ${colors.text}`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{activeCat.title}</h3>
                <p className="text-[10px] text-gray-600">{activeCat.skills.length} technologies</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCat.skills.map((skill, idx) => (
                <motion.div key={skill.name}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04, duration: 0.35 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)} onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className={`text-[10px] font-semibold ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`} />
                  </div>
                  {hoveredSkill === skill.name && (
                    <div className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${colors.bg} opacity-40 -z-10 border ${colors.border}`} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Skills Cloud */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wider">All Technologies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skillCategories.flatMap(c => c.skills).map((skill, idx) => (
              <motion.span key={skill.name} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + idx * 0.015, duration: 0.25 }}
                className="px-2.5 py-1 text-[11px] rounded-lg bg-white/[0.02] text-gray-500 border border-white/[0.05] hover:bg-white/[0.05] hover:text-gray-300 hover:border-white/[0.08] transition-all duration-200 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          {[
            { label: 'Technologies', value: '30+', icon: Layers, color: 'text-violet-400' },
            { label: 'Backend Focus', value: '60%', icon: Server, color: 'text-cyan-400' },
            { label: 'Projects Built', value: '10+', icon: Zap, color: 'text-emerald-400' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
              <div className="text-base font-bold text-white">{stat.value}</div>
              <div className="text-[10px] text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
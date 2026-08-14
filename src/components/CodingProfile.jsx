import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Trophy, GitBranch, Star, ExternalLink, Flame, Target, TrendingUp, Zap } from 'lucide-react'

const profiles = [
  {
    platform: 'LeetCode',
    icon: Code2,
    handle: '@ashish_kum_44',
    stats: [
      { label: 'Solved', value: '200+' },
      { label: 'Rank', value: 'Top 25%' },
      { label: 'Streak', value: '45 Days' },
    ],
    link: 'https://leetcode.com/u/ashish_kum_44/',
    tags: ['Arrays', 'Trees', 'DP', 'Graphs', 'SQL'],
    accent: 'violet',
  },
  {
    platform: 'GitHub',
    icon: GitBranch,
    handle: '@ashishpatel0856',
    stats: [
      { label: 'Repos', value: '30+' },
      { label: 'Commits', value: '700+' },
      { label: 'Stars', value: '50+' },
    ],
    link: 'https://github.com/ashishpatel0856',
    tags: ['Spring Boot', 'React', 'Node.js', 'Microservices'],
    accent: 'cyan',
  },
  {
    platform: 'HackerRank',
    icon: Trophy,
    handle: '@ashishpatel0856',
    stats: [
      { label: 'Certs', value: '3+' },
      { label: 'Java', value: '5★' },
      { label: 'SQL', value: '5★' },
    ],
    link: 'https://hackerrank.com',
    tags: ['Java', 'Problem Solving', 'SQL', 'Python'],
    accent: 'emerald',
  },
]

const accentMap = {
  violet: { text: 'text-violet-400', border: 'border-violet-500/15', bg: 'bg-violet-500/10', bar: 'from-violet-500 to-cyan-500' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/15', bg: 'bg-cyan-500/10', bar: 'from-cyan-500 to-violet-500' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/15', bg: 'bg-emerald-500/10', bar: 'from-emerald-500 to-cyan-500' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const CodingProfile = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="coding" className="py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Coding Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Coding <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Profile</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md">
            Consistent problem solving and open-source contributions across platforms.
          </p>
        </motion.div>

        {/* Profile Cards */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {profiles.map((profile, index) => {
            const c = accentMap[profile.accent]
            return (
              <motion.div key={profile.platform} variants={itemVariants} className="group relative"
                onMouseEnter={() => setHoveredIdx(index)} onMouseLeave={() => setHoveredIdx(null)}
              >
                <a href={profile.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative border border-white/[0.06] bg-white/[0.02] rounded-xl p-4 hover:border-white/[0.10] transition-all duration-300 h-full">
                    <div className={`absolute top-0 left-3 right-3 h-0.5 bg-gradient-to-r ${c.bar} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${c.bar} flex items-center justify-center`}>
                          <profile.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{profile.platform}</h3>
                          <p className="text-[10px] text-gray-600">{profile.handle}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-700 group-hover:text-white transition-colors" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {profile.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className={`text-sm font-bold ${c.text}`}>{stat.value}</div>
                          <div className="text-[9px] text-gray-600 mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {profile.tags.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 text-[9px] rounded-md bg-white/[0.02] text-gray-600 border border-white/[0.04]">{tag}</span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {hoveredIdx === index && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className={`absolute -inset-px rounded-xl bg-gradient-to-r ${c.bar} opacity-[0.03] -z-10`}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.45 }}
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: Target, label: 'Problems', value: '200+', color: 'text-violet-400' },
            { icon: GitBranch, label: 'Repos', value: '40+', color: 'text-cyan-400' },
            { icon: Zap, label: 'Commits', value: '1000+', color: 'text-emerald-400' },
            { icon: Trophy, label: 'Certs', value: '3+', color: 'text-amber-400' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <div>
                <div className="text-sm font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfile
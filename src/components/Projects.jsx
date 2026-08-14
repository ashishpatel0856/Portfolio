import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, X, Play, MapPin, Utensils, Zap, ChevronRight, Star, Calendar, Users } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SyncStream',
    subtitle: 'Real-Time YouTube Watch Party',
    description: 'Production-grade watch party platform with millisecond-accurate playback sync, live chat, and RBAC.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=350&fit=crop',
    tech: ['React 19', 'Node.js', 'Socket.IO', 'MongoDB', 'Express', 'JWT'],
    features: [
      'Real-time video sync via WebSockets with <100ms latency',
      'RBAC: Host, Moderator, Participant, Viewer roles',
      'OOP-based WebSocket architecture with Room & RoomManager',
      'Live chat, emoji reactions, persistent message storage',
      'Unique 6-character room codes with graceful disconnect handling',
    ],
    stats: [
      { icon: Users, label: '100+ Users' },
      { icon: Zap, label: '<100ms' },
      { icon: Play, label: 'YouTube API' },
    ],
    github: 'https://github.com/ashishpatel0856/syncStream',
    live: 'https://sync-stream-opal.vercel.app/',
    accent: 'violet',
  },
  {
    id: 2,
    title: 'UberClone',
    subtitle: 'Real-Time Ride-Hailing Platform',
    description: 'Full-stack ride-hailing app with live GPS tracking, dynamic pricing, OTP verification, and role-based dashboards.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=350&fit=crop',
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO', 'Stripe'],
    features: [
      'Real-time GPS driver tracking with 2-second Socket.IO updates',
      'Dynamic fare engine with Haversine distance & surge multiplier',
      'Redis geospatial indexing for nearest driver matching',
      'OTP ride verification, in-app wallet, Stripe webhooks',
      'Rider/Driver/Admin dashboards with KYC document upload',
    ],
    stats: [
      { icon: MapPin, label: 'Live GPS' },
      { icon: Zap, label: 'Dynamic Fare' },
      { icon: Users, label: '3 Roles' },
    ],
    github: 'https://github.com/ashishpatel0856/UberApp',
    live: 'https://uber-app1.vercel.app/',
    accent: 'cyan',
  },
  {
    id: 3,
    title: 'QuickDish',
    subtitle: 'Online Food Ordering System',
    description: 'Scalable microservices food delivery platform with real-time tracking, Redis caching, and Stripe payments.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=350&fit=crop',
    tech: ['React 19', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'Microservices architecture for orders, payments, and delivery',
      'Google Maps API for distance-based delivery pricing',
      'Redis caching reducing DB load by 40%',
      'Stripe payments with secure webhooks & refunds',
      'OTP email verification & responsive Tailwind UI',
    ],
    stats: [
      { icon: Utensils, label: 'Microservices' },
      { icon: Zap, label: '40% Faster' },
      { icon: Star, label: 'Production' },
    ],
    github: 'https://github.com/ashishpatel0856/QuickDish',
    live: 'https://quickdish-app.vercel.app/',
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
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg">
            Production-grade apps built with modern stacks — real-time, scalable, and user-focused.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => {
            const c = accentMap[project.accent]
            return (
              <motion.div key={project.id} variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative border border-white/[0.06] bg-white/[0.02] rounded-2xl overflow-hidden hover:border-white/[0.10] transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.bar} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-black/40 backdrop-blur text-white/90 border border-white/10">
                        {project.subtitle.split(' ')[0]}
                      </span>
                    </div>
                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
                        >
                          <span className="text-white text-xs font-medium flex items-center gap-1">Explore <ChevronRight className="w-3 h-3" /></span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">{project.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5 mb-2">{project.subtitle}</p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{project.description}</p>

                    <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-white/[0.04]">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <stat.icon className={`w-3 h-3 ${c.text}`} />
                          <span className="text-[10px] text-gray-600">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.03] text-gray-500 border border-white/[0.05]">{tech}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`px-2 py-0.5 text-[10px] rounded-md ${c.bg} ${c.text} ${c.border} border`}>+{project.tech.length - 4}</span>
                      )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center text-[11px] font-medium text-gray-400 hover:bg-white/[0.06] hover:text-white transition-all flex items-center justify-center gap-1.5"
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={12} /> Code
                      </motion.a>
                      <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                        className={`flex-1 py-2 rounded-lg bg-gradient-to-r ${c.bar} text-center text-[11px] font-medium text-white hover:shadow-md transition-all flex items-center justify-center gap-1.5`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} /> Live
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Link */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-8">
          <p className="text-gray-700 text-xs">More projects on <a href="https://github.com/ashishpatel0856" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">GitHub →</a></p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const c = accentMap[selectedProject.accent]
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}
            >
              <motion.div initial={{ scale: 0.94, opacity: 0, y: 16 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.94, opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0c0c10] border border-white/[0.08] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-40 sm:h-48">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.bar} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/40 to-transparent" />
                  <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur text-white hover:bg-black/60 transition-all border border-white/10">
                    <X size={14} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 backdrop-blur text-[10px] font-semibold text-white border border-white/10 mb-2">
                      {selectedProject.subtitle.split(' ')[0]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-gray-400 text-xs">{selectedProject.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">{selectedProject.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {selectedProject.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <stat.icon className={`w-4 h-4 ${c.text} mx-auto mb-1`} />
                        <span className="text-xs text-gray-300 font-medium">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-white mb-2.5 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
                          <span
                            className={`w-1 h-1 rounded-full ${c.bg.replace('bg-', 'bg-')} mt-1.5 flex-shrink-0`}
                            style={{
                              background:
                                selectedProject.accent === 'violet'
                                  ? '#8b5cf6'
                                  : selectedProject.accent === 'cyan'
                                    ? '#06b6d4'
                                    : '#10b981'
                            }}
                          />                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-white mb-2.5 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className={`px-2.5 py-1 rounded-lg ${c.bg} ${c.text} ${c.border} border text-[11px] font-medium`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <motion.a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center text-xs font-medium text-gray-300 hover:bg-white/[0.06] hover:text-white transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    >
                      <Github size={14} /> Source Code
                    </motion.a>
                    <motion.a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                      className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r ${c.bar} text-center text-xs font-medium text-white hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </section>
  )
}

export default Projects
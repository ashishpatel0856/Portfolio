import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ChevronDown, MapPin, Download, ArrowRight } from 'lucide-react'

import PHOTO_URL from '../assets/ashishimage.jpeg'

const TypingText = ({ text, className = '', delay = 0 }) => {
  const letters = Array.from(text)
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: delay } }
      }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 150 } }
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}


const Particles = () => {
  const [particles, setParticles] = useState([])
  useEffect(() => {
    const p = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5
    }))
    setParticles(p)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            boxShadow: `0 0 ${p.size * 4}px rgba(139,92,246,0.25)`
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}


const Hero = ({ resumeLink, onDownload }) => {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  const socials = [
    { icon: Github, href: 'https://github.com/ashishpatel0856', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-patel-28a572304', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ashishkumarr0856@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919129900856', label: 'Phone' },
  ]

  const techStack = ['Java', 'Spring Boot', 'React','MERN', 'PostgreSql', 'AWS']

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-[15%] left-[20%] w-[350px] h-[350px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        {/* Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <Particles />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* ===== LEFT: TEXT CONTENT ===== */}
          <div className="flex-1 text-center lg:text-left max-w-xl order-2 lg:order-1">

            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border border-emerald-500/15 bg-emerald-500/5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] text-emerald-400 font-medium">Available for work</span>
            </motion.div>

            {/* Greeting */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1"
            >
              <TypingText text="Hi, I'm" delay={0.3} />
            </motion.h1>

            {/* NAME - This is the critical fix */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4"
            >
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #a78bfa 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 4s ease infinite'
                }}
              >
                Ashish Kumar
              </h2>
            </motion.div>

            {/* Location & Role */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <MapPin size={12} className="text-gray-600" />
              <span className="text-gray-500 text-xs">Ghaziabad, India</span>
              <span className="text-gray-700">·</span>
              <span className="text-gray-500 text-xs">Full Stack Developer</span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Building scalable applications with{' '}
              <span className="text-violet-400 font-medium">Spring Boot</span>,{' '}
              <span className="text-cyan-400 font-medium">React</span>, &{' '}
              <span className="text-emerald-400 font-medium">Microservices</span>
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-[11px] font-medium rounded-lg text-gray-400 bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/20 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 mb-7"
            >
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-cyan-500 hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
              >
                View My Work <ArrowRight size={14} />
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium text-gray-300 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:text-white transition-all text-center"
              >
                Contact Me
              </motion.a>
              {onDownload && (
                <motion.button 
                  onClick={onDownload}
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium text-gray-300 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Download size={14} /> Resume
                </motion.button>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              {socials.map((social, i) => (
                <motion.a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-500 hover:text-white hover:border-violet-500/25 hover:bg-violet-500/10 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 8 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 + i * 0.06 }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ===== RIGHT: PROFILE PHOTO ===== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-25 scale-110 bg-gradient-to-r from-violet-500 to-cyan-500" />

              {/* Rotating Gradient Ring */}
              <motion.div 
                className="absolute -inset-[2px] rounded-full p-[2px]"
                style={{ background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #8b5cf6)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-[#08080c]" />
              </motion.div>

              {/* Photo Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                {/* Loading skeleton */}
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-white/[0.03] animate-pulse rounded-full" />
                )}

                <img
                  src={imgError ? FALLBACK_IMAGE : PHOTO_URL}
                  alt="Ashish Kumar"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ objectPosition: 'center 15%' }}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => { setImgError(true); setImgLoaded(true); }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

             
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] text-gray-700">Scroll</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={14} className="text-gray-700" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

export default Hero
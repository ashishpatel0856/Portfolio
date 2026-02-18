import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react'
import photo from '../assets/photo.jpeg'  // <-- Line 4: Import photo

// Use imported photo
const PHOTO_URL = photo  


// Typing animation component
const TypingText = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text)
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <div className="mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2">
                <TypingText text="Hi, I'm" className="block text-white mb-1 md:mb-2" delay={0.2} />
                <span className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <TypingText text="Ashish Kumar" delay={0.8} />
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer specializing in{' '}
              <motion.span 
                className="text-primary font-semibold inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Spring Boot
              </motion.span>
              ,{' '}
              <motion.span 
                className="text-secondary font-semibold inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                React
              </motion.span>
              , and{' '}
              <motion.span 
                className="text-accent font-semibold inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                Microservices
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10"
            >
              <motion.a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 glow-hover relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-white/20 rounded-full text-white text-sm md:text-base font-semibold hover:bg-white/5 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
            >
              <span className="text-xs md:text-sm text-gray-500 mr-1 md:mr-2">Follow:</span>
              {[
                { icon: Github, href: 'https://github.com/ashishpatel0856', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-patel-28a572304', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ashishkumarr0856@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+919129900856', label: 'Phone' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <social.icon size={18} className="md:w-5 md:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex justify-center w-full"
          >
            <div className="relative">
              {/* Animated Rings - Hidden on small mobile */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30 hidden sm:block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.2, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-secondary/30 hidden sm:block"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl scale-110" />
              
              {/* Photo Container */}
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={PHOTO_URL}
                  alt="Ashish Kumar"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'center 15%' }}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = FALLBACK_IMAGE
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating Badge - Only Available for Work */}
              <motion.div
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-card border border-white/10 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xs md:text-sm font-semibold text-primary">Available for Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500">Scroll</span>
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
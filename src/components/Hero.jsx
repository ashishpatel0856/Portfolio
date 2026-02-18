import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react'

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <TypingText text="Hi, I'm" className="block text-white mb-2" delay={0.2} />
                <span className="text-gradient text-5xl md:text-6xl lg:text-7xl">
                  <TypingText text="Ashish Kumar" delay={0.8} />
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer specializing in{' '}
              <motion.span 
                className="text-primary font-semibold inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                Spring Boot
              </motion.span>
              ,{' '}
              <motion.span 
                className="text-secondary font-semibold inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity, delay: 0.3 }
                }}
              >
                React
              </motion.span>
              , and{' '}
              <motion.span 
                className="text-accent font-semibold inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity, delay: 0.6 }
                }}
              >
                Microservices
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold flex items-center gap-2 glow-hover relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-all relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100"
                  whileHover={{ opacity: 1 }}
                />
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-sm text-gray-500 mr-2">Follow me:</span>
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
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.2, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-secondary/30"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
              
              {/* Photo Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/src/assets/photo.jpeg"
                  alt="Ashish Kumar"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'center 20%' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/6366f1/ffffff?text=AK'
                  }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-card border border-white/10 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-semibold text-primary">Available for Work</span>
              </motion.div>

              {/* <motion.div
                className="absolute top-4 -left-4 px-3 py-1.5 rounded-full bg-card border border-white/10 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xs font-medium text-secondary">2+ Years Exp.</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500">Scroll Down</span>
            <ChevronDown size={20} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
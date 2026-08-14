import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, 
  Copy, Check, ArrowUpRight, MessageCircle, Sparkles 
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(null)

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'ashishkumarr0856@gmail.com', 
      href: 'mailto:ashishkumarr0856@gmail.com',
      color: 'text-rose-400',
      bg: 'bg-rose-500/8',
      border: 'border-rose-500/12',
      hoverBorder: 'group-hover:border-rose-500/25'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91-9129900856', 
      href: 'tel:+919129900856',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/8',
      border: 'border-emerald-500/12',
      hoverBorder: 'group-hover:border-emerald-500/25'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Ghaziabad, India', 
      href: 'https://maps.google.com/?q=Ghaziabad,India',
      color: 'text-sky-400',
      bg: 'bg-sky-500/8',
      border: 'border-sky-500/12',
      hoverBorder: 'group-hover:border-sky-500/25',
      external: true 
    },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com/ashishpatel0856', label: 'GitHub', color: 'hover:text-white hover:border-white/15' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-patel-28a572304', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/20' },
    { icon: Instagram, href: 'https://www.instagram.com/ashish_patel_9229/', label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-400/20' },
    { icon: Twitter, href: 'https://x.com/kumar_ashi29343', label: 'Twitter', color: 'hover:text-sky-400 hover:border-sky-400/20' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  }

  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="contact" className="py-8 md:py-10 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-violet-500/3 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-56 h-56 bg-cyan-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Header */}
        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-8 text-center">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-3">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Contact</span>
          </motion.div>
          <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Connect</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 text-xs sm:text-sm max-w-sm mx-auto">
            Open for freelance, internships, and full-time opportunities.
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
          className="border border-white/[0.06] bg-white/[0.015] rounded-2xl p-5 sm:p-6"
        >

          {/* Top: Availability + CTA */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 pb-5 border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">Available for work</span>
            </div>
            <motion.a 
              href="mailto:ashishkumarr0856@gmail.com?subject=Let's Work Together"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/15 transition-shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Say Hello
            </motion.a>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-3 gap-2.5 mb-5">
            {contacts.map((item_data) => (
              <motion.a 
                key={item_data.label} 
                href={item_data.href} 
                target={item_data.external ? '_blank' : undefined}
                rel={item_data.external ? 'noopener noreferrer' : undefined} 
                variants={item}
                className={`group relative p-3.5 rounded-xl border ${item_data.border} ${item_data.bg} ${item_data.hoverBorder} hover:bg-white/[0.03] transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg ${item_data.bg} border ${item_data.border} flex items-center justify-center`}>
                    <item_data.icon className={`w-3.5 h-3.5 ${item_data.color}`} />
                  </div>
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCopy(item_data.value, item_data.label); }}
                    className="p-1 rounded-md bg-white/[0.03] text-gray-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                  >
                    {copied === item_data.label ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <p className="text-[9px] text-gray-600 uppercase tracking-wider mb-0.5">{item_data.label}</p>
                <p className="text-xs text-white font-medium truncate">{item_data.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social + Quick Actions */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.05]">

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-600 mr-1">Follow:</span>
              {socials.map((social) => (
                <motion.a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }} 
                  whileTap={{ scale: 0.95 }}
                  className={`w-8 h-8 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-500 flex items-center justify-center transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-2">
              <motion.a 
                href="https://github.com/ashishpatel0856" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 text-[11px] font-medium flex items-center gap-1.5 hover:text-white hover:border-white/10 transition-all"
              >
                <Github className="w-3 h-3" /> GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ashish-patel-28a572304" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400 text-[11px] font-medium flex items-center gap-1.5 hover:text-white hover:border-white/10 transition-all"
              >
                <Linkedin className="w-3 h-3" /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[10px] text-gray-700 mt-5"
        >
          Prefer email? I'll respond within <span className="text-gray-500">24 hours</span>.
        </motion.p>
      </div>
    </section>
  )
}

export default Contact
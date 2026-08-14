import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Copy, Check, ArrowUpRight, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:ashishkumarr0856@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
  }

  const contacts = [
    { icon: Mail, label: 'Email', value: 'ashishkumarr0856@gmail.com', href: 'mailto:ashishkumarr0856@gmail.com', color: 'text-rose-400', bg: 'from-rose-500/10 to-pink-500/10', border: 'border-rose-500/10' },
    { icon: Phone, label: 'Phone', value: '+91-9129900856', href: 'tel:+919129900856', color: 'text-emerald-400', bg: 'from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/10' },
    { icon: MapPin, label: 'Location', value: 'Ghaziabad, India', href: 'https://maps.google.com/?q=Ghaziabad,India', color: 'text-sky-400', bg: 'from-sky-500/10 to-cyan-500/10', border: 'border-sky-500/10', external: true },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com/ashishpatel0856', label: 'GitHub', hoverColor: 'hover:text-white hover:border-white/15 hover:shadow-white/5' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-patel-28a572304', label: 'LinkedIn', hoverColor: 'hover:text-blue-400 hover:border-blue-400/20 hover:shadow-blue-400/10' },
    { icon: Instagram, href: 'https://www.instagram.com/ashish_patel_9229/', label: 'Instagram', hoverColor: 'hover:text-pink-400 hover:border-pink-400/20 hover:shadow-pink-400/10' },
    { icon: Twitter, href: 'https://x.com/kumar_ashi29343', label: 'Twitter', hoverColor: 'hover:text-sky-400 hover:border-sky-400/20 hover:shadow-sky-400/10' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="contact" className="py-14 md:py-16 bg-[#08080c] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-violet-500/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-cyan-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Header */}
        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-10">
          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-500" />
            <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
          </motion.div>
          <motion.h2 variants={item} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Let's Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Together</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-500 text-sm max-w-md">
            Have a project in mind? I'm open for freelance work and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5">

          {/* Left: Contact Info + Social */}
          <motion.div className="lg:col-span-2 space-y-3" variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>

            {contacts.map((item_data) => (
              <motion.a key={item_data.label} href={item_data.href} target={item_data.external ? '_blank' : undefined}
                rel={item_data.external ? 'noopener noreferrer' : undefined} variants={item}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300 group"
              >
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item_data.bg} ${item_data.border} border flex items-center justify-center flex-shrink-0`}>
                  <item_data.icon className={`w-4 h-4 ${item_data.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-600 uppercase tracking-wider">{item_data.label}</p>
                  <p className="text-sm text-white font-medium truncate">{item_data.value}</p>
                </div>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCopy(item_data.value, item_data.label); }}
                  className="p-1.5 rounded-md bg-white/[0.03] text-gray-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  {copied === item_data.label ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-violet-400 transition-colors" />
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div variants={item} className="pt-1">
              <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-2.5">Follow Me</p>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-xl border border-white/[0.06] bg-white/[0.02] text-gray-500 flex items-center justify-center transition-all duration-300 ${social.hoverColor}`}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div variants={item} className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div className="lg:col-span-3" variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <motion.form variants={item} onSubmit={handleSubmit}
              className="p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {[
                  { id: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
                  { id: 'email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="text-[10px] text-gray-600 uppercase tracking-wider mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.id]}
                      onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                      onFocus={() => setFocusedField(field.id)} onBlur={() => setFocusedField(null)}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border text-white text-sm placeholder-gray-700 focus:outline-none transition-all duration-300 ${
                        focusedField === field.id ? 'border-violet-500/30 bg-white/[0.04]' : 'border-white/[0.06]'
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[10px] text-gray-600 uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea
                  required rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.02] border text-white text-sm placeholder-gray-700 focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message' ? 'border-violet-500/30 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
              >
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
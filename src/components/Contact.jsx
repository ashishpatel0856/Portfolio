import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [copied, setCopied] = React.useState(null)

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
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9129900856',
      href: 'tel:+919129900856',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghaziabad, India',
      href: 'https://maps.google.com/?q=Ghaziabad,India',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      external: true,
    },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com/ashishpatel0856', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-patel-28a572304', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/ashish_patel_9229/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: 'https://x.com/kumar_ashi29343', label: 'Twitter', color: 'hover:text-sky-400' },
  ]

  return (
    <section id="contact" className="py-16 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4"
          >
            <MessageSquare size={14} />
            Contact
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Have a project in mind? I'm open for freelance work and collaborations.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20`}>
                    <item.icon size={18} className="text-white" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleCopy(item.value, item.label)
                    }}
                    className="p-1.5 rounded-md bg-white/5 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                  >
                    {copied === item.label ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className={`text-sm font-semibold ${item.textColor} truncate`}>
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Follow:</span>
              <div className="flex gap-2">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-2.5 rounded-lg bg-white/5 text-gray-400 ${social.color} hover:bg-white/10 transition-all border border-white/5`}
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status & CTA */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Available</span>
              </div>
              
              <motion.a
                href="mailto:ashishkumarr0856@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Hire Me
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-6 grid grid-cols-3 gap-4 text-center"
        >
          {[
            { label: 'Response Time', value: '< 24h' },
            // { label: 'Experience', value: '2+ Years' },
            { label: 'Projects', value: '5+' },
          ].map((stat, index) => (
            <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-lg font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1ShrgjkMqL_BVove5l03hGhynRPoZHPEO/view?usp=sharing"

  const getDirectDownloadLink = (driveLink) => {
    const fileId = driveLink.match(/\/d\/(.+?)\//)?.[1] || driveLink.match(/id=(.+?)(&|$)/)?.[1]
    if (fileId) {
      return `https://drive.google.com/uc?export=download&id=${fileId}`
    }
    return driveLink
  }

  const RESUME_DOWNLOAD_LINK = getDirectDownloadLink(RESUME_DRIVE_LINK)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_DOWNLOAD_LINK
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'Ashish_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      window.open(RESUME_DRIVE_LINK, '_blank')
    }, 1000)
  }

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    // { name: 'Coding', href: '#coding' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-[#08080c] text-gray-100 overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#08080c]/85 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => handleNavClick('#home')} className="text-lg font-bold group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-500">
                Ashish Kumar
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-white/[0.08]'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="ml-3 px-4 py-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 hover:shadow-lg hover:shadow-violet-500/20 transition-all"
              >
                <Download size={13} />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#08080c]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
            >
              <div className="px-4 py-3 space-y-0.5">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'text-white bg-white/[0.06]'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  onClick={() => { setIsMenuOpen(false); handleResumeDownload() }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 mt-2 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg text-white text-sm font-semibold"
                >
                  <Download size={15} />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero resumeLink={RESUME_DRIVE_LINK} onDownload={handleResumeDownload} />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* <CodingProfile /> */}
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-white/[0.06] bg-[#08080c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © 2024 Ashish Kumar. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
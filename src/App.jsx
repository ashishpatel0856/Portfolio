import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import CodingProfile from './components/CodingProfile'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1UXp1eevJuQDZOGt_oHlV5pTpmN-ao7Mr/view?usp=sharing"

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
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'coding', 'certifications', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
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
    
    // Small delay for mobile menu to close
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
    { name: 'Coding', href: '#coding' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-darker text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-darker/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              Ashish Kumar
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <Download size={16} />
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              transition={{ duration: 0.2 }}
              className="md:hidden bg-darker/95 backdrop-blur-lg border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => {
                    setIsMenuOpen(false)
                    handleResumeDownload()
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium"
                >
                  <Download size={18} />
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
        <CodingProfile />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Ashish Kumar. Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
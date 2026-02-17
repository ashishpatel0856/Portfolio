import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Phone, Download } from 'lucide-react'
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


  const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1CHp8UgwCr6MjJyiCz4tNvModcBT4EQA7/view?usp=sharing"
  
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

  const handleResumeDownload = (e) => {
    e.preventDefault()
    
    // Method 1: Direct download attempt
    const link = document.createElement('a')
    link.href = RESUME_DOWNLOAD_LINK
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'Ashish_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Method 2: Agar direct download fail ho toh new tab mein open karo
    setTimeout(() => {
      window.open(RESUME_DRIVE_LINK, '_blank')
    }, 1000)
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

  return (
    <div className="min-h-screen bg-darker text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-darker/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Ashish Kumar
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                onClick={handleResumeDownload}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Resume
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-gray-300"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-darker/95 backdrop-blur-lg border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <button
                  onClick={() => {
                    handleResumeDownload()
                    setIsMenuOpen(false)
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium"
                >
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
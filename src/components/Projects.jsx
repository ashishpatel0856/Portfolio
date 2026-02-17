import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'ExpenseTracker',
    subtitle: 'Personal Finance Manager',
    description: 'A comprehensive expense tracking application with AI-powered insights and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tech: ['Spring Boot', 'Spring AI', 'React.js', 'JWT', 'PostgreSQL', 'SMTP'],
    features: [
      'JWT-based authentication with role-based access control',
      'AI-powered expense categorization and personalized insights',
      'Interactive analytics dashboard for spending patterns',
      'Automated email notifications for budget alerts',
    ],
    github: 'https://github.com/ashishpatel0856/expenseTracker_backend',
    live: 'https://money-manager-backend-7xc8.onrender.com',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 2,
    title: 'Airbnb Clone',
    subtitle: 'Room Booking Platform',
    description: 'A full-featured room booking platform with AI recommendations and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    tech: ['Spring Boot', 'Spring AI', 'MongoDB', 'Stripe API', 'JWT'],
    features: [
      'Secure Admin and User authentication with JWT',
      'REST APIs for property listings and bookings',
      'AI-powered search and recommendation features',
      'Stripe payment gateway with webhook confirmation',
    ],
    github: 'https://github.com/ashishpatel0856/airBnb',
    live: 'https://airbnb-backend-872m.onrender.com',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 3,
    title: 'QuickDish',
    subtitle: 'Online Food Ordering System',
    description: 'A scalable microservices-based food ordering platform with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
    tech: ['Spring Boot', 'Microservices', 'Google Maps API', 'Stripe', 'Redis', 'PostgreSQL'],
    features: [
      'Scalable microservices architecture',
      'Google Maps API for delivery distance calculation',
      'Redis caching for improved performance',
      'OTP-based email verification system',
    ],
    github: 'https://github.com/ashishpatel0856/QuickDish',
    live: 'https://quickdish.onrender.com',
    color: 'from-orange-500 to-red-600',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden hover-lift cursor-pointer h-full"
                   onClick={() => setSelectedProject(project)}>
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-center text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-center text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-30`} />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.subtitle}</p>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-lg bg-white/5 border border-white/10 text-center font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-center font-medium hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
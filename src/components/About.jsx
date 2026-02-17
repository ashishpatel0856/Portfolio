import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Server } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: Server,
      title: 'Backend Expert',
      description: 'Specialized in Spring Boot, Microservices, and RESTful APIs',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL databases with optimization skills',
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      description: 'Experience with AWS, Docker, Kubernetes, and CI/CD pipelines',
    },
  ]

  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> currently pursuing 
              B.Tech in Computer Science at Ajay Kumar Garg Engineering College with a CGPA of 7.86/10.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With expertise in <span className="text-secondary font-semibold">Spring Boot</span>,{' '}
              <span className="text-accent font-semibold">React.js</span>, and modern web technologies, 
              I build scalable applications that solve real-world problems. My focus is on creating 
              efficient backend systems and intuitive user interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I have solved <span className="text-primary font-semibold">200+ problems on LeetCode</span> and 
              contributed to <span className="text-secondary font-semibold">30+ repositories on GitHub</span> with 
              700+ commits, constantly learning and improving my skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
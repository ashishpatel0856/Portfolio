import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Advanced Spring Boot & Microservices',
    provider: 'CodingShuttle',
    date: '2024',
    skills: ['Spring Boot', 'Microservices', 'Docker','Kubernetes','Kafka','API Gateway','AWS','Redis',],
    color: 'from-emerald-500 to-teal-600',
    link: 'https://drive.google.com/file/d/16IoF-7SqSldyTtWdlIywFJqWiyaxSOF9/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Spring Boot Fundamentals',
    provider: 'CodingShuttle',
    date: '2024',
    skills: ['Spring Boot','REST APIs','JPA', 'Hibernate', 'PostgreSQL', 'Security','JWT Token','oauthlogin','CI/CD','JunitTesting'],
    color: 'from-blue-500 to-cyan-600',
    link: 'https://drive.google.com/file/d/1ShrgjkMqL_BVove5l03hGhynRPoZHPEO/view?usp=sharing',
  },
]

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-darker relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-400">Professional certifications validating my expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Award className="text-white" size={32} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/10">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-4 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  {cert.provider}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Certificate
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Always expanding my knowledge through online courses, documentation, and hands-on projects. 
            Currently exploring advanced microservices patterns and cloud-native development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
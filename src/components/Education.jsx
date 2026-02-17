import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    institution: 'Ajay Kumar Garg Engineering College',
    location: 'Ghaziabad, India',
    period: '2023 – 2027',
    score: 'CGPA: 7.86/10',
    icon: GraduationCap,
    color: 'from-primary to-secondary',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 2,
    degree: 'Intermediate (UP Board)',
    field: 'Science',
    institution: 'BLSS Convent ICV',
    location: 'Prayagraj, India',
    period: '2022',
    score: 'Percentage: 82%',
    icon: Award,
    color: 'from-secondary to-accent',
  },
  {
    id: 3,
    degree: 'High School (UP Board)',
    field: 'General',
    institution: 'Sardar Patel Dr. Abdul Kalam Inter College',
    location: 'Prayagraj, India',
    period: '2020',
    score: 'Percentage: 82%',
    icon: Award,
    color: 'from-accent to-primary',
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-darker relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-400">My academic background and qualifications</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-darker border-4 border-primary z-10 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${edu.color}`} />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div className="glass-card p-6 hover-lift">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} mb-4 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <edu.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.field}</p>
                  
                  <div className={`space-y-2 text-sm text-gray-400 mb-4 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>{edu.institution}</span>
                      <MapPin size={14} />
                    </div>
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>{edu.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className={`inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <span className="text-gradient font-semibold">{edu.score}</span>
                  </div>

                  {edu.coursework && (
                    <div className={`mt-4 pt-4 border-t border-white/10 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-sm text-gray-400 mb-2 font-medium">Relevant Coursework:</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
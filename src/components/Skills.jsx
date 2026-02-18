import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Simple colored placeholder component
const SkillPlaceholder = ({ name, color }) => (
  <div 
    className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-xl"
    style={{ backgroundColor: color }}
  >
    {name[0]}
  </div>
)

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', color: '#f89820' },
      { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', color: '#3776ab' },
      { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', color: '#f7df1e' },
      { name: 'SQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', color: '#336791' },
      { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png', color: '#00599c' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/500px-Spring_Boot.svg.png', color: '#6db33f' },
      { name: 'Spring Framework', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg', color: '#6db33f' },
      { name: 'Hibernate', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Hibernate_logo_a.png', color: '#bcae79' },
      { name: 'Spring AI', icon: 'https://media.licdn.com/dms/image/v2/D4D12AQFVA-eMrxTzQw/article-cover_image-shrink_720_1280/B4DZXbS0oqHAAI-/0/1743140900084', color: '#6db33f' },
      { name: 'REST APIs', icon: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png', color: '#ff6c37' },
      { name: 'Microservices', icon: 'https://cdn-icons-png.flaticon.com/512/2821/2821637.png', color: '#00d4aa' },
      { name: 'JWT Auth', icon: 'https://cdn-icons-png.flaticon.com/512/6001/6001527.png', color: '#d63aff' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', color: '#61dafb' },
      { name: 'HTML5', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', color: '#e34f26' },
      { name: 'CSS3', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', color: '#1572b6' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', color: '#06b6d4' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', color: '#336791' },
      { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', color: '#47a248' },
      { name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', color: '#00758f' },
      { name: 'Neo4j', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png', color: '#008cc1' },
      { name: 'Redis', icon: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg', color: '#dc382d' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png', color: '#2496ed' },
      { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', color: '#326ce5' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', color: '#ff9900' },
      { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', color: '#f05032' },
      { name: 'GitHub', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', color: '#ffffff' },
      { name: 'Kafka', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1200px-Apache_kafka.svg.png', color: '#231f20' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: '#ff6c37' },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [failedImages, setFailedImages] = React.useState(new Set())

  const handleImageError = (skillName) => {
    setFailedImages(prev => new Set(prev).add(skillName))
  }

  return (
    <section id="skills" className="py-20 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skill-card glass-card p-4 flex flex-col items-center gap-3 group cursor-pointer glow-hover"
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-white/10 transition-all overflow-hidden">
                      {failedImages.has(skill.name) ? (
                        <SkillPlaceholder name={skill.name} color={skill.color} />
                      ) : (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(skill.name)}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
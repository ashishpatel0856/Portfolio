import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Trophy, GitBranch, Star, ExternalLink } from 'lucide-react'

const profiles = [
  {
    platform: 'LeetCode',
    icon: Code2,
    stats: '200+ Problems Solved',
    description: 'Consistent problem solving in Data Structures and Algorithms',
    color: 'from-yellow-500 to-orange-600',
    link: 'https://leetcode.com/u/ashish_kum_44/',
    achievements: ['Easy', 'Medium', 'Hard problems across all categories'],
  },
  {
    platform: 'GitHub',
    icon: GitBranch,
    stats: '30+ Repositories, 700+ Commits',
    description: 'Active contributor with diverse project portfolio',
    color: 'from-gray-600 to-gray-800',
    link: 'https://github.com/ashishpatel0856',
    achievements: ['Spring Boot Projects', 'React Applications', 'Microservices'],
  },
  {
    platform: 'HackerRank',
    icon: Trophy,
    stats: 'Multiple Certifications',
    description: 'Certified in Java, Problem Solving, and SQL',
    color: 'from-green-500 to-emerald-600',
    link: 'https://hackerrank.com',
    achievements: ['Java Certification', 'Problem Solving', 'SQL Certification'],
  },
]

const CodingProfile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="coding" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="text-gradient">Profile</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My competitive programming journey and open source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${profile.color}`} />
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <profile.icon className="text-white" size={32} />
                  </div>
                  <motion.a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-bold mb-2">{profile.platform}</h3>
                <p className={`text-lg font-semibold mb-3 bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.stats}
                </p>
                <p className="text-gray-400 mb-6">{profile.description}</p>

                <div className="space-y-2">
                  {profile.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Star size={14} className="text-primary flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Problems Solved', value: '200+', icon: Code2 },
            { label: 'Repositories', value: '30+', icon: GitBranch },
            { label: 'Total Commits', value: '700+', icon: Star },
            { label: 'Certifications', value: '3+', icon: Trophy },
          ].map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 text-center hover-lift">
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfile
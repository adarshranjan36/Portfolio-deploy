import { motion } from 'framer-motion'
import { GraduationCap, Award, Code, Bug } from 'lucide-react'

const About = () => {
  const developerSummary = "Computer Science graduate with strong expertise in full-stack development using MERN stack. Experienced in building modern web applications with React.js, Node.js, and MongoDB. Passionate about creating efficient, scalable solutions and staying updated with latest technologies."

  const testerSummary = "Computer Science graduate with strong knowledge of Software Testing, SDLC, STLC, Test Case Design, Defect Life Cycle, and Bug Reporting. Hands-on experience testing web applications and REST APIs using Postman. Familiar with Jira for issue tracking and project management."

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            <span className="text-gray-500 dark:text-gray-300">About Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate professional with dual expertise in software development and testing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Developer Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <Code className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Software Developer
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {developerSummary}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <span>B.E. CSE from Chitkara University </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Award className="w-5 h-5 text-primary-600" />
                <span>Solved 200+ DSA problems on LeetCode, CodeChef, HackerRank</span>
              </div>
            </div>
          </motion.div>

          {/* Tester Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl">
                <Bug className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Software Tester
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {testerSummary}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 text-secondary-600" />
                <span>B.E. CSE from Chitkara University </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Award className="w-5 h-5 text-secondary-600" />
                <span>Hands-on experience with Jira and Postman</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary-600" />
            Education
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Bachelor of Engineering in Computer Science & Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Chitkara University, Rajpura, Punjab</p>
              </div>
              <div className="text-right">
                {/* <p className="text-primary-600 dark:text-primary-400 font-semibold">CGPA: 7.40 / 7.22</p> */}
                <p className="text-gray-600 dark:text-gray-400">2022 - 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-3">
            <Award className="w-7 h-7 text-secondary-600" />
            Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
              <p className="text-gray-600 dark:text-gray-400">Solved 200+ DSA problems across LeetCode, CodeChef, and HackerRank</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
              <p className="text-gray-600 dark:text-gray-400">Participant - Smart India Hackathon (SIH)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
              <p className="text-gray-600 dark:text-gray-400">Received Appreciation Letter from Chitkara University</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
              <p className="text-gray-600 dark:text-gray-400">API testing experience with Postman for authentication and image generation workflows</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

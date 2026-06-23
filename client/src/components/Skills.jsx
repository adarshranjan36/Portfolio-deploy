import { motion } from 'framer-motion'
import { Code, Bug, Cpu } from 'lucide-react'

const Skills = () => {
  const developerSkills = {
    languages: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
    ],
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'TailwindCSS', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
    databases: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQL', level: 80 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
    ],
  }

  const testerSkills = {
    testing: [
      { name: 'Manual Testing', level: 90 },
      { name: 'Functional Testing', level: 85 },
      { name: 'Regression Testing', level: 85 },
      { name: 'Smoke Testing', level: 90 },
      { name: 'Sanity Testing', level: 85 },
      { name: 'Integration Testing', level: 80 },
      { name: 'Black Box Testing', level: 85 },
      { name: 'API Testing', level: 90 },
    ],
    concepts: [
      { name: 'SDLC', level: 90 },
      { name: 'STLC', level: 90 },
      { name: 'Test Case Design', level: 85 },
      { name: 'Defect Life Cycle', level: 85 },
      { name: 'Bug Reporting', level: 90 },
    ],
    tools: [
      { name: 'Jira', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
    ],
  }

  const SkillBar = ({ name, level, color }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            <span className="text-gray-500 dark:text-gray-300">Technical Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set covering both development and testing domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Developer Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Code className="w-6 h-6 text-primary-600" />
                Software Developer Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Programming Languages</h4>
                  <div className="space-y-3">
                    {developerSkills.languages.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-primary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Frontend</h4>
                  <div className="space-y-3">
                    {developerSkills.frontend.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-primary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Backend</h4>
                  <div className="space-y-3">
                    {developerSkills.backend.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-primary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Databases</h4>
                  <div className="space-y-3">
                    {developerSkills.databases.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-primary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Tools</h4>
                  <div className="space-y-3">
                    {developerSkills.tools.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-primary-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tester Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Bug className="w-6 h-6 text-secondary-600" />
                Software Tester Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Testing Types</h4>
                  <div className="space-y-3">
                    {testerSkills.testing.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-secondary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Testing Concepts</h4>
                  <div className="space-y-3">
                    {testerSkills.concepts.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-secondary-500" />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Testing Tools</h4>
                  <div className="space-y-3">
                    {testerSkills.tools.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color="bg-secondary-500" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core CS Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary-600" />
                Core Computer Science
              </h3>
              <div className="flex flex-wrap gap-3">
                {['DBMS', 'OOP', 'Operating Systems', 'Computer Networks'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

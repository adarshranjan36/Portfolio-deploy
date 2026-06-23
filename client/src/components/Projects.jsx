import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Home, Mic } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Imagify – AI Image Generation Web Application',
      description: 'Developed a full-stack AI image generation platform using React.js, Node.js, and MongoDB. Performed comprehensive API testing using Postman for Login, Signup, Authentication, Credit Purchase, and Image Generation APIs. Integrated ClipDrop API to dynamically generate AI images from user prompts.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'ClipDrop API', 'Postman'],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      developer: true,
      tester: true,
    },
    {
      title: 'HomeScout – Rental Home Services Platform',
      description: 'Built a full-stack platform for rental listings and home service providers. Designed and executed test scenarios for search, filtering, reviews, ratings, and user interactions. Implemented backend-powered dynamic search and filtering based on user inputs.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      icon: <Home className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      developer: true,
      tester: true,
    },
    {
      title: 'Jarvis – AI Powered Voice Assistant',
      description: 'Developed a Python voice assistant to execute system commands and web searches. Tested speech-to-text and text-to-speech functionalities using positive and negative test scenarios. Integrated Hugging Face NLP APIs for intelligent response generation.',
      technologies: ['Python', 'NLP', 'Hugging Face API', 'Speech Recognition'],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      developer: true,
      tester: true,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            <span className="text-gray-500 dark:text-gray-300">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my work demonstrating both development and testing expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="section-card overflow-hidden"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.developer && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        Developer
                      </span>
                    )}
                    {project.tester && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        Tester
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Development & Testing Approach
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary-600 mb-2">Development Focus</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  Full-stack MERN development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  RESTful API design and implementation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  Modern UI with React and TailwindCSS
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  Database design with MongoDB and MySQL
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-600 mb-2">Testing Focus</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2" />
                  Comprehensive API testing with Postman
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2" />
                  Test case design and execution
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2" />
                  Bug reporting and defect tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2" />
                  Issue tracking with Jira
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react'
import ParticlesBackground from './ParticlesBackground'

const Hero = ({ darkMode }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900" />
      <ParticlesBackground darkMode={darkMode} />

      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl dark:bg-secondary-500/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left — content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 space-y-8 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/60 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm backdrop-blur-md dark:border-primary-800/40 dark:bg-gray-800/60 dark:text-primary-300"
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            Available for opportunities
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-medium tracking-wide text-gray-500 dark:text-gray-400"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-gray-500 dark:text-gray-300">Adarsh Ranjan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300 lg:mx-0 lg:text-xl"
            >
              Transforming ideas into robust, scalable applications with a focus on quality and user experience.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="role-badge role-badge-dev">💻 Software Developer</span>
            <span className="role-badge role-badge-test">🧪 Software Tester</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 lg:justify-start"
          >
            <a
              href="mailto:adarshranjan633@gmail.com"
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/60 hover:text-primary-600 dark:hover:bg-gray-800/60"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">adarshranjan633@gmail.com</span>
            </a>
            <a
              href="tel:+918102302229"
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/60 hover:text-primary-600 dark:hover:bg-gray-800/60"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91-8102302229</span>
            </a>
            <div className="flex items-center gap-2 px-3 py-2">
              <MapPin className="h-4 w-4" />
              <span>Noida, UP</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="https://github.com/adarshranjan36"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/imadarshhh/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-primary ml-2">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="profile-ring">
            <div className="profile-ring-inner">
             {!imageLoaded && (
                <div className="h-full w-full rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}
              <img
                src="/images/profile.png"
                alt="Adarsh Ranjan"
                className={`h-full w-full rounded-full object-cover object-top transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full border border-dashed border-primary-400/40 dark:border-primary-500/30"
            />
            {/* <div className="absolute -bottom-2 -left-2 rounded-2xl glass-card px-4 py-3 shadow-xl">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Based in</p>
              <p className="font-bold text-gray-800 dark:text-gray-100">Noida, India</p>
            </div> */}
            {/* <div className="absolute -right-20 top-3 rounded-2xl glass-card px-4 py-3 shadow-xl">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Experience</p>
              <p className="font-bold text-primary-600 dark:text-primary-400">MERN + QA</p>
            </div> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="rounded-full border border-gray-200/60 bg-white/70 p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary-400 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800/70"
          aria-label="Scroll to about"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero

import { useMemo } from 'react'
import Particles from '@tsparticles/react'

const ParticlesBackground = ({ darkMode }) => {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.6 },
          },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: {
          value: darkMode ? ['#7dd3fc', '#e879f9', '#fbbf24'] : ['#0284c7', '#c026d3', '#d97706'],
        },
        links: {
          color: darkMode ? '#7dd3fc' : '#0284c7',
          distance: 140,
          enable: true,
          opacity: darkMode ? 0.25 : 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1.2 },
          direction: 'none',
          random: true,
          outModes: { default: 'bounce' },
        },
        number: {
          density: { enable: true, width: 900, height: 900 },
          value: 70,
        },
        opacity: {
          value: { min: 0.2, max: 0.7 },
          animation: { enable: true, speed: 0.8, sync: false },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1, max: 3.5 },
          animation: { enable: true, speed: 2, sync: false },
        },
      },
    }),
    [darkMode]
  )

  return (
    <Particles
      id="portfolio-particles"
      className="absolute inset-0 -z-10 h-full w-full"
      options={options}
    />
  )
}

export default ParticlesBackground

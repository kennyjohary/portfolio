'use client'
import { useEffect, useRef } from 'react'
import { 
  SiPython, SiNextdotjs, SiReact, SiTypescript, 
  SiPostgresql, SiDocker, SiGit, SiNodedotjs,
  SiTailwindcss, SiPhp, SiFlutter, SiLinux,
  SiJavascript, SiOdoo
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'

const techIcons = [
  { icon: SiPython, color: '#3776AB', name: 'Python' },
  { icon: SiOdoo, color: '#714B67', name: 'Odoo' },
  { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
  { icon: SiReact, color: '#61DAFB', name: 'React' },
  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { icon: SiGit, color: '#F05032', name: 'Git' },
  { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  { icon: DiJava, color: '#007396', name: 'Java' },
  { icon: SiPhp, color: '#777BB4', name: 'PHP' },
  { icon: SiFlutter, color: '#02569B', name: 'Flutter' },
  { icon: SiLinux, color: '#FCC624', name: 'Linux' },
  { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
]

export default function FloatingTech() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const items = container.querySelectorAll('.tech-icon')
    
    items.forEach((item, i) => {
      const el = item as HTMLElement
      const duration = 25 + (i % 20)
      const delay = (i * 0.3) % 15
      el.style.animation = `float ${duration}s linear infinite`
      el.style.animationDelay = `${delay}s`
    })
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .tech-icon {
          position: absolute;
          will-change: transform;
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
        }
      `}</style>
      
      {techIcons.map((tech, i) => {
        const IconComponent = tech.icon
        const size = 35 + (i % 4) * 10
        return (
          <div
            key={i}
            className="tech-icon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${20 + (i % 15)}s`,
              animationDelay: `${(i * 0.5) % 20}s`
            }}
          >
            <IconComponent 
              style={{ color: tech.color }} 
              className="opacity-60 hover:opacity-90 transition-opacity"
              size={size}
            />
          </div>
        )
      })}
    </div>
  )
}
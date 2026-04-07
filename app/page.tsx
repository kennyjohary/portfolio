'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FloatingTech from './components/floatingtech'
import { FadeInUp, ScaleOnHover, StaggerContainer, StaggerItem } from './components/motionwrapper'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <main className="min-h-screen relative">
      <FloatingTech />
      <Navbar />
      <Hero />

      <section className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
             ⚡<span className="gradient-text"> Compétences techniques</span>
            </h2>
          </FadeInUp>
          <StaggerContainer>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {['Ruby on Rails', 'Python', 'Odoo', 'PostgreSQL', 'Mongo DB', 'Java', 'Node.js / React', 'Next.js', 'TypeScript', 'Git', 'Docker', 'Linux', 'Angular', 'ETL'].map((skill) => (
                <StaggerItem key={skill}>
                  <span className="card-hover px-4 py-2 rounded-full glass hover:border-white-500 cursor-default inline-block text-white-700 dark:text-black-200">
                    {skill}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section id="experiences" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              💼<span className="gradient-text"> Expériences professionnelles</span>
            </h2>
          </FadeInUp>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { date: 'Sept 2025 - Aujourd\'hui', title: 'Développeur Backend Junior', desc: 'Back-office CRUD, ETL, tests à 90%, réduction support -50%' },
              { date: 'Janv 2025 - Juil 2025', title: 'Stage Python Odoo - Ingenosya', desc: 'Développement modules Odoo, documentation technique' },
              { date: 'Août 2024 - Oct 2024', title: 'Stage Python Data - R@ndevTeam', desc: 'Système autonome acquisition/analyse de contenus sociaux' }
            ].map((exp, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="card-hover glass rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{exp.date}</div>
                  <h3 className="text-xl font-semibold text-white-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              🚀<span className="gradient-text"> Projets récents</span>
            </h2>
          </FadeInUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'ETL Multi-connecteurs', tech: 'Ruby on Rails, FTP, PostgreSQL', desc: '30+ connecteurs, réduction support -50%\nProjet : Sowell et Sowell+' },
              { title: 'Back-office CRUD', tech: 'Ruby on Rails', desc: 'Dashboard admin, 90% tests coverage\nProjet : Sowell et Sowell+' },
              { title: 'Customisation Odoo', tech: 'Python, Odoo, XML', desc: 'Modules RH, MRP, Vente & Achat, Inventaire\nProjet : MIM et Clinique NOA'
               }
            ].map((project, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="card-hover glass rounded-xl p-6 h-full hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">{project.tech}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 whitespace-pre-line">
                    {project.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto text-center max-w-2xl">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              📬<span className="gradient-text"> Me contacter</span>
            </h2>
            <div className="glass rounded-xl p-8 space-y-4">
              <p className="text-gray-600 dark:text-gray-300">Intéressé par mon profil ?</p>
              <a 
                href="mailto:kennyjoharyl@gmail.com" 
                className="btn-press inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                kennyjoharyl@gmail.com
              </a>
              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-sm text-black-500 dark:text-gray-400">
                  ↘️ Réseaux sociaux ↙️
                </p>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://github.com/kennyjohary" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="Lien GitHub"
                  >
                    <svg className="w-6 h-6 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kenny-randria" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>

                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 pt-4">
                <p>📞 +261 34 27 884 73</p>
                <p>📍 Ivato aéroport, Madagascar</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
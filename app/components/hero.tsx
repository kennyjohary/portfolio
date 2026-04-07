'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center space-y-6 z-10 max-w-4xl mx-auto">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-60 blur-xl group-hover:opacity-100 transition" />
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
              <Image
                src="/ken.png"
                alt="Kenny Johary"
                width={256}
                height={256}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        <div className="glass px-4 py-2 rounded-full text-sm text-violet-600 dark:text-blue-400 inline-block">
          🚀 Développeur Fullstack
        </div>

        <h1 id="hero-name" className="text-5xl md:text-7xl font-bold">
          <span className="text-gray-800 dark:text-white">Kenny Johary</span>
          <br />
          <span className="gradient-text">
            RANDRIA HARISON
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Backend • Specialist
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#experiences" 
            className="btn-press px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Voir mon parcours
          </a>
          <a 
            href="#contact" 
            className="btn-press px-6 py-3 glass text-gray-700 dark:text-gray-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors inline-block"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  )
}
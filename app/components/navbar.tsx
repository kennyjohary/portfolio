'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ThemeProvider from './themetoggle'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showName, setShowName] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowName(scrollY > heroBottom - 120)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getNavbarStyle = () => {
    if (!mounted) return 'bg-white shadow-lg py-2'
    
    if (scrolled) {
      return theme === 'dark' 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 py-2'
        : 'bg-white shadow-lg border-b border-gray-200 py-2'
    } else {
      return theme === 'dark'
        ? 'bg-gray-900/50 backdrop-blur-sm py-3'
        : 'bg-white/80 backdrop-blur-sm py-3'
    }
  }

  const getTextStyle = () => {
    return theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
  }

  if (!mounted) return null

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${getNavbarStyle()}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`relative w-10 h-10 rounded-full overflow-hidden transition-all duration-500 ${
              showName ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              <Image
                src="/ken.png"
                alt="KJ"
                fill
                className="object-cover object-center"
                sizes="40px"
              />
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${
              showName ? 'max-w-64 opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-4'
            }`}>
              <span className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} whitespace-nowrap`}>
                Kenny Johary
              </span>
            </div>
            
            <span className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ${
              showName ? 'hidden' : 'block'
            }`}>
              KJ.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`${getTextStyle()} transition-colors cursor-pointer text-sm font-medium`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <ThemeProvider />
          </div>
        </div>
      </div>
    </nav>
  )
}
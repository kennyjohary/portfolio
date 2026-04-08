'use client'
import { useLanguage } from '../contexts/languagecontext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex gap-1 glass rounded-full p-1">
      <button
        onClick={() => setLocale('fr')}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          locale === 'fr' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        🇫🇷 FR
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          locale === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  )
}
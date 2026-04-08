"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const translations = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.experiences": "Expériences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Développeur Fullstack",
    "hero.subtitle": "Spécialiste • Backend",
    "hero.button1": "Voir mon parcours",
    "hero.button2": "Me contacter",

    // Skills
    "skills.title": "Compétences techniques",
    "skills.items": [
      "Ruby on Rails",
      "Python",
      "Odoo",
      "PostgreSQL",
      "Mongo DB",
      "Java",
      "Node.js / React",
      "Next.js",
      "TypeScript",
      "Git",
      "Docker",
      "Linux",
      "Angular",
      "ETL",
    ],

    // Experiences
    "experiences.title": "Expériences professionnelles",
    "exp1.date": "Sept 2025 - Aujourd'hui",
    "exp1.title": "Développeur Backend Junior",
    "exp1.desc": "Back-office CRUD, ETL, tests à 90%, réduction support -50%",
    "exp2.date": "Janv 2025 - Juil 2025",
    "exp2.title": "Stage Python Odoo - Ingenosya",
    "exp2.desc": "Développement modules Odoo, documentation technique",
    "exp3.date": "Août 2024 - Oct 2024",
    "exp3.title": "Stage Python Data - R@ndevTeam",
    "exp3.desc": "Système autonome acquisition/analyse de contenus sociaux",

    // Projects
    "projects.title": "Projets récents",
    "project1.title": "ETL Multi-connecteurs",
    "project1.tech": "Ruby on Rails, FTP, Kiba-jobs",
    "project1.desc":
      "30+ connecteurs, réduction support -50%\nProjet : Sowell et Sowell+",

    "project2.title": "Back-office CRUD",
    "project2.tech": "Ruby on Rails, PostgreSQL",
    "project2.desc":
      "Dashboard admin, 90% tests coverage\nProjet : Sowell et Sowell+",

    "project3.title": "Application Centre commercial",
    "project3.tech": "Angular, MongoDB, Typescript",
    "project3.desc":
      "Gestion des boutiques, produits et commandes, tests et CRUD\nProjet : Mean IT University",

    "project4.title": "Customisation Odoo",
    "project4.tech": "Python, Odoo, XML",
    "project4.desc":
      "Modules RH, MRP, Vente & Achat, Inventaire\nProjet : MIM et Clinique NOA",

    "project5.title": "Data scientist",
    "project5.tech": "Python, Firebase, Pandas",
    "project5.desc":
      "Scrapping de données, analyse et visualisation\nProjet : R@ndevTeam",

    "project6.title": "Application de Gestion",
    "project6.tech": "JAVA, Spring boot, PostgreSQL, Thymeleaf",
    "project6.desc":
      "Gestion des étudiants, des sécurités et formulaires \nProjet : HEI",

    // Contact
    "contact.title": "Me contacter",
    "contact.text": "Intéressé par mon profil ?",
    "contact.email": "kennyjoharyl@gmail.com",
    "contact.link": "Lien linkedin et des githubs",
    "contact.phone": "📞 +261 34 27 884 73",
    "contact.location": "📍 Ivato aéroport, Madagascar",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.experiences": "Experiences",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Fullstack Developer",
    "hero.subtitle": "Backend • Specialist",
    "hero.button1": "See my background",
    "hero.button2": "Contact me",

    // Skills
    "skills.title": "Technical Skills",
    "skills.items": [
      "Ruby on Rails",
      "Python",
      "Odoo",
      "PostgreSQL",
      "Mongo DB",
      "Java",
      "Node.js / React",
      "Next.js",
      "TypeScript",
      "Git",
      "Docker",
      "Linux",
      "Angular",
      "ETL",
    ],

    // Experiences
    "experiences.title": "Professional Experiences",
    "exp1.date": "Sep 2025 - Present",
    "exp1.title": "Junior Backend Developer",
    "exp1.desc":
      "Back-office CRUD, ETL, 90% test coverage, -50% support reduction",
    "exp2.date": "Jan 2025 - Jul 2025",
    "exp2.title": "Python Odoo Intern - Ingenosya",
    "exp2.desc": "Odoo module development, technical documentation",
    "exp3.date": "Aug 2024 - Oct 2024",
    "exp3.title": "Python Data Intern - R@ndevTeam",
    "exp3.desc": "Autonomous system for social content acquisition/analysis",

    // Projects
    "projects.title": "Recent Projects",

    "project1.title": "Multi-connector ETL",
    "project1.tech": "Ruby on Rails, FTP, Kiba-jobs",
    "project1.desc":
      "30+ connectors, -50% support reduction\nProject: Sowell & Sowell+",

    "project2.title": "Back-office CRUD",
    "project2.tech": "Ruby on Rails, PostgreSQL",
    "project2.desc":
      "Admin dashboard, 90% test coverage\nProject: Sowell & Sowell+",

    "project3.title": "Shopping Mall Application",
    "project3.tech": "Angular, MongoDB, Typescript",
    "project3.desc":
      "Shop, product, and order management, tests & CRUD\nProject: Mean IT University",

    "project4.title": "Odoo Customization",
    "project4.tech": "Python, Odoo, XML",
    "project4.desc":
      "HR, MRP, Sales & Purchase, Inventory modules\nProject: MIM & Clinique NOA",

    "project5.title": "Data Science",
    "project5.tech": "Python, Firebase, Pandas",
    "project5.desc":
      "Data scraping, analysis, and visualization\nProject: R@ndevTeam",

    "project6.title": "Student Management Application",
    "project6.tech": "Java, Spring Boot, PostgreSQL, Thymeleaf",
    "project6.desc": "Student, security, and form management\nProject: HEI",

    // Contact
    "contact.title": "Contact me",
    "contact.text": "Interested in my profile?",
    "contact.email": "kennyjoharyl@gmail.com",
    "contact.link": "Link linkedin and github",
    "contact.phone": "📞 +261 34 27 884 73",
    "contact.location": "📍 Ivato airport, Madagascar",
  },
};

type Locale = "fr" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "fr" || savedLocale === "en")) {
      setLocale(savedLocale);
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string => {
    const value =
      translations[locale][key as keyof (typeof translations)["fr"]];
    if (typeof value === "string") return value;
    return key;
  };

  const tArray = (key: string): string[] => {
    const value =
      translations[locale][key as keyof (typeof translations)["fr"]];
    if (Array.isArray(value)) return value;
    return [];
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: handleSetLocale, t, tArray }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

"use client";
import { useLanguage } from "./contexts/languagecontext";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FloatingTech from "./components/floatingtech";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "./components/motionwrapper";

export default function HomeContent() {
  const { t, tArray } = useLanguage();

  const skills = tArray("skills.items");
  const experiences = [
    { date: t("exp1.date"), title: t("exp1.title"), desc: t("exp1.desc") },
    { date: t("exp2.date"), title: t("exp2.title"), desc: t("exp2.desc") },
    { date: t("exp3.date"), title: t("exp3.title"), desc: t("exp3.desc") },
  ];
  const projects = [
    {
      title: t("project1.title"),
      tech: t("project1.tech"),
      desc: t("project1.desc"),
    },
    {
      title: t("project2.title"),
      tech: t("project2.tech"),
      desc: t("project2.desc"),
    },
    {
      title: t("project3.title"),
      tech: t("project3.tech"),
      desc: t("project3.desc"),
    },
    {
      title: t("project4.title"),
      tech: t("project4.tech"),
      desc: t("project4.desc"),
    },
    {
      title: t("project5.title"),
      tech: t("project5.tech"),
      desc: t("project5.desc"),
    },
    {
      title: t("project6.title"),
      tech: t("project6.tech"),
      desc: t("project6.desc"),
    },
  ];

  return (
    <main className="min-h-screen relative">
      <FloatingTech />
      <Navbar />
      <Hero />

      <section className="py-20 px-4 scroll-mt-20">
        <div className="container mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              ⚡<span className="gradient-text">{t("skills.title")}</span>
            </h2>
          </FadeInUp>
          <StaggerContainer>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {skills.map((skill) => (
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
              💼 <span className="gradient-text">{t("experiences.title")}</span>
            </h2>
          </FadeInUp>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="card-hover glass rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font-semibold text-white-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {exp.desc}
                  </p>
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
              🚀 <span className="gradient-text">{t("projects.title")}</span>
            </h2>
          </FadeInUp>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="card-hover glass rounded-xl p-6 h-full hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">
                    {project.tech}
                  </p>
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
              📬 <span className="gradient-text"> {t("contact.title")}</span>
            </h2>
            <div className="glass rounded-xl p-8 space-y-4">
              <p className="text-black-700 dark:text-gray-300">
                {t("contact.text")}
              </p>
              <a
                href="mailto:kennyjoharyl@gmail.com"
                className="btn-press inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                {t("contact.email")}
              </a>
              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-sm text-black-500 dark:text-gray-400">
                  ↘️ {t("contact.link")} ↙️
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://github.com/kenny-sowell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="Lien GitHub"
                  >
                    <svg
                      className="w-6 h-6 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kenny-randria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/kennyjohary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="Lien GitHub 2"
                  >
                    <svg
                      className="w-6 h-6 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/KennyRandria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press p-3 glass rounded-full hover:border-blue-500 transition-all hover:scale-110"
                    aria-label="Lien GitHub 3"
                  >
                    <svg
                      className="w-6 h-6 dark:"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 pt-4">
                <p>{t("contact.phone")}</p>
                <p>{t("contact.location")}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}

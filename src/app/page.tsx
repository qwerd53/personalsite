"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  awards,
  contactLinks,
  navigation,
  profile,
  projectItems,
  researchItems,
  timelineItems,
  ui,
} from "@/content/siteData";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import RevealSection from "@/components/RevealSection";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  const { lang } = useLanguage();
  const featuredResearch = researchItems[0];

  return (
    <main className={styles.page}>
      <header className={styles.navbar}>
        <a className={styles.wordmark} href="#top">
          {t(profile.name, lang)}
        </a>
        <div className={styles.navbarRight}>
          <nav className={styles.nav} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {t(item.label, lang)}
              </a>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{t(ui.heroEyebrow, lang)}</p>
          <h1>{t(profile.name, lang)}</h1>
          <div className={styles.heroRule} />
          <p className={styles.headline}>{t(profile.headline, lang)}</p>
          <p className={styles.lead}>{t(profile.intro, lang)}</p>
          <p className={styles.supporting}>{t(profile.secondary, lang)}</p>

          <div className={styles.ctas}>
            <a className={styles.ctaLink} href="#research">
              {t(ui.viewResearch, lang)}
            </a>
            <a
              className={styles.ctaLinkSecondary}
              href="/assets/dongyang-wang-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t(ui.downloadCV, lang)}
            </a>
            <a className={styles.ctaLinkSecondary} href="#contact">
              {t(ui.getInTouch, lang)}
            </a>
          </div>

          <dl className={styles.statsGrid}>
            {profile.stats.map((stat) => (
              <div key={t(stat.label, lang)} className={styles.statCard}>
                <dt>{t(stat.label, lang)}</dt>
                <dd>{t(stat.value, lang)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/assets/hero-sky.jpg"
                alt="Dongyang Wang standing outdoors against an open sky."
                fill
                priority
                sizes="(max-width: 900px) 100vw, 44vw"
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroMeta}>
              <div>
                <span>{t(ui.heroLocation, lang)}</span>
                <strong>{t(profile.location, lang)}</strong>
              </div>
              <div>
                <span>{t(ui.heroAvailability, lang)}</span>
                <strong>{t(profile.availability, lang)}</strong>
              </div>
              <div>
                <span>{t(ui.heroContact, lang)}</span>
                <strong>{profile.email}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <RevealSection delay={100}>
        <section className={styles.section} id="research">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionTag}>{t(ui.sectionTagResearch, lang)}</p>
            <div className={styles.sectionRule} />
            <h2>{t(ui.researchHeading, lang)}</h2>
            <p>{t(ui.researchIntro, lang)}</p>
          </div>

          <article className={styles.researchCard}>
            <div className={styles.researchHeader}>
              <div>
                <span className={styles.badge}>{t(featuredResearch.status, lang)}</span>
                <h3>{t(featuredResearch.title, lang)}</h3>
              </div>
              <p>{t(featuredResearch.period, lang)}</p>
            </div>

            <div className={styles.metricStrip}>
              {featuredResearch.metrics.map((metric) => (
                <div key={t(metric.label, lang)} className={styles.metricCard}>
                  <span>{t(metric.label, lang)}</span>
                  <strong>{t(metric.value, lang)}</strong>
                </div>
              ))}
            </div>

            <div className={styles.researchBody}>
              <div className={styles.copyBlock}>
                <h4>{t(ui.researchFrame, lang)}</h4>
                <p>{t(featuredResearch.summary, lang)}</p>
                <p>{t(featuredResearch.challenge, lang)}</p>
              </div>
              <div className={styles.copyBlock}>
                <h4>{t(ui.researchMethod, lang)}</h4>
                <p>{t(featuredResearch.method, lang)}</p>
              </div>
              <div className={styles.copyBlock}>
                <h4>{t(ui.researchValidation, lang)}</h4>
                <p>{t(featuredResearch.validation, lang)}</p>
              </div>
            </div>

            <div className={styles.stackRow}>
              {featuredResearch.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>
      </RevealSection>

      {/* Projects */}
      <RevealSection delay={200}>
        <section className={styles.section} id="projects">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionTag}>{t(ui.sectionTagProjects, lang)}</p>
            <div className={styles.sectionRule} />
            <h2>{t(ui.projectsHeading, lang)}</h2>
            <p>{t(ui.projectsIntro, lang)}</p>
          </div>

          <div className={styles.projectGrid}>
            {projectItems.map((project) => (
              <article key={t(project.title, lang)} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <p>{t(project.role, lang)}</p>
                  <span>{t(project.period, lang)}</span>
                </div>
                <h3>{t(project.title, lang)}</h3>
                <p>{t(project.summary, lang)}</p>
                <p className={styles.projectImpact}>{t(project.impact, lang)}</p>
                <div className={styles.stackRow}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* About */}
      <RevealSection delay={150}>
        <section className={`${styles.section} ${styles.aboutSection}`} id="about">
          <div className={styles.aboutVisual}>
            <div className={styles.editorialFrame}>
              <Image
                src="/assets/profile-side.jpg"
                alt="Side profile portrait of Dongyang Wang."
                fill
                sizes="(max-width: 900px) 100vw, 36vw"
                loading="lazy"
                className={styles.editorialImage}
              />
            </div>
          </div>

          <div className={styles.aboutCopy}>
            <p className={styles.sectionTag}>{t(ui.sectionTagAbout, lang)}</p>
            <div className={styles.sectionRule} />
            <h2>{t(ui.aboutHeading, lang)}</h2>
            <p>{t(ui.aboutP1, lang)}</p>
            <p>{t(ui.aboutP2, lang)}</p>
            <p>{t(ui.aboutP3, lang)}</p>
          </div>
        </section>
      </RevealSection>

      {/* Honors */}
      <RevealSection delay={250}>
        <section className={styles.section} id="honors">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionTag}>{t(ui.sectionTagHonors, lang)}</p>
            <div className={styles.sectionRule} />
            <h2>{t(ui.honorsHeading, lang)}</h2>
          </div>

          <div className={styles.dualColumn}>
            <div className={styles.timeline}>
              {timelineItems.map((item) => (
                <article key={t(item.label, lang)} className={styles.timelineItem}>
                  <h3>{t(item.label, lang)}</h3>
                  <p>{t(item.detail, lang)}</p>
                </article>
              ))}
            </div>

            <div className={styles.awardsPanel}>
              <h3>{t(ui.highlights, lang)}</h3>
              <ul>
                {awards.map((award) => (
                  <li key={t(award, lang)}>{t(award, lang)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Contact */}
      <RevealSection delay={300}>
        <section className={styles.section} id="contact">
          <div className={styles.contactPanel}>
            <div>
              <p className={styles.sectionTag}>{t(ui.sectionTagContact, lang)}</p>
              <div className={styles.sectionRule} />
              <h2>{t(ui.contactHeading, lang)}</h2>
              <p>{t(ui.contactIntro, lang)}</p>
            </div>

            <div className={styles.linksGrid}>
              {contactLinks.map((link) =>
                link.placeholder ? (
                  <div
                    key={t(link.label, lang)}
                    className={`${styles.linkCard} ${styles.linkCardMuted}`}
                  >
                    <span>{t(link.label, lang)}</span>
                    <strong>{t(ui.availableSoon, lang)}</strong>
                  </div>
                ) : (
                  <a
                    key={t(link.label, lang)}
                    href={link.href}
                    className={styles.linkCard}
                    target={link.href?.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    <span>{t(link.label, lang)}</span>
                    <strong>
                      {link.href?.startsWith("mailto:")
                        ? profile.email
                        : t(ui.downloadPDF, lang)}
                    </strong>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a
            className={styles.wordmark}
            href="#top"
            aria-label={t(ui.backToTop, lang)}
          >
            {t(profile.name, lang)}
          </a>
          <p>
            &copy; {new Date().getFullYear()} {t(profile.name, lang)}.{" "}
            {t(ui.copyright, lang)}
          </p>
          <p className={styles.footerNote}>{t(ui.footerNote, lang)}</p>
        </div>
      </footer>
    </main>
  );
}

"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Chinese" : "切换到英文"}
    >
      <span className={lang === "en" ? styles.active : styles.inactive}>EN</span>
      <span className={styles.divider}>|</span>
      <span className={lang === "zh" ? styles.active : styles.inactive}>中文</span>
    </button>
  );
}

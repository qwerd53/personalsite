export type Bilingual = { en: string; zh: string };

export function t(text: Bilingual, lang: "en" | "zh"): string {
  return text[lang];
}

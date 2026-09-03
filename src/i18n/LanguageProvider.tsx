import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Dict, Lang } from './types'
import { en } from './en'
import { ja } from './ja'

const dicts: Record<Lang, Dict> = { en, ja }
const STORAGE_KEY = 'rika-portfolio-lang'

function readInitialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ja') return saved
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('ja')) {
    return 'ja'
  }
  return 'en'
}

interface LanguageValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang)
  const t = dicts[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore write failures
    }
  }, [lang, t])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

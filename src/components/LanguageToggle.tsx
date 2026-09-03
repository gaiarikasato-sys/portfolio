import { useLang } from '../i18n/LanguageProvider'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="lang-toggle" role="group" aria-label={t.langGroupLabel}>
      <button
        type="button"
        className="lang-toggle__btn"
        lang="en"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className="lang-toggle__btn"
        lang="ja"
        aria-pressed={lang === 'ja'}
        onClick={() => setLang('ja')}
      >
        日本語
      </button>
    </div>
  )
}

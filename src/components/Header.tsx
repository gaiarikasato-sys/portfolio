import { useLang } from '../i18n/LanguageProvider'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const { t } = useLang()

  return (
    <header className="site-header">
      <span className="site-header__name">{t.siteName}</span>
      <div className="site-header__right">
        <nav className="site-header__nav">
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}

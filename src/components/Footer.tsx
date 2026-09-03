import { useLang } from '../i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <span>
        © {year} {t.footer.copyright}
      </span>
      <span>
        <a href="mailto:gaia.rika.sato@gmail.com">gaia.rika.sato@gmail.com</a>
        {' / '}
        <a href="https://github.com/gaiarikasato-sys" target="_blank" rel="noreferrer">
          github.com/gaiarikasato-sys
        </a>
      </span>
    </footer>
  )
}

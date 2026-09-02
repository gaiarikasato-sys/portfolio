export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <span>© {year} Rika Sato</span>
      <span>
        {/* TODO: replace with your real contact details */}
        <a href="mailto:your-email@example.com">your-email@example.com</a>
        {' / '}
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
          github.com/your-username
        </a>
      </span>
    </footer>
  )
}

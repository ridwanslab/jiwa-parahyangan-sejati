import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/shipping', label: 'Shipping' },
  { to: '/quote', label: 'Request a quote' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="images/logo-icon-jiwa-parahyangan-256.png"
              alt="PT Jiwa Parahyangan Sejati logo"
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-medium tracking-tight">Jiwa Parahyangan Sejati</span>
          </Link>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <span>© 2026 PT Jiwa Parahyangan Sejati</span>
          <span>Premium Indonesian spice &amp; herbal exports</span>
        </div>
      </div>
    </footer>
  )
}

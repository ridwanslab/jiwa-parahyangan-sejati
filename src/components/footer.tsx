const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#produk', label: 'Produk' },
  { href: '#proses', label: 'Proses' },
  { href: '#kontak', label: 'Kontak' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <a href="#beranda" className="flex items-center gap-2.5">
            <img
              src="images/logo-icon-jiwa-parahyangan-256.png"
              alt="Logo PT Jiwa Parahyangan Sejati"
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-medium tracking-tight">Jiwa Parahyangan Sejati</span>
          </a>
          <nav aria-label="Navigasi footer">
            <ul className="flex flex-wrap gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
          <span>© 2026 PT Jiwa Parahyangan Sejati</span>
          <span>Ekspor rempah &amp; herbal premium Indonesia</span>
        </div>
      </div>
    </footer>
  )
}

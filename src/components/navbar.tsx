import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { href: '#tentang', label: 'About' },
  { href: '#keunggulan', label: 'Why us' },
  { href: '#produk', label: 'Products' },
  { href: '#shipping', label: 'Shipping' },
  { href: '#kontak', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled ? 'border-border bg-background/95 backdrop-blur-md' : 'border-transparent bg-background'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#beranda" className="flex items-center gap-2.5">
          <img
            src="images/logo-icon-jiwa-parahyangan-256.png"
            alt="PT Jiwa Parahyangan Sejati logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-[15px] font-medium tracking-tight">Jiwa Parahyangan Sejati</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#kontak">Request a quote</a>
          </Button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-border bg-background md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 w-full">
              <a href="#kontak" onClick={() => setOpen(false)}>
                Request a quote
              </a>
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

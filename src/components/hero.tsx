import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Sprout, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = [
  { icon: MapPin, text: 'Bogor, West Java — Indonesia' },
  { icon: Sprout, text: 'Direct farmer partnerships' },
  { icon: BadgeCheck, text: 'Traceable · fair trade' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  })

  return (
    <section id="beranda" className="relative overflow-hidden border-b border-border">
      {/* dekorasi lembut */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-primary/5 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-14">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Indonesian spice &amp; herbal exporter
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            The soul of the Parahyangan highlands, <em className="text-primary not-italic">in every spice</em>.
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-5 max-w-[54ch] text-lg font-light text-muted-foreground">
            PT Jiwa Parahyangan Sejati supplies premium Indonesian spices and herbal botanicals
            to international markets — sourced directly from farmers in West Java,
            from harvest to export-ready packing.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#produk">Browse our spices</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#kontak">Request a quote</a>
            </Button>
          </motion.div>
          <motion.div
            {...fade(0.32)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground"
          >
            {meta.map((m) => (
              <span key={m.text} className="inline-flex items-center gap-1.5">
                <m.icon className="h-3.5 w-3.5 text-primary" />
                {m.text}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <img
            src="images/hero-spices.jpg"
            alt="Premium Indonesian spices"
            className="aspect-[4/3.4] w-full rounded-lg object-cover shadow-[rgba(184,80,14,0.16)_0px_30px_45px_-30px,rgba(0,0,0,0.10)_0px_18px_36px_-18px]"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-md border border-border bg-background/95 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            Hand-selected · West Java
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

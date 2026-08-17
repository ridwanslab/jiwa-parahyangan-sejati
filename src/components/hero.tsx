import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Leaf, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = [
  { icon: MapPin, text: 'Bogor, Jawa Barat' },
  { icon: Leaf, text: 'Kemitraan petani langsung' },
  { icon: ShieldCheck, text: 'Traceable, fair trade' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  })

  return (
    <section id="beranda" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-16">
        <div>
          <motion.p {...fade(0)} className="font-mono text-xs uppercase tracking-widest text-primary">
            Eksportir rempah &amp; herbal · Bogor, Jawa Barat
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="mt-4 text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Rempah Indonesia, di tangan yang <span className="text-primary">tepat</span>.
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-5 max-w-[52ch] text-lg font-light text-muted-foreground">
            PT Jiwa Parahyangan Sejati menyuplai rempah-rempah dan tanaman herbal asli Indonesia
            ke pasar internasional — bekerja langsung dengan petani di Jawa Barat,
            dari panen hingga pengemasan.
          </motion.p>
          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#kontak">Minta Penawaran</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#produk">Lihat Produk</a>
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
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <img
            src="images/hero-spices.jpg"
            alt="Rempah-rempah pilihan dari Jawa Barat"
            className="aspect-[4/3.4] w-full rounded-md object-cover shadow-[rgba(224,112,32,0.18)_0px_30px_45px_-30px,rgba(0,0,0,0.08)_0px_18px_36px_-18px]"
          />
          <figcaption className="absolute bottom-3 left-3 rounded border border-border bg-white/95 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            Produk pilihan · Jawa Barat
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

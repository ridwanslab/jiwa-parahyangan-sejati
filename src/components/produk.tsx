import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { Badge } from '@/components/ui/badge'
import { products } from '@/lib/data'

export function Produk() {
  return (
    <section id="produk" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Produk unggulan</p>
          <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Sepuluh rempah &amp; herbal pilihan
          </h2>
        </Reveal>

        <Stagger className="mt-10 border-t border-border">
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              className="group grid grid-cols-1 items-baseline gap-1.5 border-b border-border py-5 transition-colors hover:bg-muted sm:grid-cols-[1.4fr_2fr_0.6fr] sm:gap-5 sm:px-3"
            >
              <h3 className="text-xl font-light tracking-tight sm:text-2xl">{p.name}</h3>
              <p className="font-light text-muted-foreground sm:text-[15px]">{p.desc}</p>
              <div className="sm:text-right">
                <Badge variant="outline" className="font-mono text-[11px] text-primary">
                  Export grade
                </Badge>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            Semua produk melalui sortasi, pengeringan, dan pengemasan higienis. Spesifikasi dan
            ketersediaan dapat dikirimkan atas permintaan.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { Badge } from '@/components/ui/badge'
import { products } from '@/lib/data'

export function Produk() {
  return (
    <section id="produk" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Our products</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Ten Indonesian spices &amp; botanicals, export grade
          </h2>
          <p className="mt-4 font-light text-muted-foreground">
            Every product is sorted, dried, and packed under hygienic conditions.
            Specifications and availability are available on request.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.article
              key={p.name}
              variants={staggerItem}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-300 hover:shadow-[rgba(184,80,14,0.12)_0px_20px_40px_-20px]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute right-3 top-3">
                  <Badge variant="outline" className="border-background bg-background/90 font-mono text-[10px] text-primary backdrop-blur-sm">
                    Export grade
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-normal tracking-tight">{p.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] italic text-muted-foreground">{p.latin}</p>
                <p className="mt-2.5 text-sm font-light text-muted-foreground">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { advantages } from '@/lib/data'

export function Keunggulan() {
  return (
    <section id="keunggulan" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[560px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">How we work</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Integrity at every stage, from farm to port
          </h2>
          <p className="mt-4 font-light text-muted-foreground">
            Six principles behind every shipment we make.
          </p>
        </Reveal>

        <Stagger className="mt-12 border-t border-border">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              className="group grid grid-cols-1 gap-2 border-b border-border py-6 transition-colors hover:bg-muted/60 sm:grid-cols-[64px_1fr_1.2fr] sm:gap-6 sm:px-3"
            >
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="font-display text-xl font-normal tracking-tight">{a.title}</h3>
              <p className="font-light text-muted-foreground sm:text-[15px]">{a.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

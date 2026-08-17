import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { motion } from 'framer-motion'
import { processSteps } from '@/lib/data'

export function Proses() {
  return (
    <section id="proses" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Supply chain</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Four stages, one standard
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <motion.div key={s.title} variants={staggerItem} className="bg-background p-6 md:p-7">
              <span className="font-mono text-xs text-primary">Stage {i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-normal tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-sm font-light text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

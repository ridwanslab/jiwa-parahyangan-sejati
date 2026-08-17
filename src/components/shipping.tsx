import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { Ship, FileCheck2, Container, Timer } from 'lucide-react'
import { logistics } from '@/lib/data'

const icons = [Ship, Container, FileCheck2, Timer]

export function Shipping() {
  return (
    <section id="shipping" className="border-y border-border bg-espresso py-20 text-white md:py-28 grain relative">
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Shipping &amp; export</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Built for international buyers
          </h2>
          <p className="mt-4 font-light text-white/60">
            From first inquiry to delivered container — a straightforward export process,
            handled end to end.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {logistics.map((l, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div key={l.title} variants={staggerItem} className="bg-espresso p-6 md:p-7">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-normal tracking-tight">{l.title}</h3>
                <p className="mt-1.5 text-sm font-light text-white/60">{l.desc}</p>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

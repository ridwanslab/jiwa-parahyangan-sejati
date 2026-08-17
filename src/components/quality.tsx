import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { ShieldCheck, FlaskConical, CalendarClock } from 'lucide-react'
import { qualityPoints } from '@/lib/data'

const icons = [ShieldCheck, FlaskConical, CalendarClock]

export function Quality() {
  return (
    <section id="quality" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Quality assurance</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Verified at every step
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {qualityPoints.map((q, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={q.title}
                variants={staggerItem}
                className="rounded-lg border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-normal tracking-tight">{q.title}</h3>
                <p className="mt-1.5 text-sm font-light text-muted-foreground">{q.desc}</p>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

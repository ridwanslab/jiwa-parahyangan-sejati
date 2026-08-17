import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { ShieldCheck, FlaskConical, CalendarClock, Sprout, MapPinned, Award } from 'lucide-react'
import { qualityPoints } from '@/lib/data'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const icons = [ShieldCheck, FlaskConical, CalendarClock]

const checks = [
  'Moisture content verified on every lot',
  'Purity & foreign-matter inspection',
  'Grading per international standards (ASTA / ISO)',
  'Pest-free treatment before shipment',
  'Traceability from lot to origin farm',
  'Independent lab analysis on request',
]

export function QualityPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-[680px]">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Quality assurance</p>
            <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Verified at every step
            </h1>
            <p className="mt-5 text-lg font-light text-muted-foreground">
              Our quality system follows the product from the farm gate to the container —
              so what you receive matches what you ordered.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
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

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Quality checklist</p>
              <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight">
                Six checks before every shipment
              </h2>
              <ul className="mt-7 border-t border-border">
                {checks.map((c, i) => (
                  <li key={c} className="flex gap-4 border-b border-border py-3.5 text-[15px]">
                    <span className="pt-0.5 font-mono text-xs text-primary">0{i + 1}</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex gap-5 rounded-lg border border-border bg-background p-6">
                  <Sprout className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-normal tracking-tight">Sustainably sourced</h3>
                    <p className="mt-1.5 text-sm font-light text-muted-foreground">
                      Long-term partnerships with farmers, fair prices, and practices that protect soil health.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 rounded-lg border border-border bg-background p-6">
                  <MapPinned className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-normal tracking-tight">Fully traceable</h3>
                    <p className="mt-1.5 text-sm font-light text-muted-foreground">
                      Every lot is documented back to its origin farm. Transparent for buyers and farmers alike.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 rounded-lg border border-border bg-background p-6">
                  <Award className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-normal tracking-tight">Export-grade only</h3>
                    <p className="mt-1.5 text-sm font-light text-muted-foreground">
                      Products that do not meet export grade are kept out of our shipments — no exceptions.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-7">
                <Link to="/quote">Request a quotation</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

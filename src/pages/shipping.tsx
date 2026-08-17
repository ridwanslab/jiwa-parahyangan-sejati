import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { Ship, Container, FileCheck2, Timer } from 'lucide-react'
import { logistics } from '@/lib/data'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const icons = [Ship, Container, FileCheck2, Timer]

const docList = [
  'Certificate of Origin (COO)',
  'Phytosanitary certificate',
  'Fumigation certificate',
  'Commercial invoice & packing list',
  'Bill of lading',
  'Lab analysis report (on request)',
]

export function ShippingPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-[680px]">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Shipping &amp; export</p>
            <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Built for international buyers
            </h1>
            <p className="mt-5 text-lg font-light text-muted-foreground">
              From first inquiry to delivered container — a straightforward export process,
              handled end to end.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {logistics.map((l, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div key={l.title} variants={staggerItem} className="bg-background p-6 md:p-7">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-normal tracking-tight">{l.title}</h3>
                  <p className="mt-1.5 text-sm font-light text-muted-foreground">{l.desc}</p>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Documentation</p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight">
              Complete export paperwork, arranged for you
            </h2>
            <p className="mt-4 font-light text-muted-foreground">
              Every shipment includes the documentation needed for smooth customs clearance
              at the destination port.
            </p>
            <ul className="mt-7 border-t border-border">
              {docList.map((d, i) => (
                <li key={d} className="flex gap-4 border-b border-border py-3.5 text-[15px]">
                  <span className="pt-0.5 font-mono text-xs text-primary">0{i + 1}</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grain relative overflow-hidden rounded-lg bg-espresso p-8 text-white md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">How to start</p>
              <h2 className="mt-3 font-display text-2xl font-light leading-tight tracking-tight">
                A typical first order
              </h2>
              <ol className="mt-6 space-y-5">
                {[
                  'Send your inquiry — product, quantity, destination port.',
                  'We reply within one business day with price and specifications.',
                  'Sample shipment available for first-time buyers.',
                  'Order confirmed — production and packing within 7–14 days.',
                  'Documents prepared, cargo loaded, container departs.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs">
                      {i + 1}
                    </span>
                    <span className="font-light text-white/80">{step}</span>
                  </li>
                ))}
              </ol>
              <Button asChild size="lg" className="mt-8">
                <Link to="/quote">Start your inquiry</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

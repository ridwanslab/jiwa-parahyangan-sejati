import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { motion } from 'framer-motion'
import { team } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-[680px]">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About the company</p>
            <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Born from the riches of Parahyangan
            </h1>
            <p className="mt-5 text-lg font-light text-muted-foreground">
              PT Jiwa Parahyangan Sejati is an Indonesian export company based in Bogor,
              at the heart of the Parahyangan highlands — a region known for its fertile
              volcanic soil and some of the country's finest spices and botanicals.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="grid grid-cols-2 gap-4">
              <figure>
                <img
                  src="images/farmers.jpg"
                  alt="Partner farmers in West Java"
                  className="aspect-[4/4.6] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
                  Partner farmers — West Java
                </figcaption>
              </figure>
              <figure className="pt-10">
                <img
                  src="images/packaging.jpg"
                  alt="Export packaging"
                  className="aspect-[4/3.2] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
                  Export-standard packing
                </figcaption>
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-light leading-tight tracking-tight sm:text-3xl">
                  What we do
                </h2>
                <p className="mt-4 font-light text-muted-foreground">
                  We supply and export authentic Indonesian spices and herbal botanicals to
                  international markets. Quality is controlled from raw-material selection at
                  farm level, through sorting and drying, to final packing.
                </p>
                <p className="mt-4 font-light text-muted-foreground">
                  Every product is sourced directly with farmers across West Java. Our supply
                  chain is designed to be sustainable, traceable, and fair to the people who
                  grow our spices.
                </p>
              </Reveal>
              <Reveal delay={0.12} className="mt-8">
                <Button asChild size="lg">
                  <Link to="/products">Explore our products</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-[560px]">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Our team</p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              The people behind every shipment
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <figure>
              <img
                src="images/team/team-group.jpg"
                alt="Team PT Jiwa Parahyangan Sejati"
                className="aspect-[3/2] w-full rounded-lg border border-border object-cover"
              />
              <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
                The Jiwa Parahyangan Sejati team
              </figcaption>
            </figure>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="group rounded-lg border border-border bg-background p-6 text-center transition-colors duration-300 hover:border-primary/40"
              >
                {t.img ? (
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-border">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-xl text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {t.initials}
                  </div>
                )}
                <h3 className="mt-4 font-display text-base font-normal tracking-tight">{t.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {t.role}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}

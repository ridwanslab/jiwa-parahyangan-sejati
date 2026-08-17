import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Cta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="grain relative overflow-hidden rounded-lg bg-espresso px-6 py-14 text-center text-white md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />
          <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Bring Indonesia's finest spices to your market
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] font-light text-white/60">
            Consistent quality, a supply chain you can trust, and fair partnerships.
            It starts with a single quotation.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-white hover:bg-primary-hover">
            <Link to="/quote">Start a partnership</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

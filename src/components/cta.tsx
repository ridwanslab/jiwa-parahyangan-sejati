import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="rounded-md border border-border bg-muted px-6 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-[22ch] text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Bawa rempah terbaik Indonesia ke pasarmu
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] font-light text-muted-foreground">
            Kualitas konsisten, rantai pasok yang bisa dipercaya, kemitraan yang adil. Mulai dari satu penawaran.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#kontak">Mulai kerja sama</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

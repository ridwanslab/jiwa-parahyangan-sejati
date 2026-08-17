import { Reveal } from '@/components/motion'

const list = [
  'Direct partnerships with farmers across West Java, no middlemen',
  'Sustainable, traceable, and fair-trade supply chain',
  'Hygienic sorting, drying, and packing to export standards',
]

export function Tentang() {
  return (
    <section id="tentang" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16">
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
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About the company</p>
            <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              An export company born from the riches of Parahyangan
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-light text-muted-foreground">
              Based in Bogor, at the heart of the Parahyangan region, we supply and export
              authentic Indonesian spices and herbal botanicals. Quality is controlled from
              raw-material selection at farm level, through sorting and drying, to final packing.
            </p>
            <p className="mt-4 font-light text-muted-foreground">
              Every product is sourced directly with farmers across West Java. Our supply chain
              is designed to be sustainable, traceable, and fair to the people who grow our spices.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-7 border-t border-border">
              {list.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-border py-3.5 text-[15px]">
                  <span className="pt-0.5 font-mono text-xs text-primary">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Hero } from '@/components/hero'
import { Tentang } from '@/components/tentang'
import { Keunggulan } from '@/components/keunggulan'
import { ProductGrid } from '@/components/product-grid'
import { Proses } from '@/components/proses'
import { Shipping } from '@/components/shipping'
import { Quality } from '@/components/quality'
import { Cta } from '@/components/cta'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <>
      <Hero />
      <Tentang />
      <Keunggulan />
      <section id="produk" className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[560px]">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Our products</p>
              <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Selected spices &amp; botanicals
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View all products</Link>
            </Button>
          </Reveal>
          <div className="mt-10">
            <ProductGrid limit={6} />
          </div>
        </div>
      </section>
      <Proses />
      <Shipping />
      <Quality />
      <Cta />
    </>
  )
}

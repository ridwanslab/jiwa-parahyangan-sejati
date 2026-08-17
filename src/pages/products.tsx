import { useState } from 'react'
import { Reveal } from '@/components/motion'
import { ProductGrid } from '@/components/product-grid'
import { categories, products } from '@/lib/data'
import { cn } from '@/lib/utils'

type CategoryId = 'all' | 'roots' | 'spices' | 'herbs'

const filters: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All products' },
  ...categories.map((c) => ({ id: c.id as CategoryId, label: c.label })),
]

export function ProductsPage() {
  const [active, setActive] = useState<CategoryId>('all')
  const filtered = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Our products</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Ten Indonesian spices &amp; botanicals
          </h1>
          <p className="mt-4 font-light text-muted-foreground">
            Every product is sorted, dried, and packed under hygienic conditions, ready for
            international shipment. Click any product for full specifications, packing options, and MOQ.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                'cursor-pointer rounded-md border px-4 py-2 text-sm transition-colors',
                active === f.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10">
          <ProductGrid items={filtered} />
        </div>
      </div>
    </section>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Package, Ship, FileCheck2 } from 'lucide-react'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { products } from '@/lib/data'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.figure
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <img
                src={product.img}
                alt={product.name}
                className="aspect-[4/3.2] w-full rounded-lg object-cover shadow-[rgba(184,80,14,0.14)_0px_30px_45px_-30px,rgba(0,0,0,0.10)_0px_18px_36px_-18px]"
              />
              <div className="absolute left-4 top-4">
                <Badge className="bg-background/90 font-mono text-[10px] text-primary backdrop-blur-sm">Export grade</Badge>
              </div>
            </motion.figure>

            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Product specification</p>
              <h1 className="mt-2 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-1.5 font-mono text-sm italic text-muted-foreground">{product.latin}</p>
              <p className="mt-5 font-light text-muted-foreground">{product.longDesc}</p>

              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-background px-5 py-4">
                    <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-lg border border-border bg-background p-5">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <Package className="h-4 w-4 text-primary" /> Packing options
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {product.packing.map((pk) => (
                    <li key={pk} className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground">
                      {pk}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                  <Ship className="h-4 w-4 text-primary" /> Minimum order
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{product.moq}</p>
                <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <FileCheck2 className="h-3.5 w-3.5" /> Origin: {product.origin}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/quote">Request a quote for this product</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/shipping">Shipping details</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-light tracking-tight">Related products</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-300 hover:shadow-[rgba(184,80,14,0.12)_0px_20px_40px_-20px]"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-normal tracking-tight">{p.name}</h3>
                    <p className="mt-1 font-mono text-[11px] italic text-muted-foreground">{p.latin}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

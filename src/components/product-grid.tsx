import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { Badge } from '@/components/ui/badge'
import { products, type Product } from '@/lib/data'

interface ProductGridProps {
  items?: Product[]
  limit?: number
  showViewAll?: boolean
}

export function ProductGrid({ items = products, limit, showViewAll = false }: ProductGridProps) {
  const list = limit ? items.slice(0, limit) : items

  return (
    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <motion.article
          key={p.slug}
          variants={staggerItem}
          className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-300 hover:shadow-[rgba(184,80,14,0.12)_0px_20px_40px_-20px]"
        >
          <Link to={`/products/${p.slug}`} className="block">
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute right-3 top-3">
                <Badge variant="outline" className="border-background bg-background/90 font-mono text-[10px] text-primary backdrop-blur-sm">
                  Export grade
                </Badge>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-normal tracking-tight">{p.name}</h3>
              <p className="mt-0.5 font-mono text-[11px] italic text-muted-foreground">{p.latin}</p>
              <p className="mt-2.5 text-sm font-light text-muted-foreground">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                View details
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </Stagger>
  )
}

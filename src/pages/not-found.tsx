import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
          This page went to market
        </h1>
        <p className="mx-auto mt-4 max-w-[46ch] font-light text-muted-foreground">
          The page you are looking for does not exist. Let's get you back to our spices.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </section>
  )
}

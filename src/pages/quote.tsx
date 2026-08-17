import type { FormEvent } from 'react'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { products } from '@/lib/data'

export function QuotePage() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thank you! (Demo form — please contact the official company contacts for a real quotation.)')
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Request a quotation</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Tell us what you need
          </h1>
          <p className="mt-4 font-light text-muted-foreground">
            Fill in the details below and our export team will respond with pricing,
            specifications, and shipping options — usually within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-background p-6 md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="nama" className="text-xs text-muted-foreground">Full name *</label>
                <Input id="nama" name="nama" placeholder="Your name" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="perusahaan" className="text-xs text-muted-foreground">Company</label>
                <Input id="perusahaan" name="perusahaan" placeholder="Company name" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-muted-foreground">Work email *</label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="negara" className="text-xs text-muted-foreground">Country / destination</label>
                <Input id="negara" name="negara" placeholder="e.g. Netherlands" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="produk" className="text-xs text-muted-foreground">Product *</label>
                <Select id="produk" name="produk" defaultValue={products[0].name} required>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                  <option value="mixed">Mixed / other</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="qty" className="text-xs text-muted-foreground">Estimated quantity</label>
                <Select id="qty" name="qty" defaultValue="1 container">
                  <option>Less than 1 MT (sample)</option>
                  <option>1–5 MT</option>
                  <option>5–10 MT</option>
                  <option>1 × 20ft container</option>
                  <option>1 × 40ft container</option>
                  <option>Multiple containers</option>
                </Select>
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="incoterms" className="text-xs text-muted-foreground">Preferred incoterms</label>
                <Select id="incoterms" name="incoterms" defaultValue="FOB">
                  <option>FOB — Indonesian port</option>
                  <option>CIF — destination port</option>
                  <option>CFR</option>
                  <option>EXW</option>
                  <option>Not sure yet</option>
                </Select>
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="pesan" className="text-xs text-muted-foreground">Requirements</label>
                <Textarea
                  id="pesan"
                  name="pesan"
                  placeholder="Grade, packaging preference, quality standard (e.g. ASTA, moisture), intended use..."
                  className="min-h-[110px]"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">Send inquiry</Button>
            <p className="mt-3 text-xs text-muted-foreground">
              This form is part of a mockup. For an actual quotation, please contact the official company.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

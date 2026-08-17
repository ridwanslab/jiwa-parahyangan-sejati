import type { FormEvent } from 'react'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { products } from '@/lib/data'

const contactRows = [
  { k: 'Office', v: 'Bogor, West Java — Indonesia' },
  { k: 'Phone / WhatsApp', v: '[add contact number]' },
  { k: 'Email', v: '[add email address]' },
  { k: 'Services', v: 'B2B export · Farmer partnerships · Private label' },
]

export function Kontak() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thank you! (Demo form — please contact the official company contacts for a real quotation.)')
  }

  return (
    <section id="kontak" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Contact us</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Ready to partner?
          </h2>
          <p className="mt-4 font-light text-muted-foreground">
            We are open to export inquiries, farmer partnerships, and international B2B cooperation.
          </p>
          <ul className="mt-8 border-t border-border">
            {contactRows.map((r) => (
              <li
                key={r.k}
                className="flex items-start justify-between gap-4 border-b border-border py-4 text-sm"
              >
                <span className="text-muted-foreground">{r.k}</span>
                <span className="text-right">{r.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-background p-6 md:p-8"
          >
            <h3 className="font-display text-lg font-normal tracking-tight">Request a quotation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in this form and our team will respond with an offer.
            </p>
            <div className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="nama" className="text-xs text-muted-foreground">Name</label>
                <Input id="nama" name="nama" placeholder="Full name" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-muted-foreground">Email</label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="produk" className="text-xs text-muted-foreground">Product</label>
                <Select id="produk" name="produk" defaultValue={products[0].name}>
                  {products.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                  <option value="mixed">Mixed / other</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="pesan" className="text-xs text-muted-foreground">Requirements</label>
                <Textarea id="pesan" name="pesan" placeholder="Quantity, quality standard, destination country..." />
              </div>
              <Button type="submit" className="w-full">Send inquiry</Button>
              <p className="text-xs text-muted-foreground">
                This form is part of a mockup. For an actual quotation, please contact the official company.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

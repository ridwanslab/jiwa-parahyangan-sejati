import type { FormEvent } from 'react'
import { Reveal } from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { products } from '@/lib/data'

const contactRows = [
  { k: 'Kantor', v: 'Bogor, Jawa Barat — Indonesia' },
  { k: 'Telepon / WhatsApp', v: '[isi nomor kontak]' },
  { k: 'Email', v: '[isi alamat email]' },
  { k: 'Layanan', v: 'Ekspor B2B · Kemitraan petani · Private label' },
]

export function Kontak() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Terima kasih! (Formulir demo — hubungi kontak resmi untuk penawaran sebenarnya.)')
  }

  return (
    <section id="kontak" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Hubungi kami</p>
          <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl">Siap bermitra?</h2>
          <p className="mt-4 font-light text-muted-foreground">
            Kami terbuka untuk penawaran ekspor, kemitraan petani, dan kerja sama B2B internasional.
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
            className="rounded-md border border-border bg-background p-6 md:p-8"
          >
            <h3 className="text-lg font-light tracking-tight">Minta penawaran</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Isi formulir ini, tim kami akan merespons dengan penawaran.
            </p>
            <div className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="nama" className="text-xs text-muted-foreground">Nama</label>
                <Input id="nama" name="nama" placeholder="Nama lengkap" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-muted-foreground">Email</label>
                <Input id="email" name="email" type="email" placeholder="email@perusahaan.com" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="produk" className="text-xs text-muted-foreground">Produk</label>
                <Select id="produk" name="produk" defaultValue={products[0].name}>
                  {products.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                  <option value="campuran">Campuran / lainnya</option>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="pesan" className="text-xs text-muted-foreground">Kebutuhan</label>
                <Textarea id="pesan" name="pesan" placeholder="Jumlah, standar kualitas, negara tujuan..." />
              </div>
              <Button type="submit" className="w-full">Kirim permintaan</Button>
              <p className="text-xs text-muted-foreground">
                Formulir ini bagian dari mockup. Untuk penawaran sebenarnya, hubungi kontak resmi perusahaan.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

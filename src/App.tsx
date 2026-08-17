import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Tentang } from '@/components/tentang'
import { Keunggulan } from '@/components/keunggulan'
import { Produk } from '@/components/produk'
import { Proses } from '@/components/proses'
import { Shipping } from '@/components/shipping'
import { Quality } from '@/components/quality'
import { Kontak } from '@/components/kontak'
import { Cta } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tentang />
        <Keunggulan />
        <Produk />
        <Proses />
        <Shipping />
        <Quality />
        <Kontak />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

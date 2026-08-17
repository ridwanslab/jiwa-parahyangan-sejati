import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Tentang } from '@/components/tentang'
import { Keunggulan } from '@/components/keunggulan'
import { Produk } from '@/components/produk'
import { Proses } from '@/components/proses'
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
        <Kontak />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

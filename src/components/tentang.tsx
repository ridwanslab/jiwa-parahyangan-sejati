import { Reveal } from '@/components/motion'

const list = [
  'Kemitraan langsung dengan petani Jawa Barat, tanpa perantara',
  'Rantai pasok berkelanjutan, traceable, dan fair trade',
  'Sortasi, pengeringan, dan pengemasan higienis standar ekspor',
]

export function Tentang() {
  return (
    <section id="tentang" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20">
        <Reveal className="grid grid-cols-2 gap-4">
          <figure>
            <img
              src="images/farmers.jpg"
              alt="Petani mitra di Jawa Barat"
              className="aspect-[4/4.6] w-full rounded-md object-cover"
            />
            <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
              Petani mitra — Jawa Barat
            </figcaption>
          </figure>
          <figure className="pt-10">
            <img
              src="images/packaging.jpg"
              alt="Pengemasan produk"
              className="aspect-[4/3.2] w-full rounded-md object-cover"
            />
            <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
              Pengemasan standar ekspor
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Tentang perusahaan</p>
            <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Perusahaan ekspor yang tumbuh dari kekayaan Parahyangan
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-light text-muted-foreground">
              Berbasis di Bogor, di jantung kawasan Parahyangan, perusahaan ini bergerak di
              penyediaan dan ekspor rempah-rempah serta tanaman herbal asli Indonesia.
              Kualitas produk dijaga mulai dari pemilihan bahan baku di tingkat petani,
              proses sortasi dan pengeringan, hingga pengemasan akhir.
            </p>
            <p className="mt-4 font-light text-muted-foreground">
              Seluruh produk dikerjakan langsung bersama petani di wilayah Jawa Barat.
              Rantai pasok dirancang berkelanjutan, dapat ditelusuri, dan berpihak pada petani.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-7 border-t border-border">
              {list.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-border py-3.5 text-[15px]">
                  <span className="pt-0.5 font-mono text-xs text-primary">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

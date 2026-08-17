import { motion } from 'framer-motion'
import { Reveal, Stagger, staggerItem } from '@/components/motion'
import { advantages } from '@/lib/data'

export function Keunggulan() {
  return (
    <section id="keunggulan" className="bg-foreground py-20 text-white md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-[560px]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Cara kami bekerja</p>
          <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Integritas di setiap tahap, dari kebun sampai pelabuhan
          </h2>
          <p className="mt-4 font-light text-white/60">Enam prinsip yang kami pegang dalam setiap pengiriman.</p>
        </Reveal>

        <Stagger className="mt-12 border-t border-white/15">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              className="grid grid-cols-1 gap-2 border-b border-white/15 py-6 sm:grid-cols-[64px_1fr_1.2fr] sm:gap-6"
            >
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="text-xl font-light tracking-tight">{a.title}</h3>
              <p className="font-light text-white/60 sm:text-[15px]">{a.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

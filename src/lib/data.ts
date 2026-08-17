export interface Product {
  name: string
  desc: string
}

export const products: Product[] = [
  { name: 'Jahe Gajah', desc: 'Rimpang besar dengan aroma lembut. Untuk bumbu, minuman, dan industri pangan.' },
  { name: 'Jahe Merah', desc: 'Kandungan oleoresin tinggi. Untuk herbal, obat tradisional, dan minyak atsiri.' },
  { name: 'Kunyit', desc: 'Kurkumin tinggi dan warna alami cerah. Untuk bumbu, pewarna, dan suplemen.' },
  { name: 'Temulawak', desc: 'Rimpang khas Nusantara. Untuk jamu, industri farmasi, dan pangan.' },
  { name: 'Kapulaga', desc: 'Aroma harum khas, bernilai tinggi. Untuk kuliner, parfum, dan pengobatan.' },
  { name: 'Cengkeh', desc: 'Eugenol tinggi. Untuk bumbu, rokok kretek, dan minyak atsiri.' },
  { name: 'Kayu Manis', desc: 'Kulit aromatik. Untuk bumbu dunia, bakeri, dan suplemen kesehatan.' },
  { name: 'Lada Hitam & Putih', desc: 'Piperine tinggi. Permintaan dunia yang konsisten, tersedia dua varian.' },
  { name: 'Sereh', desc: 'Citral tinggi. Untuk bumbu dapur dan bahan minyak atsiri.' },
  { name: 'Daun Kelor', desc: 'Daun kering kaya nutrisi. Untuk kesehatan dan industri pangan.' },
]

export const advantages = [
  {
    title: 'Langsung dari petani',
    desc: 'Kemitraan dengan petani Jawa Barat. Hasil terbaik dipilih di sumbernya, harga yang adil untuk petani.',
  },
  {
    title: 'Traceable',
    desc: 'Setiap lot dapat ditelusuri hingga kebun asalnya. Transparan untuk pembeli maupun petani.',
  },
  {
    title: 'Fair trade',
    desc: 'Kemitraan yang adil dan berkelanjutan, mendukung kesejahteraan komunitas petani lokal.',
  },
  {
    title: 'Standar ekspor',
    desc: 'Sortasi, pengeringan, dan pengemasan higienis sesuai standar ekspor internasional.',
  },
  {
    title: 'Berkelanjutan',
    desc: 'Praktik yang menjaga kesuburan tanah dan keberlanjutan pasokan jangka panjang.',
  },
  {
    title: 'Kualitas konsisten',
    desc: 'Seleksi ketat di setiap tahap — aroma, rasa, dan kandungan yang sama di setiap kiriman.',
  },
]

export const processSteps = [
  { title: 'Kemitraan petani', desc: 'Bekerja langsung dengan petani Jawa Barat. Pasokan terbaik, harga adil.' },
  { title: 'Sortasi', desc: 'Pemilahan ketat berdasarkan ukuran, kematangan, dan kebersihan.' },
  { title: 'Pengeringan', desc: 'Proses higienis yang menjaga aroma, warna, dan kandungan aktif.' },
  { title: 'Pengemasan & ekspor', desc: 'Pengemasan standar ekspor, traceable per lot, siap dikirim.' },
]

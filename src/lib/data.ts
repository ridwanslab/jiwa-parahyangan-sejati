export interface Product {
  name: string
  latin: string
  desc: string
  img: string
}

export const products: Product[] = [
  {
    name: 'Elephant Ginger',
    latin: 'Zingiber officinale',
    desc: 'Large rhizomes with a soft aroma. Ideal for culinary use, beverages, and food processing.',
    img: 'images/ginger.jpg',
  },
  {
    name: 'Red Ginger',
    latin: 'Zingiber officinale var. rubrum',
    desc: 'High oleoresin content. Sought after for herbal remedies and essential oils.',
    img: 'images/ginger-red.jpg',
  },
  {
    name: 'Turmeric',
    latin: 'Curcuma longa',
    desc: 'High curcumin, naturally vibrant color. For spice blends, colorants, and supplements.',
    img: 'images/turmeric.jpg',
  },
  {
    name: 'Javanese Turmeric',
    latin: 'Curcuma zanthorrhiza',
    desc: 'A signature Indonesian rhizome for herbal formulations and nutraceuticals.',
    img: 'images/galangal.jpg',
  },
  {
    name: 'Cardamom',
    latin: 'Amomum cardamomum',
    desc: 'Aromatic pods prized in culinary, fragrance, and traditional medicine.',
    img: 'images/cardamom.jpg',
  },
  {
    name: 'Cloves',
    latin: 'Syzygium aromaticum',
    desc: 'High eugenol content. A cornerstone of global spice trade.',
    img: 'images/cloves.jpg',
  },
  {
    name: 'Cinnamon',
    latin: 'Cinnamomum burmannii',
    desc: 'Aromatic bark for bakery, culinary, and wellness industries.',
    img: 'images/cinnamon.jpg',
  },
  {
    name: 'Black & White Pepper',
    latin: 'Piper nigrum',
    desc: 'High piperine. Consistent global demand, both varieties available.',
    img: 'images/pepper.jpg',
  },
  {
    name: 'Lemongrass',
    latin: 'Cymbopogon citratus',
    desc: 'High citral content for culinary use and essential oil distillation.',
    img: 'images/lemongrass.jpg',
  },
  {
    name: 'Moringa Leaves',
    latin: 'Moringa oleifera',
    desc: 'Dried leaves rich in nutrients for health and food industries.',
    img: 'images/moringa.jpg',
  },
]

export const advantages = [
  {
    title: 'Direct from farmers',
    desc: 'Partnerships with farmers across West Java. The best harvest is selected at the source, with fair prices paid to growers.',
  },
  {
    title: 'Fully traceable',
    desc: 'Every lot can be traced back to its origin farm. Full transparency for buyers and farmers alike.',
  },
  {
    title: 'Fair trade',
    desc: 'Fair, sustainable partnerships that support the livelihoods of local farming communities.',
  },
  {
    title: 'Export-grade processing',
    desc: 'Sorting, drying, and packing under hygienic conditions, in line with international export standards.',
  },
  {
    title: 'Sustainably sourced',
    desc: 'Practices that protect soil health and secure long-term supply stability.',
  },
  {
    title: 'Consistent quality',
    desc: 'Rigorous selection at every stage — aroma, flavor, and active content held constant across shipments.',
  },
]

export const processSteps = [
  { title: 'Farmer partnerships', desc: 'Direct sourcing from West Java farmers. Quality supply at a fair price.' },
  { title: 'Sorting', desc: 'Strict grading by size, maturity, and cleanliness.' },
  { title: 'Drying', desc: 'Hygienic drying that preserves aroma, color, and active compounds.' },
  { title: 'Packing & export', desc: 'Export-standard packing, lot traceability, ready for shipment.' },
]

export const logistics = [
  {
    title: 'FOB / CIF shipping',
    desc: 'Flexible incoterms. We coordinate sea freight from Indonesian ports to your destination.',
  },
  {
    title: 'Export documentation',
    desc: 'Certificate of Origin, phytosanitary certificate, and fumigation arranged for every shipment.',
  },
  {
    title: 'Full container or LCL',
    desc: '20ft and 40ft containers, or consolidated LCL cargo for smaller first orders.',
  },
  {
    title: 'Lead time',
    desc: 'Ready to ship within 7–14 days of confirmed order, depending on volume and season.',
  },
]

export const qualityPoints = [
  {
    title: 'In-house quality control',
    desc: 'Moisture content, purity, and grading verified on every lot before packing.',
  },
  {
    title: 'Lab testing on request',
    desc: 'Independent lab analysis for contaminants, aflatoxin, and active compounds available.',
  },
  {
    title: 'Stable supply year-round',
    desc: 'Multi-season sourcing network keeps availability consistent across the calendar year.',
  },
]

export interface Product {
  slug: string
  name: string
  latin: string
  category: 'roots' | 'spices' | 'herbs'
  desc: string
  longDesc: string
  img: string
  origin: string
  specs: { label: string; value: string }[]
  packing: string[]
  moq: string
}

export const categories = [
  { id: 'roots' as const, label: 'Roots & rhizomes' },
  { id: 'spices' as const, label: 'Spices' },
  { id: 'herbs' as const, label: 'Herbs & leaves' },
]

export const products: Product[] = [
  {
    slug: 'elephant-ginger',
    name: 'Elephant Ginger',
    latin: 'Zingiber officinale',
    category: 'roots',
    desc: 'Large rhizomes with a soft aroma. Ideal for culinary use, beverages, and food processing.',
    longDesc:
      'Elephant ginger is the most widely traded ginger variety in Indonesia, prized for its large, thick rhizomes and mild, clean aroma. Grown by partner farmers in the volcanic highlands of West Java, our ginger is harvested at peak maturity, washed, and dried to export standard. It suits culinary applications, ginger ale and beverage production, and the food processing industry.',
    img: 'images/ginger.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Size', value: 'Whole, sliced, or powder' },
      { label: 'Harvest', value: 'Year-round' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg', 'Vacuum-packed (powder)', 'Private label on request'],
    moq: '1 × 20ft container (≈ 12 MT)',
  },
  {
    slug: 'red-ginger',
    name: 'Red Ginger',
    latin: 'Zingiber officinale var. rubrum',
    category: 'roots',
    desc: 'High oleoresin content. Sought after for herbal remedies and essential oils.',
    longDesc:
      'Red ginger is distinguished by its reddish-brown rhizomes and significantly higher oleoresin and essential oil content than common ginger. It is the preferred variety for herbal supplements, traditional medicine, and essential oil distillation. Our supply comes from dedicated smallholder plots managed under the same traceable partnership model.',
    img: 'images/ginger-red.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Oleoresin', value: 'High (6–8%)' },
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Dried whole, sliced, powder' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg', 'Vacuum-packed (powder)'],
    moq: '1 × 20ft container (≈ 10 MT)',
  },
  {
    slug: 'turmeric',
    name: 'Turmeric',
    latin: 'Curcuma longa',
    category: 'roots',
    desc: 'High curcumin, naturally vibrant color. For spice blends, colorants, and supplements.',
    longDesc:
      'Our turmeric is grown in rotation with other rhizomes on partner farms, giving the soil time to recover and the rhizomes time to develop deep color and curcumin content. Dried fingers are sorted by size, cleaned, and graded before packing. Widely used in curry blends, natural colorants, and the supplement industry.',
    img: 'images/turmeric.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Curcumin', value: '≥ 3% (up to 5% on request)' },
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Fingers, splits, powder' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg', 'Vacuum-packed (powder)'],
    moq: '1 × 20ft container (≈ 12 MT)',
  },
  {
    slug: 'javanese-turmeric',
    name: 'Javanese Turmeric',
    latin: 'Curcuma zanthorrhiza',
    category: 'roots',
    desc: 'A signature Indonesian rhizome for herbal formulations and nutraceuticals.',
    longDesc:
      'Temulawak, or Javanese turmeric, is a botanical native to Indonesia with a long history in traditional jamu herbal medicine. It contains curcuminoids and essential oils valued in nutraceutical and functional food formulations. We supply it dried and sliced, with phytosanitary documentation for international shipment.',
    img: 'images/galangal.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Dried slices, powder' },
      { label: 'Harvest', value: 'Seasonal — stock on request' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg'],
    moq: '5 MT',
  },
  {
    slug: 'cardamom',
    name: 'Cardamom',
    latin: 'Amomum cardamomum',
    category: 'spices',
    desc: 'Aromatic pods prized in culinary, fragrance, and traditional medicine.',
    longDesc:
      'Indonesian cardamom (kapulaga) has a warm, camphor-like aroma distinct from the green cardamom of South Asia, and is highly regarded in the fragrance and traditional medicine industries. Harvested at the right maturity to preserve essential oils, then shade-dried to keep the pods intact.',
    img: 'images/cardamom.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 12%' },
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Whole pods, decorticated seeds' },
      { label: 'Harvest', value: 'Seasonal' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg', 'Vacuum-packed'],
    moq: '2 MT',
  },
  {
    slug: 'cloves',
    name: 'Cloves',
    latin: 'Syzygium aromaticum',
    category: 'spices',
    desc: 'High eugenol content. A cornerstone of global spice trade.',
    longDesc:
      'Indonesia is the world\u2019s largest clove producer, and West Java contributes some of the finest grades. Our cloves are harvested by hand, sun-dried, and cleaned to remove stems and foreign matter. High eugenol content makes them ideal for the kretek cigarette industry, culinary use, and essential oil distillation.',
    img: 'images/cloves.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 12%' },
      { label: 'Eugenol', value: '≥ 15%' },
      { label: 'Purity', value: '≥ 97%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Whole dried, stems removed' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg'],
    moq: '1 × 20ft container (≈ 10 MT)',
  },
  {
    slug: 'cinnamon',
    name: 'Cinnamon',
    latin: 'Cinnamomum burmannii',
    category: 'spices',
    desc: 'Aromatic bark for bakery, culinary, and wellness industries.',
    longDesc:
      'We supply cassia cinnamon bark from managed smallholder plots, peeled, rolled, and dried to a consistent grade. Known for its strong, sweet aroma and high oil content, Indonesian cinnamon is a staple for bakery, culinary spice blends, and the wellness industry.',
    img: 'images/cinnamon.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Oil content', value: '≥ 2.5%' },
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Grade', value: 'AA, A, B (export)' },
      { label: 'Form', value: 'Quills, chips, powder' },
    ],
    packing: ['25 kg PP woven bags', 'Bales', 'Cartons'],
    moq: '1 × 20ft container (≈ 10 MT)',
  },
  {
    slug: 'black-white-pepper',
    name: 'Black & White Pepper',
    latin: 'Piper nigrum',
    category: 'spices',
    desc: 'High piperine. Consistent global demand, both varieties available.',
    longDesc:
      'Pepper is the world\u2019s most traded spice, and we supply both black and white pepper from West Java. Black pepper is sun-dried whole berries with high piperine content; white pepper is the decoricated kernel with a milder, more refined heat. Both are machine-cleaned and graded for export.',
    img: 'images/pepper.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 12%' },
      { label: 'Piperine', value: '≥ 4% (black), ≥ 5% (white)' },
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Grade', value: 'ASTA 570/571 GL or better' },
      { label: 'Form', value: 'Whole, ground' },
    ],
    packing: ['25 kg PP woven bags', '50 kg jute bags', 'Vacuum-packed (ground)'],
    moq: '1 × 20ft container (≈ 12 MT)',
  },
  {
    slug: 'lemongrass',
    name: 'Lemongrass',
    latin: 'Cymbopogon citratus',
    category: 'herbs',
    desc: 'High citral content for culinary use and essential oil distillation.',
    longDesc:
      'Fresh and dried lemongrass from West Java, cut and dried to preserve the citral-rich essential oils. Used across Southeast Asian cuisine, herbal teas, and as a raw material for essential oil distillation. Supplied in cut form with strict moisture control.',
    img: 'images/lemongrass.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Citral', value: 'High (on request)' },
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Form', value: 'Cut 3–5 cm, powder' },
      { label: 'Harvest', value: 'Year-round' },
    ],
    packing: ['25 kg PP woven bags', 'Cartons 10–15 kg'],
    moq: '5 MT',
  },
  {
    slug: 'moringa-leaves',
    name: 'Moringa Leaves',
    latin: 'Moringa oleifera',
    category: 'herbs',
    desc: 'Dried leaves rich in nutrients for health and food industries.',
    longDesc:
      'Moringa leaves are harvested from partner farms, shade-dried to retain nutrients, and processed into whole leaves or fine powder. Rich in vitamins, minerals, and antioxidants, they serve the health food, supplement, and functional beverage industries.',
    img: 'images/moringa.jpg',
    origin: 'West Java, Indonesia',
    specs: [
      { label: 'Moisture', value: '≤ 8%' },
      { label: 'Purity', value: '≥ 99%' },
      { label: 'Grade', value: 'A (export)' },
      { label: 'Form', value: 'Whole dried leaves, powder' },
      { label: 'Harvest', value: 'Year-round' },
    ],
    packing: ['10 kg cartons', '25 kg PP woven bags', 'Vacuum-packed (powder)'],
    moq: '2 MT',
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

export const team = [
  {
    name: 'Manjeet Kaur Melanie Gill',
    role: 'Chief Executive Officer',
    initials: 'MG',
    img: 'images/team/team-ceo.jpg',
  },
  {
    name: 'Edi Maryadi',
    role: 'Chief Operating Officer',
    initials: 'EM',
    img: 'images/team/team-coo.jpg',
  },
  {
    name: 'Ambarasari Santana',
    role: 'Chief Financial Officer',
    initials: 'AS',
    img: 'images/team/team-cfo.jpg',
  },
  {
    name: 'Ridwan Maulana',
    role: 'Supervisor',
    initials: 'RM',
    img: 'images/team/team-supervisor.jpg',
  },
]

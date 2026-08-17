import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { HomePage } from '@/pages/home'
import { ProductsPage } from '@/pages/products'
import { ProductDetailPage } from '@/pages/product-detail'
import { AboutPage } from '@/pages/about'
import { ShippingPage } from '@/pages/shipping'
import { QualityPage } from '@/pages/quality'
import { QuotePage } from '@/pages/quote'
import { NotFoundPage } from '@/pages/not-found'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="quality" element={<QualityPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

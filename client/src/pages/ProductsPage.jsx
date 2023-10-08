import { ProductCatalog } from 'features/products/ProductCatalog'
import { PromoBanner } from 'features/promo/PromoBanner'

function ProductsPage() {
  return (
    <div className="home-page">
      <section className="home-page__promo-banner">
        <PromoBanner />
      </section>
      <section className="home-page__catalog block-margin-m">
        <ProductCatalog />
      </section>
    </div>
  )
}

export default ProductsPage

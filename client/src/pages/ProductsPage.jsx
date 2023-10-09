import { ProductCatalog } from 'features/products/ProductCatalog'
import { PromoBanner } from 'features/promo/PromoBanner'

function ProductsPage() {
  return (
    <div className="products-page">
      <section className="products-page__promo-banner">
        <PromoBanner />
      </section>
      <section className="products-page__catalog block-margin-m">
        <ProductCatalog />
      </section>
    </div>
  )
}

export default ProductsPage

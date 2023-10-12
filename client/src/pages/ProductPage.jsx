import { Product } from 'features/products/Product'
import { Breadcrumbs } from 'shared/ui/Breadcrumbs'

function ProductPage() {
  return (
    <div className="product-page">
      <Breadcrumbs showCurrentBreadcrumb={false} />
      <section className="product-page__product block-margin-m">
        <Product />
      </section>
    </div>
  )
}

export default ProductPage

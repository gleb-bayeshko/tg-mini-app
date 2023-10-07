import { ProductCategoriesPopular } from 'features/products/productCategories/ProductCategoriesPopular'
import { ProductCategoriesScroll } from 'features/products/productCategories/ProductCategoriesScroll'
import PromoBanner from 'features/promo/PromoBanner/PromoBanner'

function MainPage() {
  return (
    <div className="home-page">
      <section className="home-page__promo-banner">
        <PromoBanner />
      </section>
      <section className="home-page__product-categories block-margin-top">
        <ProductCategoriesScroll />
      </section>
      <section className="home-page__product-categories-popular">
        <ProductCategoriesPopular />
      </section>
    </div>
  )
}

export default MainPage

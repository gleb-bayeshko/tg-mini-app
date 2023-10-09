import { ProductCategoriesPopular } from 'features/products/ProductCategoriesPopular'
import { ProductCategoriesScroll } from 'features/products/ProductCategoriesScroll'
import { PromoBanner } from 'features/promo/PromoBanner'

function MainPage() {
  return (
    <div className="home-page">
      <section className="home-page__promo-banner">
        <PromoBanner />
      </section>
      <section className="home-page__product-categories block-margin-m-top">
        <ProductCategoriesScroll />
      </section>
      <section className="home-page__product-categories-popular">
        <ProductCategoriesPopular />
      </section>
    </div>
  )
}

export default MainPage

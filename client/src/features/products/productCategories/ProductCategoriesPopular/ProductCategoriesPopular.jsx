import { ArrowRightIcon } from 'shared/icons'
import { Wrapper } from 'shared/ui/Wrapper'
import { ProductCategoriesPopularItem } from './ProductCategoriesPopularItem'
import { productCategoriesPopular, productCategoriesStyle } from './const'
import './styles.css'

function ProductCategoriesPopular() {
  const renderCategories = () => productCategoriesPopular.map(({
    id,
    category,
    imgSrc,
    title,
    description
  }, i) => (
    <a
      key={id}
      //TODO: Add actual routes
      href="/"
      className="product-categories-popular__href"
    >
      <ProductCategoriesPopularItem
        className="product-categories-popular__item"
        height={productCategoriesStyle[i]?.height}
        color={productCategoriesStyle[i]?.color}
        imgSrc={imgSrc}
        title={title}
        description={description}
      >
        {category === 'all' && (
          <ArrowRightIcon className="product-categories-popular__arrow" />
        )}
      </ProductCategoriesPopularItem>
    </a>
  ))

  return (
    <div className="product-categories-popular">
      <Wrapper>
        <div className="product-categories-popular-content">
          {renderCategories()}
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductCategoriesPopular

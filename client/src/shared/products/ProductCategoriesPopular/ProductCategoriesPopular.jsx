import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'shared/icons'
import Subheader from 'shared/ui/Subheader/Subheader'
import { Wrapper } from 'shared/ui/Wrapper'
import { ProductCategoriesPopularItem } from './ProductCategoriesPopularItem'
import { productCategoriesPopular, productCategoriesStyle } from './const'
import { routerPath } from 'pages/routes/const'
import { productCategories } from 'shared/const'
import './styles.css'

function ProductCategoriesPopular() {
  const renderCategories = () => productCategoriesPopular.map(({
    id,
    category,
    imgSrc,
    title,
    description
  }, i) => (
    <Link
      key={id}
      to={`${routerPath.products}/${category}`}
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
        {category === productCategories.all && (
          <ArrowRightIcon className="product-categories-popular__arrow" />
        )}
      </ProductCategoriesPopularItem>
    </Link>
  ))

  return (
    <div className="product-categories-popular">
      <Wrapper>
        <Subheader href={`${routerPath.products}/${productCategories.popular}`}>
          Popular Categories
        </Subheader>
        <div className="product-categories-popular-content">
          {renderCategories()}
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductCategoriesPopular

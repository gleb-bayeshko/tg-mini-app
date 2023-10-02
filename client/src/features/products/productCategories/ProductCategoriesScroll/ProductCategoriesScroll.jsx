import { ProductCategoriesItem } from './ProductCategoriesItem'
import { productCategories } from './const'
import './styles.css'

function ProductCategoriesScroll() {
  const renderCategories = () => productCategories.map(({
    id,
    name,
    category,
    imgSrc
  }) => (
    <li className="product-categories-scroll-list__item" key={id}>
      {/*TODO: Add actual routes*/}
      <a href="/">
        <ProductCategoriesItem
          name={name}
          category={category}
          imgSrc={imgSrc}
        />
      </a>
    </li>
  ))

  return (
    <div className="product-categories-scroll">
      <ul className="product-categories-scroll-list">
        {renderCategories()}
      </ul>
    </div>
  )
}

export default ProductCategoriesScroll

import { ProductCategoriesItem } from './ProductCategoriesItem'
import { productCategories } from './const'
import './styles.css'

function ProductCategoriesScroll() {
  return (
    <div className="product-categories-scroll">
      <ul className="product-categories-scroll-list">
        {
          productCategories.map(({ id, name, category, imgSrc }) => (
            <li className="product-categories-scroll-list__item" key={id}>
              <ProductCategoriesItem
                name={name}
                category={category}
                imgSrc={imgSrc}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductCategoriesScroll

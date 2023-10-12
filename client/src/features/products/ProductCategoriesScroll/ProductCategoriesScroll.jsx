import { Link } from 'react-router-dom'
import { ProductCategoriesScrollItem } from './ProductCategoriesScrollItem'
import { productCategoriesScroll } from './const'
import { routerPath } from 'pages/routes/const'
import './styles.css'

function ProductCategoriesScroll() {
  const renderCategories = () => productCategoriesScroll.map(({
    id,
    name,
    category,
    imgSrc
  }) => (
    <li className="product-categories-scroll-list__item" key={id}>
      <Link to={`${routerPath.products}/${category}`}>
        <ProductCategoriesScrollItem
          name={name}
          imgSrc={imgSrc}
        />
      </Link>
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

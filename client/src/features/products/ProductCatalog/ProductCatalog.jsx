import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from 'features/products/ProductCard'
import { fetchProducts } from 'features/products/ProductCatalog/productCatalogSlice'
import Subheader from 'shared/ui/Subheader/Subheader'
import { Wrapper } from 'shared/ui/Wrapper'
import { capitalizeString } from 'shared/utils'
import { ProductCatalogFilters } from '../ProductCatalogFilters'
import './styles.css'

function ProductCatalog() {
  const { category } = useParams()

  const { sortCategory, filters, products, isLoading } = useSelector(state => state.productCatalog)
  const dispatch = useDispatch()

  const renderProducts = products => products.map(({
    id,
    category,
    imgSrc,
    price,
    name,
    rating
  }) => (
    <ProductCard
      key={id}
      name={name}
      imgSrc={imgSrc}
      id={id}
      price={price}
      rating={rating}
      category={category}
    />
  ))

  useEffect(() => {
    dispatch(fetchProducts({
      sortCategory,
      category,
      ...filters
    }))
  }, [sortCategory, category, filters])

  return (
    <div className="product-catalog">
      <ProductCatalogFilters />
      <Wrapper>
        <Subheader>
          {capitalizeString(category)}
        </Subheader>
        {!isLoading && (
          <div className="product-catalog__products">
            {renderProducts(products)}
          </div>
        )}
      </Wrapper>
    </div>
  )
}

export default ProductCatalog

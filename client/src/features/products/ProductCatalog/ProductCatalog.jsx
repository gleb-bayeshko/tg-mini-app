import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from 'features/products/ProductCard'
import { products } from 'mock/products'
import Subheader from 'shared/ui/Subheader/Subheader'
import { Wrapper } from 'shared/ui/Wrapper'
import { capitalizeString } from 'shared/utils'
import { ProductCatalogFilters } from './ProductCatalogFilters'
import { sortCategories } from 'features/products/ProductCatalog/ProductCatalogFilters/const'
import { productCategories } from 'shared/const'
import './styles.css'

function ProductCatalog() {
  const { category } = useParams()

  const { sortCategory, filters, cart } = useSelector(state => state.productCatalog)
  const currentProducts = useMemo(() => products, [])

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

  // Imitate request
  const preparedProducts = useMemo(() => {
    const filterProductsByProductCategory = products => {
      if (category === productCategories.all) {
        return products
      }

      if (category === productCategories.popular) {
        return products.filter(({ isPopular }) => isPopular)
      }

      return products.filter(({ category: productCategory }) => productCategory === category)
    }

    const sortProducts = products => {
      if (sortCategory === sortCategories.priceHighToLow) {
        return products.sort((a, b) => b.price - a.price)
      }

      if (sortCategory === sortCategories.priceLowToHigh) {
        return products.sort((a, b) => a.price - b.price)
      }

      if (sortCategory === sortCategories.topRated) {
        return products.sort((a, b) => b.rating - a.rating)
      }

      return products
    }

    const applyUserFilters = products => {
      const filterEntries = Object.entries(filters)

      return filterEntries
        .reduce((productsAcc, [filterName, filterValue]) => {
          if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) {
            return productsAcc
          }

          if (filterName === 'price-min') {
            return productsAcc
              .filter(({ price }) => ( +price >= +filterValue ))
          }

          if (filterName === 'price-max') {
            return productsAcc
              .filter(({ price }) => ( +price <= +filterValue ))
          }

          return productsAcc
            .filter(({ [filterName]: productValue }) => filterValue.some(val => `${val}` === `${productValue.id}`))
        }, products)
    }

    return (
      applyUserFilters (
        sortProducts(
          filterProductsByProductCategory(currentProducts)
        )
      )
    )
  }, [category, sortCategory, currentProducts, filters])

  return (
    <div className="product-catalog">
      <ProductCatalogFilters />
      <Wrapper>
        <Subheader>
          {capitalizeString(category)}
        </Subheader>
        <div className="product-catalog__products">
          {renderProducts(preparedProducts)}
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductCatalog

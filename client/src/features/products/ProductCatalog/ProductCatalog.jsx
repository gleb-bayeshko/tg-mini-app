import { Wrapper } from 'shared/ui/Wrapper'
import { ProductCatalogFilters } from './ProductCatalogFilters'
import './styles.css'

function ProductCatalog() {
  return (
    <div className="product-catalog">
      <Wrapper>
        <ProductCatalogFilters />
      </Wrapper>
    </div>
  )
}

export default ProductCatalog

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { FilterIcon, SortIcon } from 'shared/icons'
import { Button } from 'shared/ui/Button'
import { Dropdown } from 'shared/ui/Dropdown'
import { DropdownItem } from 'shared/ui/Dropdown/DropdownItem'
import { DropdownMenu } from 'shared/ui/Dropdown/DropdownMenu'
import { Wrapper } from 'shared/ui/Wrapper'
import { setSortCategory } from '../productCatalogSlice'
import { ProductFiltersModal } from './ProductFiltersModal'
import { sortFilters } from './const'
import './styles.css'

function ProductCatalogFilters() {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)

  const { sortCategory } = useSelector(state => state.productCatalog)
  const dispatch = useDispatch()

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  const handleSortButtonClick = () => {
    setIsSortDropdownOpen(prev => !prev)
  }

  const handleFiltersButtonClick = () => {
    setIsFiltersModalOpen(prev => !prev)
  }

  const handleSortItemClick = category => {
    dispatch(setSortCategory(category))
  }

  const handleDropdownClose = () => {
    setIsSortDropdownOpen(false)
  }

  const handleFiltersModalClose = () => {
    setIsFiltersModalOpen(false)
  }

  const renderSortItems = () => sortFilters.map(({ id, name, category }) => (
    <DropdownItem
      key={id}
      isSelected={sortCategory === category}
      onClick={() => handleSortItemClick(category)}
    >
      {name}
    </DropdownItem>
  ))

  return (
    <div className="product-catalog-sort-container">
      <Wrapper>
        <div className="product-catalog-sort">
          <Dropdown
            onOuterClick={handleDropdownClose}
            isOpen={isSortDropdownOpen}
          >
            <Button
              className="product-catalog-sort__button"
              styleType="outline"
              color="white"
              onClick={handleSortButtonClick}
            >
            Sort
              <SortIcon className="product-catalog-sort__sort-icon" />
            </Button>
            <DropdownMenu onClick={handleDropdownClose}>
              {renderSortItems()}
            </DropdownMenu>
          </Dropdown>

          <Button
            className="product-catalog-sort__button"
            styleType="outline"
            color="white"
            onClick={handleFiltersButtonClick}
          >
          Filter
            <FilterIcon className="product-catalog-sort__filter-icon" />
          </Button>
          <ProductFiltersModal
            isOpen={isFiltersModalOpen}
            onClose={handleFiltersModalClose}
          />
        </div>
      </Wrapper>
    </div>
  )
}

ProductCatalogFilters.propTypes = {
  initialSortCategory: PropTypes.string,
  onSortCategoryChange: PropTypes.func,
  initialFilters: PropTypes.object,
  onFiltersChange: PropTypes.func,
}

export default ProductCatalogFilters

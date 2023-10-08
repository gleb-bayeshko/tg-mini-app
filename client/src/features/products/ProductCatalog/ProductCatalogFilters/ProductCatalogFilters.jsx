import { useState } from 'react'
import { FilterIcon, SortIcon } from 'shared/icons'
import { Button } from 'shared/ui/Button'
import { Dropdown } from 'shared/ui/Dropdown'
import { DropdownItem } from 'shared/ui/Dropdown/DropdownItem'
import { DropdownMenu } from 'shared/ui/Dropdown/DropdownMenu'
import { ProductFiltersModal } from './ProductFiltersModal'
import { sortCategories, sortFilters } from 'features/products/ProductCatalog/ProductCatalogFilters/const'
import './styles.css'

function ProductCatalogFilters() {
  const [currentSortCategory, setCurrentSortCategory] = useState(sortCategories.priceHighToLow)
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  const handleSortButtonClick = () => {
    setIsSortDropdownOpen(prev => !prev)
  }

  const handleFiltersButtonClick = () => {
    setIsFiltersModalOpen(prev => !prev)
  }

  const handleSortItemClick = category => {
    setCurrentSortCategory(category)
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
      isSelected={currentSortCategory === category}
      onClick={() => handleSortItemClick(category)}
    >
      {name}
    </DropdownItem>
  ))

  return (
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
  )
}

export default ProductCatalogFilters

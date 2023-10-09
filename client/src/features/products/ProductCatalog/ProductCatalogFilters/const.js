export const sortCategories = {
  priceHighToLow: 'priceHighToLow',
  priceLowToHigh: 'priceLowToHigh',
  topRated: 'topRated',
}

export const sortFilters = [
  {
    id: 1,
    name: 'Price: High to Low',
    category: sortCategories.priceHighToLow,
  },
  {
    id: 2,
    name: 'Price: Low to High',
    category: sortCategories.priceLowToHigh,
  },
  {
    id: 3,
    name: 'Top Rated',
    category: sortCategories.topRated,
  }
]

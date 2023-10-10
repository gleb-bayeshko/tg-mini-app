export const sortCategories = {
  priceHighToLow: 'priceHighToLow',
  priceLowToHigh: 'priceLowToHigh',
  topRated: 'topRated',
}

export const sortFilters = [
  {
    id: 1,
    name: 'High to Low',
    category: sortCategories.priceHighToLow,
  },
  {
    id: 2,
    name: 'Low to High',
    category: sortCategories.priceLowToHigh,
  },
  {
    id: 3,
    name: 'Top Rated',
    category: sortCategories.topRated,
  }
]

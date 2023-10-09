import { productCategories } from 'shared/const'

export const drawerMenuItems = [
  {
    id: 1,
    name: 'Catalog',
    category: productCategories.all,
  },
  {
    id: 2,
    name: 'Popular',
    category: productCategories.popular,
    imgSrc: '/images/productCategoriesPopular/category-popular-clothes.png',
    color: 'green'
  },
  {
    id: 3,
    name: 'Food',
    category: productCategories.food,
    imgSrc: '/images/productCategories/category-food.png',
    color: 'pink',
  },
  {
    id: 4,
    name: 'Bowls',
    category: productCategories.bowls,
    imgSrc: '/images/productCategories/category-bowls.png',
    color: 'orange',
  },
  {
    id: 5,
    name: 'Fillers',
    category: productCategories.fillers,
    imgSrc: '/images/productCategories/category-litter-box-fillers.png',
    color: 'yellow',
  },
  {
    id: 6,
    name: 'Hygiene',
    category: productCategories.hygiene,
    imgSrc: '/images/productCategories/category-hygiene-and-care.png',
    color: 'green',
  },
  {
    id: 7,
    name: 'Vitamins',
    category: productCategories.vitamins,
    imgSrc: '/images/productCategories/category-vitamins.png',
    color: 'blue',
  },
  {
    id: 8,
    name: 'Toys',
    category: productCategories.toys,
    imgSrc: '/images/productCategories/category-toys.png',
    color: 'violet',
  },
  {
    id: 9,
    name: 'Clothes',
    category: productCategories.clothes,
    imgSrc: '/images/productCategories/category-clothes.png',
    color: 'pink',
  },
  {
    id: 10,
    name: 'Carriers',
    category: productCategories.carriers,
    imgSrc: '/images/productCategories/category-carriers.png',
    color: 'orange',
  },
]

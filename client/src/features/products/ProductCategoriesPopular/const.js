import { productCategories } from 'shared/const'

export const productCategoriesPopular = [
  {
    id: 1,
    category: productCategories.carriers,
    title: 'Carriers',
    description: 'For a cozy trip anywhere. Even to the ends of the earth.',
    imgSrc: '/images/productCategoriesPopular/category-popular-carriers.png',
  },
  {
    id: 2,
    category: productCategories.clothes,
    title: 'Clothes',
    description: 'Stay warm and cool',
    imgSrc: '/images/productCategoriesPopular/category-popular-clothes.png',
  },
  {
    id: 3,
    category: productCategories.food,
    title: 'Food',
    description: 'A timeless delicious classic',
    imgSrc: '/images/productCategoriesPopular/category-popular-food.png',
  },
  {
    id: 4,
    category: productCategories.toys,
    title: 'Toys',
    description: 'Unleash your cat\'s playfulness!',
    imgSrc: '/images/productCategoriesPopular/category-popular-toys.png',
  },
  {
    id: 5,
    category:  productCategories.all,
    title: 'Or explore everything',
  },
]

export const productCategoriesStyle = [
  {
    height: 160,
    color: 'violet',
  },
  {
    height: 180,
    color: 'yellow',
  },
  { color: 'pink', },
  {
    height: 210,
    color: 'green',
  },
  { color: 'blue', },
]

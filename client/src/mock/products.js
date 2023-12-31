import { brands, lifeStages } from 'mock/productCategories'
import { productCategories } from 'shared/const'

export const products = [
  {
    id: 1,
    name: 'Super Filler Extra Lux Edition',
    description: 'A real filler for the most regal cats. Super absorption. Super comfortable. Super material. EVERYTHING IS SUPER!',
    rating: 3.5,
    price: 10.99,
    brand: brands.superCat,
    lifeStage: lifeStages.adult,
    category: productCategories.fillers,
    imgSrc:  '/images/mock/products/filler1.jpg'
  },
  {
    id: 2,
    name: 'Nasty tasty',
    description: 'Very tasty, even if not very tasty. And useful. Very healthy and not very tasty. Yeah, not very tasty.',
    rating: 1.2,
    price: 3.99,
    brand: brands.cateCare,
    lifeStage: lifeStages.kitten,
    category: productCategories.food,
    isPopular: true,
    imgSrc:  '/images/mock/products/food1.jpg'
  },
  {
    id: 3,
    name: 'Camping house Royal',
    description: 'Better than the richest mansions. Convenient and comfortable, waterproof materials, warmth and coziness.',
    rating: 5,
    price: 67.49,
    brand: brands.catty,
    lifeStage: lifeStages.all,
    category: productCategories.carriers,
    isPopular: true,
    imgSrc: '/images/mock/products/carrier1.jpg'
  },
  {
    id: 4,
    name: 'Shaggy head',
    description: 'Shampoo made from the most useful materials in the world. After him, the cat will become the most shaggy cat in the world.',
    rating: 4,
    price: 27.99,
    brand: brands.goldenx,
    lifeStage: lifeStages.senior,
    category: productCategories.hygiene,
    imgSrc: '/images/mock/products/hygiene1.png'
  },
  {
    id: 5,
    name: 'Extra deep Food Bowl 300-FFCXC21 with automatic standing in place function',
    description: 'Secret development. Truly brilliant.',
    rating: 2,
    price: 12.66,
    brand: brands.kitForCat,
    lifeStage: lifeStages.all,
    category: productCategories.bowls,
    isPopular: true,
    imgSrc: '/images/mock/products/bowl1.jpg'
  },
  {
    id: 6,
    name: 'Eternal youth (only for pets)',
    description: 'A medical miracle at last! With a unique taste (strawberry, raspberry, apple), however, the medicine is still bitter.',
    rating: 5,
    price: 39.46,
    brand: brands.sweet,
    lifeStage: lifeStages.all,
    category: productCategories.vitamins,
    imgSrc: '/images/mock/products/vitamin1.jpg'
  },
  {
    id: 7,
    name: 'Bouncing-rattle-fun-thingy',
    description: 'A great toy for your cat.',
    rating: 3,
    price: 43.89,
    brand: brands.funCat,
    lifeStage: lifeStages.kitten,
    category: productCategories.toys,
    isPopular: true,
    imgSrc: '/images/mock/products/toy1.jpg'
  },
  {
    id: 8,
    name: 'Jacket "Fluffy Thing',
    description: 'High quality materials, perfect style, happy cat.',
    rating: 4,
    price: 51.29,
    brand: brands.superCat,
    lifeStage: lifeStages.adult,
    category: productCategories.clothes,
    imgSrc: '/images/mock/products/clothes1.jpg'
  }
]

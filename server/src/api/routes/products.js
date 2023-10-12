import express from 'express'
import mockdb from '../../db/index.js'
import { EntityDoesNotExistError } from '../../errors/EntityDoesNotExistError.js'

export const router = express.Router()

router.get('/:id', getProduct)
router.get('', getProducts)

function getProducts(req, res, next) {
  try {
    const { sortCategory, category, ...filters } = req.query
    const { products } = mockdb.data

    const filteredProductsByProductCategory = filterProductsByProductCategory(products, category)
    const filteredProductsByUserFilters = filterProductsByUserFilters(filteredProductsByProductCategory, filters)
    const sortedProducts = sortProducts(filteredProductsByUserFilters, sortCategory)


    res.status(200).send({
      status: 'success',
      data: sortedProducts
    })
  } catch (e) {
    next(e)
  }
}

function getProduct(req, res, next) {
  try {
    const { id } = req.params
    const { products } = mockdb.data

    const product = products.find(({ id: productId }) => +productId === +id)

    if (!product) {
      throw new EntityDoesNotExistError(`Product with id ${id}`)
    }

    res.status(200).send({
      status: 'success',
      data: product
    })
  } catch (e) {
    next(e)
  }
}

function filterProductsByProductCategory(products, category) {
  const { productCategories } = mockdb.data

  if (category === productCategories.all) {
    return products
  }

  if (category === productCategories.popular) {
    return products.filter(({ isPopular }) => isPopular)
  }

  return products.filter(({ category: productCategory }) => productCategory === category)
}

function sortProducts(products, sortCategory) {
  const { sortCategories } = mockdb.data

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

function filterProductsByUserFilters(products, filters) {
  const filterEntries = Object.entries(filters)

  return filterEntries
    .reduce((productsAcc, [filterName, filterValue]) => {
      if (!filterValue) {
        return productsAcc
      }

      if (filterName === 'priceMin') {
        return productsAcc
          .filter(({ price }) => ( +price >= +filterValue ))
      }

      if (filterName === 'priceMax') {
        return productsAcc
          .filter(({ price }) => ( +price <= +filterValue ))
      }

      return productsAcc
        .filter(({ [filterName]: productValue }) => filterValue.split(',').some(val => `${val}` === `${productValue.id}`))
    }, products)
}



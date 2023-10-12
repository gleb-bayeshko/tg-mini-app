import express from 'express'
import bot from '../../tg.js'

export const router = express.Router()

router.post('/create', createInvoice)

const USD_SMALLEST_UNIT_MULTIPLIER = 100

async function createInvoice(req, res, next) {
  try {
    const userId = req.body.userId
    const prices = prepareProducts(req.body.data)

    bot.telegram.createInvoiceLink(getInvoice(userId, prices))
      .then(invoiceLink => {
        res.status(200).send({
          status: 'success',
          data: { invoiceLink }
        })
      })
      .catch(e => next(e))
  } catch (e) {
    next(e)
  }
}

function getInvoice (id, prices) {
  return {
    title: 'Invoice',
    description: 'Cat products',
    payload: { unique_id: `${id}_${Number(new Date())}` },
    provider_token: process.env.PROVIDER_TOKEN,
    currency: 'USD',
    prices,
  }
}

function prepareProducts (receivedProducts) {
  return receivedProducts.map(({ price, title, count }) => ({
    label: title,
    amount: price * count * USD_SMALLEST_UNIT_MULTIPLIER
  }))
}


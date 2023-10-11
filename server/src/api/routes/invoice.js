import express from 'express'
import bot from '../../tg.js'

export const router = express.Router()

const USD_SMALLEST_UNIT_MULTIPLIER = 100

const getInvoice = (id, prices) => ({
  title: 'Invoice',
  description: 'Cat products',
  payload: { unique_id: `${id}_${Number(new Date())}` },
  provider_token: process.env.PROVIDER_TOKEN,
  currency: 'USD',
  prices,
})

const prepareProducts = (receivedProducts) => receivedProducts.map(({ price, title, count }) => ({
  label: title,
  amount: price * count * USD_SMALLEST_UNIT_MULTIPLIER
}))

router.post('/create', async (req, res) => {
  try {
    const userId = req.body.userId

    const prices = prepareProducts(req.body.data)

    const invoiceLink = await bot.telegram.createInvoiceLink(getInvoice(userId, prices))

    res.status(200).send({
      status: 'success',
      data: { invoiceLink }
    })
  } catch (error) {
    res.status(400).send({
      status: 'error',
      error: error?.response,
    })
  }
})


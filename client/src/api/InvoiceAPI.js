import request from 'api/request'

class InvoiceAPI {
  static #baseApiUrl = 'invoice'

  static async createInvoice(data) {
    return request.post(`${this.#baseApiUrl}/create`, data)
  }
}

export default InvoiceAPI

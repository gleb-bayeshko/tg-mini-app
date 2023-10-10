import request from 'api/request'

export const UserAPI = {
  async sendCartToInvoice(data) {
    return request.post('makeOrder', data)
  }
}

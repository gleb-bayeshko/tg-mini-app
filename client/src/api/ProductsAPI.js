import request from 'api/request'

class ProductsAPI {
  static #baseApiUrl = 'products'

  static async getProducts(params) {
    return request.get(this.#baseApiUrl, params)
  }

  static async getProduct(id) {
    return request.get(`${this.#baseApiUrl}/${id}`)
  }
}

export default ProductsAPI

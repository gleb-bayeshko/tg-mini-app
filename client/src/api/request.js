class Request {
  #baseUrl
  #method = {
    GET: 'GET',
    POST: 'POST',
  }

  constructor(baseUrl) {
    this.#baseUrl = baseUrl
  }

  async #customFetch(method, url, data) {
    let isError = false
    let isSuccess = true
    let errorMessage = ''
    let response = null

    const authData = window.Telegram?.WebApp?.initData
    const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id

    await fetch(`${this.#baseUrl}/${url}`, {
      method: method,
      headers: { 'Content-Type': 'application/json', },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        data,
        authData,
        userId
      }),
    })
      .then(async d => {
        response = await d.json()
        isSuccess = true
      })
      .catch(error => {
        isError = true
        errorMessage = error
      })

    return { isError, isSuccess, errorMessage, response: response }
  }

  async get(url) {
    return this.#customFetch(this.#method.GET, url)
  }

  async post(url, data) {
    return this.#customFetch(this.#method.POST, url, data)
  }
}

const request = new Request(import.meta.env.VITE_API_BASE_URL)

export default request

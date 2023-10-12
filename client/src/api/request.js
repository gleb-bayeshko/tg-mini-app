class Request {
  #baseUrl
  #method = {
    GET: 'GET',
    POST: 'POST',
  }

  constructor(baseUrl) {
    this.#baseUrl = baseUrl
  }

  async #customFetch(method, url, data, params) {
    Request.#setCookie()

    let isError = false
    let isSuccess = true
    let errorMessage = ''
    let response = null

    const searchParams = params ? `?${new URLSearchParams(params)}` : ''

    await fetch(`${this.#baseUrl}/${url}${searchParams}`, {
      method,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', },
      referrerPolicy: 'no-referrer',
      body: data && JSON.stringify({ data }),
    })
      .then(async d => {
        response = await d.json()
        isSuccess = true
      })
      .catch(error => {
        isError = true
        errorMessage = error.message
      })

    return { isError, isSuccess, errorMessage, response }
  }

  static #setCookie() {
    try {
      const authData = window.Telegram?.WebApp?.initData
      const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id

      const cookieValues = [{ authData }, { userId }]
        .filter(field => !!Object.values(field)[0])
        .map(field => Object.entries(field)[0].join('='))
        .join(';')

      document.cookie = `${cookieValues}; path=/`
    } catch (e) {
      console.log(e)
    }

  }

  async get(url, params) {
    return this.#customFetch(this.#method.GET, url, null, params)
  }

  async post(url, data, params) {
    return this.#customFetch(this.#method.POST, url, data, params)
  }
}

const request = new Request(import.meta.env.VITE_API_BASE_URL)

export default request

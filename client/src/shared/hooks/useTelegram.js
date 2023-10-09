import { useEffect, useState } from 'react'

function useTelegram() {
  const [isDarkTheme, setIsDarkTheme] = useState()

  useEffect(() => {
    window.Telegram.WebApp.onEvent('themeChanged', function () {
      setIsDarkTheme(this.colorScheme === 'dark')
      console.log(this)
    })

    const { colorScheme } = window.Telegram?.WebApp

    setIsDarkTheme(colorScheme)
  }, [])

  return { isDarkTheme }
}

export default useTelegram

import { useEffect, useState } from 'react'

function useColorTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState()

  useEffect(() => {
    window.Telegram.WebApp.onEvent('themeChanged', function () {
      setIsDarkTheme(this.colorScheme === 'dark')
    })

    const { colorScheme } = window.Telegram?.WebApp

    setIsDarkTheme(colorScheme)
  }, [])

  return isDarkTheme
}

export default useColorTheme

import { useEffect, useState } from 'react'

function useColorTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState()

  useEffect(() => {
    window.Telegram.WebApp.onEvent('themeChanged', function () {
      console.log(this)
      setIsDarkTheme(this.colorScheme === 'dark')
    })

    const { colorScheme } = window.Telegram?.WebApp

    setIsDarkTheme(colorScheme === 'dark')
  }, [])

  return isDarkTheme
}

export default useColorTheme

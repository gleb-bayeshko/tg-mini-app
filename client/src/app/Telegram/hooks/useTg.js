function useTg() {
  return {
    tgApp: window.Telegram.WebApp,
    cloudStorage: window.Telegram.WebApp.CloudStorage,
    isUserValid: window.Telegram.WebApp.initDataUnsafe || window.Telegram.WebApp.initDataUnsafe.query_id
  }
}

export default useTg

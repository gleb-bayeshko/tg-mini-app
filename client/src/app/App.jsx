import { Provider } from 'react-redux'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Telegram from 'app/Telegram/Telegram'
import { AppLayout } from './AppLayout'
import { store } from './store'
import './globalStyles/index.css'
import './App.css'

function App() {
  const isUserValid = true

  return isUserValid ? (
    <Provider store={store}>
      <Telegram>
        <div className="app">
          <AppLayout>
            <div className="app__content">
              <Outlet />
            </div>
          </AppLayout>
          <ScrollRestoration />
        </div>
      </Telegram>
    </Provider>
  ) : (
    <div>
      <div style={{ height: '100vh', width: '100wh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ textAlign: 'center', fontSize: '50px' }}>
          Please, try to run this cute Web App from <br />
          <a href="https://t.me/KittfullBot" style={{ color: 'blue' }}>this bot</a>
        </span>
      </div>
    </div>
  )
}

export default App

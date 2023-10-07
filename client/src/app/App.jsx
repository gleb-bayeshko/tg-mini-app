import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { store } from './store'
import './globalStyles/index.css'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppLayout>
          <div className="app__content">
            <Outlet />
          </div>
        </AppLayout>
      </div>
    </Provider>
  )
}

export default App

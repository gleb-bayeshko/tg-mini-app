import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/routes'
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
            <RouterProvider router={router} />
          </div>
        </AppLayout>
      </div>
    </Provider>
  )
}

export default App

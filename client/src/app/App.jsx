import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/routes'
import { Header } from 'shared/ui/Header'
import './globalStyles/index.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

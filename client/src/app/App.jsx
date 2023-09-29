import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/routes'
import { Header } from 'shared/ui/Header'
import './globalStyles/index.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App

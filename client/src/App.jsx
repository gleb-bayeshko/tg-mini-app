import { RouterProvider } from 'react-router-dom'
import Header from 'features/ui/Header/Header.jsx'
import router from './routes/router'
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

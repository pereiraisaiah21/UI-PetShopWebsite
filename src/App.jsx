import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/commom/Header'
import Footer from './components/commom/Footer'

import Home from './pages/Home'

import "./styles/main.scss"
import ProductDetail from './pages/ProductDetail'
import ShoppingCartPage from './pages/ShoppingCartPage'
import Category from './pages/Category'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/product/:id',
      element: <ProductDetail />
    },
    {
      path: '/cart',
      element: <ShoppingCartPage />
    },
    {
      path: '/category',
      element: <Category />
    },
  ])

function App() {

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App

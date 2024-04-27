import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/commom/Header'
import Footer from './components/commom/Footer'
import { useEffect } from 'react'

import Home from './pages/Home'

import "./styles/main.scss"
import ProductDetail from './pages/ProductDetail'
import ShoppingCartPage from './pages/ShoppingCartPage'
import Category from './pages/Category'
import { getDataFromFolder, addDataToFolder } from './utils/firebase'

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

  useEffect(() => {
    getDataFromFolder('products')
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch(error => {
        console.error("Error getting data:", error)
      })

    // const userData = {
    //   nome: "Maria Oliveira",
    //   email: "maria@example.com"
    // }

    // addDataToFolder('usuarios', userData)
    //   .then(() => {
    //     console.log("Dados adicionados com sucesso.")
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao adicionar dados:", error)
    //   })
  }, [])

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App

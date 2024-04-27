import React, { createContext, useState, useEffect, useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/commom/Header'
import Footer from './components/commom/Footer'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ShoppingCartPage from './pages/ShoppingCartPage'
import Category from './pages/Category'
import "./styles/main.scss"

import { FirebaseContext } from './utils/firebaseContext'

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

    const { getDataFromFolder, addDataToFolder } = useContext(FirebaseContext)
    const [userData, setUserData] = useState(null)
    console.log("** ", userData)

    useEffect(() => {
        getDataFromFolder('categories')
            .then(snapshot => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val())
                } else {
                    console.log("No data available")
                }
            })
            .catch(error => {
                console.error("Error getting data:", error)
            })
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

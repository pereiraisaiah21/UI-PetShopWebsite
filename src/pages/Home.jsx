import React, { createContext, useState, useEffect, useContext } from 'react'

import Highlight from '../components/commom/Highlight'
import ProductSection from '../components/commom/ProductSection'
import Supplier from '../components/carousel/Supplier'
import Banner from '../components/commom/Banner'
import BlogSection from '../components/commom/BlogSection'

import { FirebaseContext } from '../utils/firebaseContext'

import { getProductsFromIds, getImageUrl } from "../utils/products"

function Home() {

    const { getDataFromFolder, addDataToFolder } = useContext(FirebaseContext)
    const [homeSections, setHomeSections] = useState(null)
    const [products, setProducts] = useState(null)
    const [images, setImages] = useState(null)
    console.log("((", homeSections)

    useEffect(() => {

        getDataFromFolder('home-sections')
            .then(snapshot => {
                if (snapshot.exists()) {
                    const sectionsObject = snapshot.val()
                    const sectionsArray = Object.values(sectionsObject)
                    sectionsArray.sort((a, b) => a.order - b.order)
                    setHomeSections(sectionsArray)
                } else {
                    console.log("No data available")
                }
            })
            .catch(error => {
                console.error("Error getting data:", error)
            })

        getDataFromFolder('products')
            .then(snapshot => {
                if (snapshot.exists()) {
                    setProducts(snapshot.val())
                } else {
                    console.log("No products available")
                }
            })
            .catch(error => {
                console.error("Error getting products:", error)
            })

        getDataFromFolder('images')
            .then(snapshot => {
                if (snapshot.exists()) {
                    setImages(snapshot.val())
                } else {
                    console.log("No images available")
                }
            })
            .catch(error => {
                console.error("Error getting images:", error)
            })
    }, [])

    return (
        <>
            <Highlight />

            {homeSections && homeSections.map((section, index) => (
                <React.Fragment key={index}>
                    {section.type === 'banner' && images && (
                        <Banner imageUrl={getImageUrl(section.content[0], images)} />
                    )}
                    {section.type === 'product' && products && (
                        <ProductSection products={getProductsFromIds(section.content, products)} />
                    )}
                </React.Fragment>
            ))}

            {/* <Supplier /> */}
            {/* <Banner imageUrl="/public/images/banners/b2.png" /> */}
            {/* <ProductSection /> */}

            <BlogSection />
        </>
    )
}

export default Home

import React from 'react'

const ProductSection = ({
    products
}) => {
    // const products = [
    //     {
    //         id: 1,
    //         name: 'Produto 1',
    //         image: '/public/images/products/p1.png',
    //         description: 'Descrição do Produto 1',
    //         price: '$19.99',
    //     },
    //     {
    //         id: 2,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p2.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 3,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p3.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 4,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p4.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 5,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p5.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 6,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p6.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 7,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p7.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    //     {
    //         id: 8,
    //         name: 'Produto 2',
    //         image: '/public/images/products/p8.png',
    //         description: 'Descrição do Produto 2',
    //         price: '$29.99',
    //     },
    // ]

    return (
        <section className="ProductSection">
            <div className="container">
                <div className="ProductSection__header">
                    <div className="ProductSection__titles">
                        <h3 className="ProductSection__subtitle">Novidades</h3>
                        <h2 className="ProductSection__title">Nossos Produtos</h2>
                    </div>
                    <button className="ProductSection__view-more">Ver Mais</button>
                </div>
                <div className="ProductSection__list">
                    {products.map((product, index) => (
                        <div key={index} className="ProductSection__item">
                            <img src={product.image} alt={product.name} className="ProductSection__image" />
                            <div className="ProductSection__info">
                                <h3 className="ProductSection__productName">{product.name}</h3>
                                <p className="ProductSection__productDescription">{product.description}</p>
                                <p className="ProductSection__productPrice">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductSection

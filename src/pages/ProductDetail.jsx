import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

// SwiperCore.use([Navigation, Thumbs])

const ProductDetail = () => {

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__top">
          <div className="product-detail__left">
            <Swiper
              spaceBetween={10}
            >
              <SwiperSlide>
                <img src="http://placeholder.co/800" alt="Imagem 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://placeholder.co/800" alt="Imagem 2" />
              </SwiperSlide>
              {/* Adicione mais slides conforme necessário */}
            </Swiper>
            <Swiper
              className="product-detail__thumbs"
              slidesPerView={5}
              spaceBetween={16}
            >
              <SwiperSlide>
                <img src="http://placeholder.co/100" alt="Thumb 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://placeholder.co/100" alt="Thumb 2" />
              </SwiperSlide>
            </Swiper>
            <ul className="additional">
              <li>
                100 % health guarantee for pets
              </li>
              <li>
                100 % health guarantee for pets iden
              </li>
            </ul>
            <ul className="share">
              <li>
                <a href="">
                  
                </a>
              </li>
            </ul>
          </div>
          <div className="product-detail__right">
            <div className="breadcrumb">Home / Category / Product</div>
            <div className="sku">SKU: ABC123</div>
            <div className="name">Product Name</div>
            <div className="value">$99.99</div>
            <div className="buttons">
              <button className="buy-btn">Buy Now</button>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-detail__carousel">
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
          >
            <SwiperSlide>
              <img src="http://placeholder.co/300" alt="Carrossel Imagem 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="http://placeholder.co/300" alt="Carrossel Imagem 2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

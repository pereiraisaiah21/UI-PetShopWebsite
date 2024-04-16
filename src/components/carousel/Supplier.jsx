import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

// SwiperCore.use([Pagination])

const Supplier = () => {
  const carouselItems = [
    { id: 1, image: '/public/images/suppliers/s1.png', link: '/produto1' },
    { id: 2, image: '/public/images/suppliers/s2.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s3.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s4.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s5.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s6.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s7.png', link: '/produto2' },
    { id: 3, image: '/public/images/suppliers/s1.png', link: '/produto2' }, 
  ]

  return (
    <section className="CarouselSection">
      <div className="container">
        <div className="CarouselSection__header">
          <h2 className="CarouselSection__title">Destaques</h2>
          <button className="CarouselSection__view-all">Veja todos</button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}

          // pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className="CarouselSection__slide">
              <a href={item.link} className="CarouselSection__anchor">
                <img src={item.image} alt={`Item ${item.id}`} className="CarouselSection__image" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Supplier

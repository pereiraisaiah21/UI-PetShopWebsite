import React from 'react'

const Banner = ({ imageUrl }) => {
  return (
    <section className="Banner">
      <div className="Banner__container">
        <img src={imageUrl} alt="Banner" className="Banner__image" />
      </div>
    </section>
  )
}

export default Banner

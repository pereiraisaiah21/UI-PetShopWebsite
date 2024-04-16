import React from 'react'

const Highlight = () => {
  return (
    <section className="Highlight">
      <div className="container">
        <div className="Highlight__content">
          <div className="Highlight__text">
            <h2 className="Highlight__title">One more friend</h2>
            <h3 className="Highlight__subtitle">Thousands More Fun!</h3>
            <p className="Highlight__description">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>  
            <div className="Highlight__buttons">
              <button className="Highlight__button Highlight__button--blue">View Intro</button>
              <button className="Highlight__button Highlight__button--explore">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight

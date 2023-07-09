import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'>GitHub Repo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
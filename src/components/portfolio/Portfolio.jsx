import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

 const datas = [
  {
    id : 1,
    image: IMG1,
    title: 'UpEvent',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  },
  {
    id : 2,
    image: IMG2,
    title: 'DailyDoer',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  },
  {
    id : 3,
    image: IMG3,
    title: 'NewsVerse',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  },
  {
    id : 4,
    image: IMG4,
    title: 'Portfolio',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  },
  {
    id : 5,
    image: IMG5,
    title: 'ClimaCast',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  },
  {
    id : 6,
    image: IMG6,
    title: 'UpEvent',
    github: 'https://github.com/GagandeepCodes/UpEvent'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {
           datas.map(({id,image,title,github})=> {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>GitHub Repo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
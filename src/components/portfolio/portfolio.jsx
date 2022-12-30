import React from 'react'
import './portfolio.css'
import PortfolioIMG from '../../assets/PortfolioIMG.png'
import Foodzone from '../../assets/Foodzone.png'
import AWTD from '../../assets/AWTD.png'
import ComingSoon from '../../assets/ComingSoon.jpg'

const data = [
  {
    id: 1,
    image: PortfolioIMG,
    title: 'Personal Portfolio - ReactJs and CSS',
    github: 'https://github.com/keanbayneslow/keanbayneslow.github.io/tree/main/react-portfolio',
    demo: '',
  },
  {
    id: 2,
    image: Foodzone,
    title: 'Foodzone Webpage - Tailwind Css',
    demo: 'https://foodzone.io/',
  },
  {
    id: 3,
    image: AWTD,
    title: 'Podcast - Episodes Launching Soon',
    demo: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
  },
  {
    id: 4,
    image: ComingSoon,
    title: 'More Projects on the Way',
    github: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
    demo: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
  },
  {
    id: 5,
    image: ComingSoon,
    title: 'More Projects on the Way',
    github: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
    demo: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
  },
  {
    id: 6,
    image: ComingSoon,
    title: 'More Projects on the Way',
    github: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
    demo: 'https://www.youtube.com/watch?v=ipM00VEtfW0',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Projects Completed and Underway</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map (({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Page</a>
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
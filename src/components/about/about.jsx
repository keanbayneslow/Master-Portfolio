import React from 'react'
import './about.css'
import Kean3 from '../../assets/Kean3.png'
import {FaAward} from 'react-icons/fa'
import {GiHummingbird} from 'react-icons/gi'
import {FaDiceD20} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>#humble-brag</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Kean3} alt="Sonder Logo" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>12+ years working experience</small>
            </article>
            <article className='about_card'>
              <GiHummingbird className='about_icon'/>
              <h5>Nature</h5>
              <small>Life List of 100+ bird sightings</small>
            </article>
            <article className='about_card'>
              <FaDiceD20 className='about_icon'/>
              <h5>Campaigns</h5>
              <small>30+ dungeons plundered (D&D)</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum ipsum accusantium, quod quia, nobis impedit rem inventore itaque dicta adipisci, recusandae corporis. Tempora at ratione incidunt? Perferendis, atque quo.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
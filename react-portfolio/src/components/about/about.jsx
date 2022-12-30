import React from 'react'
import './about.css'
import sonder from '../../assets/sonder.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Just A Little</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={sonder} alt="Sonder Logo" />
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
              <FiUsers className='about_icon'/>
              <h5>Clients?</h5>
              <small>12+ years working experience</small>
            </article>
            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>Projects?</h5>
              <small>12+ years working experience</small>
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
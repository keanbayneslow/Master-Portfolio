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

          <p> When asked, I generally describe myself as the inspiration for Batman but slightly taller and less grumpy, or a walking encyclopedia of dad jokes, a connoisseur of puns and a master of the obscure reference. If you're lucky, you might even catch me doing a soft-shoe shuffle or perhaps the stanky leg. I'm human version of Sunday morning cartoons, a combination of Willy Wonka, Tony Stark and Stephen Fry or perhaps more accurately, someone who just enjoys life by trying to improve a little bit everyday.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
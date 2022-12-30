import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Keanbg from '../../assets/Keanbg.png'



const header = () => {
  return (
    <header>
      <div className="container header_container">
<h5>Hello I'm </h5>
<h1>Kean Bayneslow</h1>
<h5 className='text-light'>Shift Supervisor - Supporting Safety, Health and Wellbeing with Sonder</h5>
<CTA />
<HeaderSocials />

<div className="Keanbg">
  <img src={Keanbg} alt="Kean Bayneslow" />
</div>

<a href="#contact" className='scroll_down'>Scroll Down</a>


</div>

    </header>
  )
}

export default header
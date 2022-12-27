import React from 'react'
import './header.css'
import CTA from './CTA'
import Kean from '../../assets/Kean.JPG'
import HeaderSocials from './HeaderSocials'



const header = () => {
  return (
    <header>
      <div className="container header_container">
<h5>Hello I'm </h5>
<h1>Kean Bayneslow</h1>
<h5 className='text-light'>Shift Supervisor</h5>
<CTA />
<HeaderSocials />

<div className="Kean">
  <img src={Kean} alt="Kean Bayneslow" />
</div>

<a href="#contact" className='scroll_down'>Scroll Down</a>

</div>

    </header>
  )
}

export default header
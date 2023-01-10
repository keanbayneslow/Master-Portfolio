import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import Logo from '../../assets/Logo.png'
import Logo2 from '../../assets/Logo2.png'

const Footer = () => {
  return (
    <footer>
      <img className='footer_logo-img' src={Logo} alt="Kean Logo"/>
      <img className='footer_logo-imgb' src={Logo2} alt="Kean Logo"/>
      <a href="" className='footer_logo'>Kean Bayneslow</a>
      

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#skills">Skills</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#quotes">Quotes</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/kean-bayneslow/"><BsLinkedin/></a>
        <a href="https://github.com/keanbayneslow"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kean Bayneslow - All rights reserved</small>
      </div>



    </footer>
  )
}

export default Footer
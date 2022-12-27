import React from 'react'
import CV from '../../assets/CV.pdf'

const cta = () => {
  return (
    <div className='cta'>
    <a href={CV} download>Download CV</a>
    <a href='#contact'>Let's Chat</a>
</div>
  )
}

export default cta
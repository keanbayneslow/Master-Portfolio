import React from 'react'
import CV from '../../assets/CV.pdf'

const cta = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Chat</a>
</div>
  )
}

export default cta
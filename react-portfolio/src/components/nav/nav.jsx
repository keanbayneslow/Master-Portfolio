import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {GiBrainTentacle} from 'react-icons/gi'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#skills"><GiBrainTentacle/></a>
      <a href="#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default nav
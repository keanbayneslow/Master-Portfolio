import React from 'react'
import './skills.css'
import {BiCheck} from 'react-icons/bi'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Nunchuck skills, Bo hunting skills, Computer hacking skills. Employers want people who have great skills.</h5>
      <h2>My Skills</h2>

      <div className='container skills_container'>
        <article className='skills'>
          <div className='skills_head'>
            <h3>Business Skills</h3>
          </div>

          <ul className='skills_list'>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className='skills'>
          <div className='skills_head'>
            <h3>Developer Skills</h3>
          </div>

          <ul className='skills_list'>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Skills
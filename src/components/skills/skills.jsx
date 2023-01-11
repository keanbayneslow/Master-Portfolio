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
              <p>Project Management - strong theoretical, emerging practical</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Change Management - intermediate</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Data Analysis - emerging</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Team Management - intermadiate - strong</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Relationship Management - strong</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Flexibility</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Growth Mindset</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Resilience</p>
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
              <p>HTML - intermediate</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>CSS - intermediate</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Javascript - emerging</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>ReactJs - emerging</p>
            </li>
            <li>
              <BiCheck className='skills_list-icon' />
              <p>Git - emerging</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Skills
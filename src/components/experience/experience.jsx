import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Who, What, Where and How About Them Apples </h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_work">
          <h3>Work Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Shift Supervisor - Sonder</h4>
              <small>Oct 2022 - present</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Partners Manager - Helio</h4>
              <small>Jan 2019 - Oct 2022</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Frontend Intern - Foodzone</h4>
              <small>Dec 2021 - Jun 2022</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Technician - AJ Grant</h4>
              <small>April 2016 - Jan 2019</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Police officer - WA Police</h4>
              <small>Feb 2009 - Feb 2016</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_education">
          <h3>Education</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Masters - Project Management - CSU</h4>
              <small>Expected 2024</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Graduate Certificate - Computing - CSU</h4>
              <small>Expected 2023</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Graduate Certificate - Change Management - CSU</h4>
              <small>Completed 2021 </small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Graduate Certificate - Business - UOW</h4>
              <small>Completed 2019</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Diploma - Project Management</h4>
              <small>Completed 2017</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className= 'experience_details-icon'/>
              <div>
              <h4>Diploma - Public Safety (Policing)</h4>
              <small>Completed 2011</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
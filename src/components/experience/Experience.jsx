import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>Tailwind</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>NodeJS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>Express</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced__details-icons'/>
              <div className="experience__details-texts">
              <h4>Firebase</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
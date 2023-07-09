import React from 'react'
import './about.css'
import aboutImg from '../../assets/about.jpeg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fugit ducimus laborum voluptatibus hic necessitatibus consequuntur, rem sint dignissimos velit quod impedit dolor dicta eius illo mollitia magni perspiciatis doloremque.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fugit ducimus laborum voluptatibus hic necessitatibus consequuntur, rem sint dignissimos velit quod impedit dolor dicta eius illo mollitia magni perspiciatis doloremque.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum fugit ducimus laborum voluptatibus hic necessitatibus consequuntur, rem sint dignissimos velit quod impedit dolor dicta eius illo mollitia magni perspiciatis doloremque.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
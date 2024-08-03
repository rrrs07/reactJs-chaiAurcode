import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.svg';

const About = () => {
  return (
    <section className="about container section">
      <h2 className="section__title" id='about'>About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Rohit Sahu, frontend web developer from India. I have rich experience in website building and customizing.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">

              <div className="skills__titles">
                <h3 className="skills__name">FrontEnd Web Development</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"> </span>
              </div>
            </div>

            <div className="skills__data">
              
              <div className="skills__titles">
                <h3 className="skills__name">ReactJs</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react"> </span>
              </div>
            </div>

            <div className="skills__data">
              
              <div className="skills__titles">
                <h3 className="skills__name">NextJs</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage next"> </span>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About

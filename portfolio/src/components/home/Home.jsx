import React from 'react';
import './home.css';
import avatar from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div>
      <section className="home container" id="home">
        <div className="intro">
          <img src={avatar} className="home__img" loading="lazy"/>

          <h1 className="home__name">Rohit Sahu</h1>
          <span className="home__education">I'm a FrontEnd Developer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">Hire Me</a>

          <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home

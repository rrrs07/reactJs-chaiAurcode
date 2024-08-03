import React from 'react'

import './home.css';
function HeaderSocials() {
  return (
    <div className="home__socials">
       <a href="https://www.linkedin.com/in/rohitrrrs07/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
       </a>

       <a href="https://x.com/Rohitrrrs" className="home__social-link" target="_blank">
        <i class="fa-brands fa-x-twitter"></i>
       </a>
       
       <a href="https://github.com/rrrs07" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i>
       </a>
    </div>
  )
}

export default HeaderSocials

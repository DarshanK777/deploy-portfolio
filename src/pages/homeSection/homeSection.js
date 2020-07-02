import React from 'react'
import './homeSection.scss'

const HomeSection = () =>{
    return(
        <div className="home-container">
            <span id="home__hello">
              {/* es-lint-disabled-next-line */}
               Hello ✌  
            </span>
            <span id="home__tagline">
                I'm <strong>Darshan Kadam</strong>, a web-developer who loves to code websites and bring them to life.
            </span>
            <span id="home__contact">
                Get in touch : <a href="mailto:darshankadam714@gmail.com" target="_blank" rel="noopener noreferrer">darshankadam714@gmail.com</a>
            </span>
        </div>
    )
}

export default HomeSection
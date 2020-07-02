import React from 'react'
import './footer.scss'

const Footer  = () =>{
    return(
        <div className="footer">
            <div className="footer__links">
                <a href="mailto:darshankadam714@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span className="text">email</span>
                    <img src='/images/email.svg' alt="email"/>
                </a>
                <a href="https://twitter.com/darshankadam8" target="_blank" rel="noopener noreferrer">
                    <span className="text">Twitter</span>
                    <img src='/images/twitter.svg' alt="email"/>
                </a>
                <a href="https://www.linkedin.com/in/darshan-kadam-9ba013159/" target="_blank" rel="noopener noreferrer">
                    <span className="text">LinkedIn</span>
                    <img src='/images/linkedin.svg' alt="email"/>
                </a>
                <a href="https://github.com/DarshanK777" target="_blank" rel="noopener noreferrer">
                    <span className="text">Github</span>
                    <img src='/images/github.svg' alt="email"/>
                </a>
                
                 
            </div>
        </div>
    )
}


export default Footer
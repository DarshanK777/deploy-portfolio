import React from 'react'
import './footer.scss'

const Footer = () => {

    const imageUrls = {
        'email': '/portfolio/icons/email.svg',
        'twitter': '/portfolio/icons/twitter.svg',
        'linkedin': '/portfolio/icons/linkedin.svg',
        'github': '/portfolio/icons/github.svg'
    }


    return (
        <div className="footer">
            <div className="footer__links">
                <a href="mailto:darshankadam714@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span className="text">email</span>
                    <img src={new URL(imageUrls['email'], import.meta.url).href} alt="" />
                </a>
                <a href="https://twitter.com/dk5761" target="_blank" rel="noopener noreferrer">
                    <span className="text">Twitter</span>
                    <img src={new URL(imageUrls['twitter'], import.meta.url).href} alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/darshan-kadam-9ba013159/" target="_blank" rel="noopener noreferrer">
                    <span className="text">LinkedIn</span>
                    <img src={new URL(imageUrls['linkedin'], import.meta.url).href} alt="" />
                </a>
                <a href="https://github.com/dk5761" target="_blank" rel="noopener noreferrer">
                    <span className="text">Github</span>
                    <img src={new URL(imageUrls['github'], import.meta.url).href} alt="" />
                </a>


            </div>
        </div>
    )
}


export default Footer
import React from 'react'
import './footer.scss'

const Footer = () => {

    const imageUrls = {
        'email': '/icons/email.svg',
        'twitter': '/icons/twitter.svg',
        'linkedin': '/icons/linkedin.svg',
        'github': '/icons/github.svg'
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
import React,{useEffect, useRef} from 'react'
import './homeSection.scss';
import { TimelineLite, Power2, gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin)

const HomeSection = () =>{

    let image = useRef(null)
    let container = useRef(null);
    let imageAfter = CSSRulePlugin.getRule(".img-container:after");
    let imageBefore = CSSRulePlugin.getRule(".img-container:before");

    let tl = new TimelineLite()

    useEffect(()=>{
        tl.to(container, 0, {css: {visibility: "visible"}});
        tl.to(imageAfter, 1.2, { width: "0%", ease: Power2.easeInOut });
        tl.from(image, 1.4, {
            scale: 1.2,
            ease: Power2.easeInOut,
            delay: -1.3
          })
          .to(container, 0, { overflow: 'visible'})
          .to(imageBefore, 1.2, {visibility: 'visible', height: "100%", ease: Power2.easeInOut },);
       ;
    })

    return(
        <div className="home-container">
           <div className="img-container" ref={el =>{container = el}}>
            <img ref={el => {
                image = el;
              }} 
                src={process.env.PUBLIC_URL + '/images/01.jpg'} alt=""></img>
           </div>
            <div className="text-holder">
                
                <span id="home__hello">
                {/* es-lint-disabled-next-line */}
                Hola! 
                </span>
                <span id="home__tagline">
                    I'm <strong>Darshan Kadam</strong>, a Software Engineer/ Web Developer who loves to code websites and bring them to life.
                </span>
                <span id="home__contact">
                    Get in touch : <a href="mailto:darshankadam714@gmail.com" target="_blank" rel="noopener noreferrer">darshankadam714@gmail.com</a>
                </span>
            </div>
            
        </div>
    )
}

export default HomeSection
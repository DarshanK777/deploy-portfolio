import React from 'react'
import '../section.scss'

const BackgroundSection = () =>{
    return(
        <section className="background-container">
            <div className="section__title">
                Background
            </div>
            <div className="section__content">
                <p>
                    I am Web Developer looking for Job. I graduated doing B.Tech in Information Technology from Pillai's College of Engineering, New Panvel.
                </p>

                <p>
              {/* es-lint-disabled-next-line */}
                    I like to code to make something on web functional and make it to do what it meant to do.(with pinch of salt🤞)
                </p>
            </div>
        </section>
    )
}

export default BackgroundSection
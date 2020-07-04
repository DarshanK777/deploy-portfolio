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
                    I am Software Engineer/Developer looking for Job. I graduated doing B.Tech in Information Technology from Pillai's College of Engineering, New Panvel.
                </p>

                <p>
              {/* es-lint-disabled-next-line */}
                    I have created multiple Web Apps for last 2+ years. I have experience in Django/Flask/Node.js for Backend Development and React.js for Frontend Development.
                </p>
            </div>
        </section>
    )
}

export default BackgroundSection
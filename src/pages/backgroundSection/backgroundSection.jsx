import React from 'react'
import '../section.scss'

const BackgroundSection = () => {
    return (
        <section className="background-container">
            <div className="section__title">
                Background and Employment.
            </div>
            <div className="section__content">
                <p>
                    I am Developer looking for Job. I graduated doing B.Tech in Information Technology from Pillai's College of Engineering, New Panvel.
                </p>

                <p>
                    {/* es-lint-disabled-next-line */}
                    I have been employed as GIS Analyst for last 2 years. I have experience with React.js for last 1.2 years and looking for opportunities for getting more exposure in Frontend development to expand my skillset.
                </p>
            </div>
        </section>
    )
}

export default BackgroundSection
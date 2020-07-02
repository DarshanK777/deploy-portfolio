import React from 'react'
import '../section.scss'
import './educationSection.scss'

const EducationSection = () =>{
    return (
        <section className="education-container">
            <div className="section__title">
                Education
            </div>
            <div className="section__content">
                <div className='education-list'>
                    <div className="education">
                        <div className="time-place">
                            <div className="education-institute">
                                Pillai's college of Engineering
                            </div>
                            <div className="education-time">2016-2020</div>
                        </div>
                        <div className="education-marks">
                            6.79 cgpa
                        </div>
                    </div>

                    <div className="education">
                        <div className="time-place">
                            <div className="education-institute">
                                C.K.T jr college
                            </div>
                            <div className="education-time">2014-2016</div>
                        </div>
                        <div className="education-marks">
                            58.9%
                        </div>
                    </div>
                    <div className="education">
                        <div className="time-place">
                            <div className="education-institute">
                                New Horizon Public School
                            </div>
                            <div className="education-time">till 2014</div>
                        </div>
                        <div className="education-marks">
                            7.2 cgpa
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSection
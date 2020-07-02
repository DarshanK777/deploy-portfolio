import React from 'react'
import './skillSection.scss'
import '../section.scss'

const SkillSection  = () =>{
    return(
        <section className="section-container">
            <div className="section__title">
                Skills
            </div>
            <div className="section__content">
                <div className="skills">
                    <div className="skill_category">
                        <div className="label">
                            Languages
                        </div>
                        <ul>
                            <li className="item">
                                Python
                            </li>
                            <li className="item">
                                JavaScript
                            </li>
                            <li className="item">
                                Html
                            </li>
                            <li className="item">
                                Css3
                            </li>
                            <li className="item">
                                Sql
                            </li>
                        </ul>
                    </div>

                    <div className="skill_category">
                        <div className="label">
                            Frameworks
                        </div>
                        <ul>
                            <li className="item">
                                Django
                            </li>
                            <li className="item">
                                Flask
                            </li>
                            <li className="item">
                                Node.js
                            </li>
                            <li className="item">
                                React.js
                            </li>
                        </ul>
                    </div>

                    <div className="skill_category">
                        <div className="label">
                            Tools
                        </div>
                        <ul>
                            <li className="item">
                                PostMan
                            </li>
                            <li className="item">
                               Git & github
                            </li>
                            <li className="item">
                                Vs.code
                            </li>
                            <li className="item">
                                MongoDb & Atlas
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSection
import React from 'react'
import './projectSection.scss'
import '../section.scss'
import {data} from '../../data/projects'

const ProjectSection = () =>{
    return(
        <section className="project-container">
            <div className="section__title">
                Projects
            </div>
            <div className="section__content">
    
                {
                    data.reverse().map((value, index)=> {
                    return(
                        <div className="project" key={index}>
                            <div className="project__name">
                                {value.name}
                            </div>
                            <p>
                            {value.description} 
                            </p>
                            <div className="project__used">
                                {
                                    value.Ongoing ?
                                    <span className="ongoing">Ongoing</span>:
                                    null
                                }
                                {
                                    value.technologies.map((value, key) => <span className="used__item" key={key}>{value}</span>)
                                }
                                
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default ProjectSection
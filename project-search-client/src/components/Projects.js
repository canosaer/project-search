import React, { useContext, useState, useEffect } from 'react';
import projectData from '../store/projectData'
import { Context } from '../store/store'
import Filters from './Filters'
import axios from 'axios';

export default function Projects() {
    const [state, dispatch] = useContext(Context)
    const [projects, setProjects] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    const getProjects = async () => {

        let request = `http://localhost:1337/${state.activeTags[0]}`

        try {
        const response = await axios.get(request)
        setProjects(response.data)
        } catch (err) {
        console.log(err.message, err.code)
        }
    }

    useEffect(() => {
        getProjects()
    }, [projects]);

    return(
        <section className="projects" id="projects">
            <h3 className="projects__heading">Projects</h3>
            <Filters />
            <div className="projects__card-display">
                {projects.map((project, i) => {
                    const key = `project--${i}`

                    
                        return(
                            <article className="projects__card" key={key}>
                                <a className="projects__subheading" href={project.url} target="_blank">{project.name}</a>
                                <p className="projects__caption">{project.desc}</p>
                                <div className="projects__link-row">
                                    <a className="projects__link" href={project.url} target="_blank">View Site</a>
                                    <a className="projects__link" href={project.repo} target="_blank">View Code</a>
                                </div>
                            </article>
                        )

                    
                })}
            </div>
        </section>
    )
}
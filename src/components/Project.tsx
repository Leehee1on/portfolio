import React from 'react';
import '../assets/css/project.css';
import { projects } from '../utils/portfolio';
import ProjectCard from './ProjectCard';

function Project() {
    return (
        <section className="section--project" id="project">
            <div className="inner">

                <div className="project-title">
                    <p>{projects.title}</p>
                </div>
                <div className="project-subtitle">
                    <p>{projects.subTitle}</p>
                </div>

                <div className="project-cards">
                    {projects.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>

            </div>
        </section>
    );
}
export default Project;
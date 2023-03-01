import React from 'react';

export default function Project(props) {
    return (
        <section>
            {props.projects.map((project) => (
                <div className='project'>
                    <h3 className='d-flex align-items-center justify-content-center'>{project.title}</h3>
                    <img src={project.image} alt={project.title} className='projectImage' />
                    <div className='d-flex align-items-center justify-content-center'>
                        <a href={project.deployed} target="_blank" rel="noreferrer" className='btn btn-primary m-2'>Deployed Application</a>
                        <a href={project.repo} target="_blank" rel="noreferrer" className='btn btn-primary m-2'>GitHub Repo</a>
                    </div>
                </div>
            ))}
        </section>
    );
}
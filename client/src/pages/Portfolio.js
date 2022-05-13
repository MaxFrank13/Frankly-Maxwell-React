import React from 'react';
import projects from '../db/projects.json';


export default function Portfolio(props) {
  return (
    <section className='flex flex-col items-center gap-8'>
      {projects.map(project => (
      <section key={project.id} className='text-stone-900 bg-yellow-500 flex flex-col gap-2 items-center w-11/12 p-4 rounded-md max-w-lg shadow-rounded'>
        <h1 className='text-2xl font-bold'>{project.name}</h1>
        <a className='text-3xl text-stone-600 hover:text-stone-800 transition-all duration-300' href={project.github} target="_blank" rel="noreferrer"> 
          <i class="devicon-github-original"></i>
        </a>
        <div className='flex flex-col items-center'>
          <a href={project.link} target="_blank" rel="noreferrer">
            <img className='h-40 rounded-md hover:scale-95 transition-all duration-200 shadow-lg' src={project.image} alt={`screenshot of ${project.name}`} />
          </a>
          <div className='bg-sky-300 p-2 flex gap-2 rounded-xl'>
            {project.techIcons.map(icon => (
              <i className={`${icon} bg-stone-200 p-1 rounded`}></i>
            ))}
          </div>
        </div>
        <p className='px-12 py-2 font-semibold text-center'>{project.desc}</p>
      </section>
      ))}
    </section>
  )
}
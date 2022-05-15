import React from 'react';
import Project from '../components/Project';
import projects from '../db/projects.json';


export default function Portfolio(props) {
  return (
    <section className='flex flex-col items-center gap-8'>
      {projects.map((app, i) => (
        <Project
          key={i}
          project={app}
        />
        )
      )}
    </section>
  )
}
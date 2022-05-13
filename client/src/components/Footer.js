import React from 'react';

export default function Footer(props) {
  return (
    <footer className='w-full bg-stone-900 text-stone-100 flex justify-center gap-12 p-8 text-2xl'>
        <a href="https://www.linkedin.com/in/maxwell-frank-b42809227/" target="_blank" rel="noreferrer">
          <i className="devicon-linkedin-plain colored"></i>
        </a>
        <a href="https://twitter.com/CrayonProfessor/" target="_blank" rel="noreferrer">
          <i className="devicon-twitter-plain colored"></i>
        </a>
        <a href="https://github.com/MaxFrank13" target="_blank" rel="noreferrer">
          <i className="devicon-github-original"></i>
        </a>
    </footer>
  )
}
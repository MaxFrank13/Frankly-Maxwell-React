import React from 'react';
import resume from '../assets/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function Footer(props) {
  return (
    <footer className='w-full bg-stone-900 text-stone-100 flex justify-center gap-12 p-8 text-2xl'>
      <a className='text-sky-700 hover:text-sky-800' href="https://www.linkedin.com/in/maxwell-frank-b42809227/" target="_blank" rel="noreferrer">
        <i className="devicon-linkedin-plain"></i>
      </a>
      <a className='text-sky-500 hover:text-sky-700' href="https://twitter.com/CrayonProfessor/" target="_blank" rel="noreferrer">
        <i className="devicon-twitter-original"></i>
      </a>
      <a
        className='text-2xl text-yellow-300 hover:text-yellow-600'
        href={resume}>
        <FontAwesomeIcon
          icon={faFileLines}
        />
      </a>
    </footer>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='bg-yellow-400 w-full'>
      <div className='flex justify-center items-center py-2'>
        <p className='hidden xs:block w-1/3 text-center font-semibold'>Full Stack Software Engineer</p>
        <Link
          className='w-1/3 text-center'
          to='/'
        >
          <h1 className='text-2xl font-semibold'>Maxwell Frank</h1>
        </Link>
        <a className='text-3xl w-1/3 text-center' href='https://github.com/MaxFrank13' target="_blank" rel="noreferrer">
          <i className="devicon-github-original colored"></i>
        </a>

      </div>
      <nav className='flex justify-evenly font-medium text-lg bg-stone-900 text-stone-100 shadow-xl py-2'>
        <Link
          to='/about'
        >
          About
        </Link>
        <Link
          to='/Portfolio'
        >
          Portfolio
        </Link>
        <Link
          to='/contact'
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
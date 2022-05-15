import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

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
      <Navigation />
    </header>
  )
}
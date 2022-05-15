import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
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
  )
}
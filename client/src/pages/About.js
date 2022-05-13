import React from 'react';
import portrait from '../assets/images/portrait.jpg';

export default function About(props) {
  return (
		<section className='text-stone-100 bg-stone-900 border-2 border-yellow-100 text-lg w-11/12 sm:w-3/4 flex flex-col gap-4 p-4 max-w-xl mx-auto rounded-md'>
			<p>
				<img className='max-w-sm w-1/2 rounded-50p relative float-right shadow-2xl border-2 border-sky-100' src={portrait} alt="Portrait of Maxwell Frank" />
				A software engineer based out of Southern Maine. By calling on my past experience building from scratch and forming original compositions, I seek to provide a clean and intuitive user experience while employing reputable engineering practices. I am always open to explore new ideas and learn the latest technologies in order to succeed efficiently.
			</p>
			<p>
				My free time is spent outdoors. I enjoy hiking and spending time at the beach. However, the majority of
				my time outside is spent on a skateboard. I participate in long 
				<a className='text-purple-200' href="http://www.pavedwave.org/" target="_blank" rel="noreferrer"> distance skateboard events</a>.
			</p>
		</section>
  )
}
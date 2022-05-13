import React from 'react';

export default function Contact(props) {

  return (
    <section>
      <form className='flex flex-col w-11/12 xs:w-4/5 max-w-md mx-auto text-stone-100 font-medium gap-3 bg-stone-900 p-4 rounded-lg border-2 border-yellow-100'>
        <section className='flex flex-col gap-1'>
          <label className='pl-1' htmlFor='name'>Name:</label>
          <input className='rounded-md p-2 text-stone-900' type='text' id='name' placeholder='enter name here' required/>
        </section>
        
        <section className='flex flex-col gap-1'>
          <label className='pl-1' htmlFor='email'>Email:</label>
          <input className='rounded-md p-2 text-stone-900' type='email' id='email' placeholder='enter email address here' required/>
        </section>

        <section className='flex flex-col gap-1'>
          <label className='pl-1' htmlFor='message'>Message:</label>
          <textarea className='rounded-md p-2 text-stone-900' id='message' placeholder='message' rows='5' cols='33' required></textarea>
        </section>

        <section className='flex justify-center'>
          <button className='bg-yellow-600 text-stone-900 font-semibold hover:bg-yellow-900 hover:text-stone-100 shadow-rounded hover:shadow-pressed transition-colors duration-300 px-4 py-2 rounded-md'>submit</button>
        </section>
      </form>
    </section>
  )
}
import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (

    <div className='w-full bg-rose-400'>
     <h1 className='text-2xl font-bold '> Slice & Bites</h1> 
     <h2 className='text italic '> by Koki</h2>
     <nav>
        <ul className='flex justify-end p-0 m-0 space-x-5 right'>
        <li>
            <Link to ="/Home" className='hover:text-orange-700 font-bold p-5 my-5'> Home </Link>
            </li>
        <li>
            <Link to ="/Gallery"className='hover:text-orange-700 font-bold p-5'>Gallery</Link>
        </li>

        <li>
            <Link to ="/Order"className='hover:text-orange-700 font-bold p-5'>Order</Link>
        </li>
        <li>
            <Link to ="/ContactUs"className='hover:text-orange-700 font-bold p-5'>Contact Us</Link>
        </li>
        

        </ul>
     </nav>
     
    </div>
  );
}

export default Navbar
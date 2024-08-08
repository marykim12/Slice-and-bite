import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  return (
    <div  className='max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold mb-8'>Our Contact Information</h1>
      <p className='text-lg mb-4'>we'd love to hear from our customers.Your review is highly appreciated</p>
      <h2>You can reach us via:</h2>
      <div className='space-y-4'>
                <div className='flex items-center'>
                    <svg className='w-6 h-6 mr-3 text-blue-500' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z' />
                    </svg>
                    <p>Sokoni plaza,Kenyatta Avenue,Nakuru</p>
                </div>

                <div className='flex items-center'>
                    <svg className='w-6 h-6 mr-3 text-blue-500' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z' />
                    </svg>
                  <p>slice&bite@gmail.com</p>
                </div>

                <div className='flex items-center'>
                    <svg className='w-6 h-6 mr-3 text-blue-500' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z' />
                    </svg>
                    <p>0754413265</p>
                    </div>

                    
                        <h2>Follow Us</h2>
                        <div>
                        <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-pink-600'>
                    <FontAwesomeIcon icon={faInstagram} className='w-8 h-8' />
                </a>
                <a href='https://www.tiktok.com/@yourprofile' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-black'>
                    <FontAwesomeIcon icon={faTiktok} className='w-8 h-8' />
                </a>
                <a href='https://www.facebook.com/yourprofile' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-blue-600'>
                    <FontAwesomeIcon icon={faFacebook} className='w-8 h-8' />
                </a>
                    </div>
                </div>
    </div>
  );
}

export default ContactUs;

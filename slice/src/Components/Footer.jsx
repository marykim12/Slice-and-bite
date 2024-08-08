import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2024 Slice & Bites. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
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
    </footer>
  );
}

export default Footer;
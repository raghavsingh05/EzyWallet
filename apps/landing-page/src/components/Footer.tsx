'use client'
import XSocial from '../assets/icons/x-social.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Gmail from '../assets/icons/gmail.svg'
import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">© 2025 EzyWallet. All rights reserved</div>
          <ul className="flex justify-center gap-2.5 ">
            <li><XSocial /></li>
            <li><Linkedin /></li>
            <li><Gmail /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

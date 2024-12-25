'use client';

import XSocial from '../assets/icons/x-social.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Gmail from '../assets/icons/gmail.svg';

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">© 2025 EzyWallet. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <a className='hover:text-[#5D2CA8]' href="https://x.com/Rajraghav05" target="_blank" rel="noopener noreferrer">
                <XSocial />
              </a>
            </li>
            <li>
              <a className='hover:text-[#5D2CA8]' href="https://www.linkedin.com/in/raj-raghav-singh-195176271" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </li>
            <li>
              <a className='hover:text-[#5D2CA8]' href="mailto:rajraghav05@gmail.com" target="_blank" rel="noopener noreferrer">
                <Gmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

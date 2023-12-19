import React from 'react';
import { Link } from 'react-scroll';

//customs
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#' rel="noreferrer">
          <img src={Logo} alt='logo-img' className='h-20 w-100' />
        </a>

        <Link to='contact' smooth={true} duration={500} className='btn btn-sm py-4'>Work with me</Link>
      </div>
    </div>
  </header>;
};

export default Header;

import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='logo-img' className='h-20 w-100' />
        </a>

        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;

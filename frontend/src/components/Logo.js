import React from 'react';
import LOGO from '../assest/logo.png';

const Logo = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-2 m-4 rounded shadow-md'>
      <img
        src={LOGO}
        alt="Company Logo"
        width={100}
        height={100}
        className='mix-blend-multiply'
      />
    </div>
  );
};

export default Logo;

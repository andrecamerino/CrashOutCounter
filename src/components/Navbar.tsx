import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_5fr] p-8 text-center place-items-center">
      <p className='font-light text-2xl'>Cristelle Camerino</p>
      <h1 className='font-bold text-4xl md:text-3xl'>Crash Out Counter</h1>
    </div>
  );
};

export default Navbar;
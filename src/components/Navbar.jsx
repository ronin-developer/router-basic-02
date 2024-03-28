import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
   <div className='container mx-auto my-8 flex items-center justify-between h-24 border border-grey-500 rounded-2xl bg-slate-500'>
    <h2 className='mx-8'>Logo</h2>

    <ul className='flex gap-5 mx-8'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/product'>Products</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </ul>
   </div>
  );
}

export default Navbar;

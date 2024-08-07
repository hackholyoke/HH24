import React from 'react';
import Link from 'next/link';
// import { Link } from 'react-scroll';
import '/styles/menuBar.css';

const MenuBar = () => {
  return (
        <div className="menuBar">

        <a href='#home' className='item'>Home</a>
        <a href='#about' className='item'>About Us</a>
        <a href='#register' className='item'>Register</a>
        <a href='#challenges' className='item'>Challenges</a>
        <a href='#workshop' className='item'>Workshops</a>
        <a href='#speakers' className='item'>Speakers</a>
        <a href='#sponsors' className='item'>Sponsors</a>
        <a href='#schedule' className='item'>Schedule</a>

      </div>
   
  );
};

export default MenuBar;





import React from 'react';
import '/styles/compStyles/menuBar.css';

const MenuBar = () => {
  return (
        <div className="menuBar">

        <a href='#home' className='item'>Home</a>
        <a href='#about' className='item'>About</a>
        <a href='#schedule' className='item'>Schedule</a>
        <a href='#challenges' className='item'>Challenges</a>
        <a href='#speakers' className='item'>Speakers</a>
        <a href='#sponsors' className='item'>Sponsors</a>
        <a href='#faq' className='item'>FAQ</a>
        <a href='#team' className='item'>Meet the team</a>
        <a href='#register' className='item'>Register</a>

      </div>
   
  );
};

export default MenuBar;





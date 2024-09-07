"use client"
import React from 'react';
import './menuBar.css';
import { useRouter } from "next/navigation";

const MenuBar = () => {
  const router = useRouter();

  const handleClick = (hash) => {
    router.push(hash);
  }

  const handleRegisterClick = () => {
    setTimeout(() => {
      window.open('https://forms.gle/LiPSTWoEuJGuLpMz9', '_blank');
  }, 300)
  }

  return (
        <div className="menuBar">

        <a onClick={() => handleClick('/')} className='item' style={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => handleClick('/#about')} href='#about' className='item'>About</a>
        <a onClick={() => handleClick('/#schedule')} href='#schedule' className='item'>Schedule</a>
        <a onClick={() => handleClick('/#challenges')}  href='#challenges' className='item'>Challenges</a>
        <a onClick={() => handleClick('/#speakers')} href='#speakers' className='item'>Speakers</a>
        <a onClick={() => handleClick('/#sponsors')} href='#sponsors' className='item'>Sponsors</a>
        <a onClick={() => handleClick('/#faq')} href='#faq' className='item'>FAQ</a>
        <a onClick={() => handleClick('/team_page')}  className='item' style={{ cursor: 'pointer' }}>Meet the team</a>
        <a onClick={() => handleRegisterClick()} className='item'>Register</a>

      </div>
   
  );
};

export default MenuBar;





"use client"
import React from 'react';
import './menuBar.css';
import { useRouter } from "next/navigation";

const MenuBar = () => {
  const router = useRouter();

  const handleMeetTheTeamClick = () => {
    router.push('/team_page');
  };

  const handleHomeClick =() => {
    router.push('/')
  }
  return (
        <div className="menuBar">

        <a onClick={handleHomeClick} className='item' style={{ cursor: 'pointer' }}>Home</a>
        <a href='#about' className='item'>About</a>
        <a href='#schedule' className='item'>Schedule</a>
        <a href='#challenges' className='item'>Challenges</a>
        <a href='#speakers' className='item'>Speakers</a>
        <a href='#sponsors' className='item'>Sponsors</a>
        <a href='#faq' className='item'>FAQ</a>
        <a onClick={handleMeetTheTeamClick} className='item' style={{ cursor: 'pointer' }}>Meet the team</a>
        <a href='#register' className='item'>Register</a>

      </div>
   
  );
};

export default MenuBar;





"use client"
import React, { useState, useEffect } from 'react';
import './menuBar.css';
import { useRouter } from "next/navigation";

const MenuBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // Track if in mobile view
  const router = useRouter();

  // Handle resizing to show hamburger for screens under 900px
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900); // Update view based on width
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const handleClick = (hash) => {
    router.push(hash);
  };

  const handleRegisterClick = () => {
    setTimeout(() => {
      window.open('https://linktr.ee/hackholyoke?utm_source=linktree_admin_share', '_blank');
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className={`menuBar ${isMobileView ? 'hidden' : ''}`}>
        <a onClick={() => handleClick('/')} className='item' style={{ cursor: 'pointer' }}>Home</a>
        {/* <a onClick={() => handleClick('/schedule')} className='item' style={{ cursor: 'pointer' }}> Schedule</a> */}
        <a onClick={() => handleClick('/#challenges')}  href='#challenges' className='item'>Challenges</a>
        <a onClick={() => handleClick('/#speakers')}  href='#speakers' className='item'>Workshops</a>
        <a onClick={() => handleClick('/#sponsors')} href='#sponsors' className='item'>Sponsors</a>
        <a onClick={() => handleClick('/#faq')} href='#faq' className='item'>FAQ</a>
        <a onClick={() => handleClick('/team_page')} className='item' style={{ cursor: 'pointer' }}>Meet the team</a>
        <a onClick={() => handleRegisterClick()} className='item'>Register</a>
      </div>

        {/* Desktop Menu */}
      <div className={`smallMenuBar ${isMobileView ? 'hidden' : ''}`}>
        <a onClick={() => handleClick('/#about')} href='#about' className='item'>About</a>
        {/* <a onClick={() => handleClick('/schedule')} className='item' style={{ cursor: 'pointer' }}> Schedule</a> */}
        <a onClick={() => handleClick('/#challenges')} href='#challenges' className='item'>Challenges</a>

        <a onClick={() => handleClick('/team_page')} className='item' style={{ cursor: 'pointer' }}>Meet the team</a>
        <a onClick={() => handleRegisterClick()} className='item'>Register</a>
      </div>

      {/* Mobile Menu */}
      {isMobileView && (
        <div className="menuBarMobile">
          <div className="hamburger" onClick={toggleMobileMenu}>
            {/* Hamburger Icon */}
            <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
            <span className={isMobileMenuOpen ? 'bar open' : 'bar'}></span>
          </div>
          {/* Mobile Menu Items */}
          <div className={isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}>
            <a onClick={() => handleClick('/')} className='item' style={{ cursor: 'pointer' }}>Home</a>
            {/* <a onClick={() => handleClick('/schedule')} className='item' style={{ cursor: 'pointer' }}> Schedule</a> */}
            <a onClick={() => handleClick('/#challenges')} href='#challenges' className='item'>Challenges</a>
            <a onClick={() => handleRegisterClick()} className='item'>Register</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBar;
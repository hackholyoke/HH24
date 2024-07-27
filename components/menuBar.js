import React from 'react';
import Link from 'next/link';
import '../styles/menuBar.css';

const MenuBar = () => {
  return (
    <div className="menuBar">
      <Link  href="/team_page" className="item"> Home</Link>
      <Link  href="/about-us" className="item"> About Us</Link>
      <Link  href="/register" className="item"> Register</Link>
      <Link  href="/challenges" className="item"> Challenges</Link>
      <Link  href="/workshops" className="item"> Workshops</Link>
      <Link  href="/speakers" className="item"> Speakers</Link>
      <Link  href="/sponsors" className="item"> Sponsors</Link>
      <Link  href="/schedule" className="item"> Schedule</Link>
    </div>
  );
};

export default MenuBar;



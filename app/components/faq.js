"use client"

import React, { useState } from 'react';
import '/styles/faq.css';
import Image from 'next/image';
import What_is_HH_fold from '../assets/FAQ/What_is_HH_fold.png';
import What_is_HH_unfold from '../assets/FAQ/What_is_HH_unfold.png';
import Where_fold from '../assets/FAQ/Where_fold.png';
import Where_unfold from '../assets/FAQ/Where_unfold.png';
import Who_fold from '../assets/FAQ/Who_fold.png';
import Who_unfold from '../assets/FAQ/Who_unfold.png';
import Team_unfold from '../assets/FAQ/Team_unfold.png';
import Team_fold from '../assets/FAQ/Team_fold.png';
import Participate_unfold from '../assets/FAQ/Participate_unfold.png';
import Participate_fold from '../assets/FAQ/Participate_fold.png';
import Free_unfold from '../assets/FAQ/Free_unfold.png';
import Free_fold from '../assets/FAQ/Free_fold.png';



const FAQ = () => {
  const [isHHUnfolded, setIsHHUnfolded] = useState(false);
  const [isWhereUnfolded, setIsWhereUnfolded] = useState(false);
  const [isWhoUnfolded, setIsWhoUnfolded] = useState(false);
  const [isTeamUnfolded, setIsTeamUnfolded] = useState(false);
  const [isParticipateUnfolded, setIsParticipateUnfolded] = useState(false);
  const [isFreeUnfolded, setIsFreeUnfolded] = useState(false);

  const handleHHImageClick = () => {
    setIsHHUnfolded((prev) => !prev);
  };

  const handleWhereImageClick = () => {
    setIsWhereUnfolded((prev) => !prev);
  };

  const handleWhoImageClick = () => {
    setIsWhoUnfolded((prev) => !prev);
  };

  const handleTeamImageClick = () => {
    setIsTeamUnfolded((prev) => !prev);
  };

  const handleParticipateImageClick = () => {
    setIsParticipateUnfolded((prev) => !prev);
  };

  const handleFreeImageClick = () => {
    setIsFreeUnfolded((prev) => !prev);
  };


  return (
    <div>
      <div className="title">
        <h1>FAQs</h1>
      </div>
      <div className="image-container">
        <Image 
          src={isHHUnfolded ? What_is_HH_unfold : What_is_HH_fold} 
          width={650} 
          height={isHHUnfolded ?  300 : 85 } 
          onClick={handleHHImageClick} 
          alt="What is HH" 
          className='questionLeft'
        />

        {isHHUnfolded && (
          <div className='a
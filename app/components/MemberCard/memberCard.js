//TODO: Make a reuseable member card 
/**
 * Components of a reusable member card:
 *  a. Background Image - front
 *  d. Background Image - back
 *  b. Title (should be input)
 *  c. Name (input)
 *  d. Major (input)
 *  e. Class Year (input)
 *  f. Picture (input)
 *  g. "What are you most excited about HackHolyoke?" (input, on back BG)
 * 
 * 1479 px * 2030 px is the size of the whole card, 1081.11 px * 1621.66 px is the gray card
 */
'use client'
import React, { useState } from "react";
import Image from "next/image";
import Member_Card_Back from '../../assets/team/Member_Card_Back.png'
import './memberCard.css'

export const MemberCards = ({frontCard, mbrPic, name, pronouns, year, major, answer}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  return (
    <div className='card-container' onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className='card-front'>
          <div className='img_container'>
            <Image src={mbrPic} className='mbr_pics' alt={name} />
          </div>
          <Image src={frontCard} className='mbr_container' alt="Front card" />
          <div className="text-overlay">
              <h1 className="name_heading">{name}</h1>
              <p className="pronouns">Pronouns: {pronouns}</p>
              <p className="year">Class Year: {year}</p>
            </div>
        </div>
        <div className='card-back'>
          <Image src={Member_Card_Back} className='mbr_container_back' alt="Back card" />
          <div className="text-overlay_2">
            <p className="major">Major: </p>
            <p className="major_choice">{major}</p>
            <p className="question">What are you looking forward to at HackHolyoke?</p>
            <p className="answer">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


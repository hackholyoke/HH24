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

const FAQ = () => {
  const [isHHUnfolded, setIsHHUnfolded] = useState(false);
  const [isWhereUnfolded, setIsWhereUnfolded] = useState(false);
  const [isWhoUnfolded, setIsWhoUnfolded] = useState(false);

  const handleHHImageClick = () => {
    setIsHHUnfolded((prev) => !prev);
  };

  const handleWhereImageClick = () => {
    setIsWhereUnfolded((prev) => !prev);
  };

  const handleWhoImageClick = () => {
    setIsWhoUnfolded((prev) => !prev);
  };

  return (
    <div>
      <div className="title">
        <h1>FAQs</h1>
      </div>
      <div >
        <Image 
          src={isHHUnfolded ? What_is_HH_unfold : What_is_HH_fold} 
          width={isHHUnfolded ?  850 : 650 } 
          height={isHHUnfolded ?  300 : 85 } 
          onClick={handleHHImageClick} 
          alt="What is HH" 
          className='question'
        />

        {isHHUnfolded && (
          <div className='answer'>
            <p>HackHolyoke is a hackathon where creative thinkers, programmers, and innovators come together to build amazing projects over 24 hours.</p>
          </div>
        )}
      </div>


      {/* <div>
        <Image 
          src={isWhereUnfolded ? Where_unfold : Where_fold} 
          width={ isWhereUnfolded ? 850 : 650} 
          height={ isWhereUnfolded ? 300 : 85} 
          onClick={handleWhereImageClick} 
          alt="Where" 
          className='question'
        />
      </div> */}

        <div className="question-container" onClick={handleWhereImageClick}>
            <div  className={`image-container ${isWhereUnfolded ? 'unfold' : 'fold'}`}>
            <Image
                src={Where_fold}
                width={650}
                height={85}
                className={`folded-image ${isWhereUnfolded ? 'hide' : ''}`} 
            />
            </div>
            <div className={`unfolded-container ${isWhereUnfolded ? 'visible' : 'hidden'}`}>
                <Image
                src={Where_unfold}
                width={850}
                height={300}
                className="unfolded-image"
                />
            </div>
            
        </div>


      <div>
        <Image 
          src={isWhoUnfolded ? Who_unfold : Who_fold} 
          width={ isWhoUnfolded ? 850 : 650} 
          height={ isWhoUnfolded ? 300 : 85} 
          onClick={handleWhoImageClick} 
          alt="Who" 
          className='question'
        />
      </div>

    </div>
  );
};

export default FAQ;

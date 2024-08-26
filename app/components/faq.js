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
import Other_way_unfold from '../assets/FAQ/Other_way_unfold.png';
import Other_way_fold from '../assets/FAQ/Other_way_fold.png';
import Member_unfold from '../assets/FAQ/Member_unfold.png';
import Member_fold from '../assets/FAQ/Member_fold.png';
import Hackathon_unfold from '../assets/FAQ/Hackathon_unfold.png';
import Hackathon_fold from '../assets/FAQ/Hackathon_fold.png';
import FH_unfold from '../assets/FAQ/FH_unfold.png';
import FH_fold from '../assets/FAQ/FH_fold.png';
import Experience_unfold from '../assets/FAQ/Experience_unfold.png';
import Experience_fold from '../assets/FAQ/Experience_fold.png';
import FAQ_icon from '../assets/FAQ/FAQ_icon.png';



const FAQ = () => {
  const [isHHUnfolded, setIsHHUnfolded] = useState(false);
  const [isWhereUnfolded, setIsWhereUnfolded] = useState(false);
  const [isWhoUnfolded, setIsWhoUnfolded] = useState(false);
  const [isTeamUnfolded, setIsTeamUnfolded] = useState(false);
  const [isParticipateUnfolded, setIsParticipateUnfolded] = useState(false);
  const [isFreeUnfolded, setIsFreeUnfolded] = useState(false);
  const [isOtherWayUnfolded, setIsOtherWayUnfolded] = useState(false);
  const [isMemberUnfolded, setIsMemberUnfolded] = useState(false);
  const [isHackathonUnfolded, setIsHackathonUnfolded] = useState(false);
  const [isFHUnfolded, setIsFHUnfolded] = useState(false);
  const [isExperienceUnfolded, setIsExperienceUnfolded] = useState(false);



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

  const handleOtherWayImageClick = () => {
    setIsOtherWayUnfolded((prev) => !prev);
  };

  const handleMemberImageClick = () => {
    setIsMemberUnfolded((prev) => !prev);
  };

  const handleHackathonImageClick = () => {
    setIsHackathonUnfolded((prev) => !prev);
  };

  const handleFHImageClick = () => {
    setIsFHUnfolded((prev) => !prev);
  };

  const handleExperienceImageClick = () => {
    setIsExperienceUnfolded((prev) => !prev);
  };

  return (
    <div>
        <div className="title">
            <h1>FAQs</h1>
        </div>
        <div className="image-container">
            <Image 
            src={isHackathonUnfolded ? Hackathon_unfold : Hackathon_fold} 
            width={400} 
            height={ isHackathonUnfolded ? 300 : 85} 
            onClick={handleHackathonImageClick} 
            alt="Hackathon" 
            className='questionLeft'
            />

            <Image 
            src={isHHUnfolded ? What_is_HH_unfold : What_is_HH_fold} 
            width={650} 
            height={isHHUnfolded ?  300 : 85 } 
            onClick={handleHHImageClick} 
            alt="What is HH" 
            className='questionRight'
            />

            {isHHUnfolded && (
            <div className="answer">
                <h1>HackHolyoke is a hackathon where creative thinkers, programmers,
                    and innovators come together to build amazing projects over 24 
                    hours.
                </h1>
            </div>
            )}
        </div>


        <div className="image-container">
            <Image 
            src={isWhereUnfolded ? Where_unfold : Where_fold} 
            width={650} 
            height={ isWhereUnfolded ? 300 : 85} 
            onClick={handleWhereImageClick} 
            alt="Where" 
            className='questionLeft'
            />
            <Image 
            src={isWhoUnfolded ? Who_unfold : Who_fold} 
            width={400} 
            height={ isWhoUnfolded ? 300 : 85} 
            onClick={handleWhoImageClick} 
            alt="Who" 
            className='questionRight'
            />
            
        </div>


        <div className="image-container">
            <Image 
            src={isParticipateUnfolded ? Participate_unfold : Participate_fold} 
            width={650} 
            height={ isParticipateUnfolded ? 300 : 85} 
            onClick={handleParticipateImageClick} 
            alt="Participate" 
            className='questionLeft'
            />
            <Image 
            src={isTeamUnfolded ? Team_unfold : Team_fold} 
            width={650} 
            height={ isTeamUnfolded ? 300 : 85} 
            onClick={handleTeamImageClick} 
            alt="Team" 
            className='questionRight'
            />
           
        </div>

        <div className="image-container">
            <Image 
            src={isMemberUnfolded ? Member_unfold : Member_fold} 
            width={600} 
            height={ isMemberUnfolded ? 300 : 85} 
            onClick={handleMemberImageClick} 
            alt="Member" 
            className='questionLeft'
            />

            <Image 
            src={isExperienceUnfolded ? Experience_unfold : Experience_fold} 
            width={600} 
            height={ isExperienceUnfolded ? 300 : 85} 
            onClick={handleExperienceImageClick} 
            alt="Required Experience" 
            className='questionRight'
            />      
        </div>

        <div className="image-container">
             <Image 
            src={isFreeUnfolded ? Free_unfold : Free_fold} 
            width={550} 
            height={ isFreeUnfolded ? 300 : 85} 
            onClick={handleFreeImageClick} 
            alt="Free" 
            className='questionLeft'
            />

            <Image 
            src={isFHUnfolded ? FH_unfold : FH_fold} 
            width={550} 
            height={ isFHUnfolded ? 300 : 85} 
            onClick={handleFHImageClick} 
            alt="Food and Housing" 
            className='questionRight'
            />
        </div>

        <div className="image-container">
            <Image 
            src={isOtherWayUnfolded ? Other_way_unfold : Other_way_fold} 
            width={300} 
            height={ isOtherWayUnfolded ? 300 : 85} 
            onClick={handleOtherWayImageClick} 
            alt="Other ways to contribute" 
            className='questionLeft'
            />     
        </div>
    </div>
  );
};

export default FAQ;

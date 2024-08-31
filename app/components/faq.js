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
            <div className="answerRight" style={{ top: "50%"}}>
                <h1>HackHolyoke is a 24-hour hackathon hosted every year by students 
                  at Mount Holyoke College, one of the first historically women's colleges
                  in the US.
                </h1>
                <h1>
                  This year, HackHolyoke will be a fully in-person hackathon 
                  with tea breaks, information sessions, and workshops.
                </h1>
            </div>
            )}

            {isHackathonUnfolded && (
                  <div className="answerLeft" style={{ top: "48%"}}>
                      <h1>An event in which participants spend a condensed period 
                        of time (usually somewhere between 24 and 36 hours) working
                        on a project, attending workshops, networking, and generally
                        having a good time. At the end, the participants can present 
                        what they have worked on to judges to win prizes.
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

            {isWhoUnfolded && (
              <div className="answerRight" style={{ top: "37%"}}>
                  <h1>
                  HackHolyoke is open to all students currently 
                  enrolled in U.S - based colleges or community 
                  colleges, regardless of all other backgrounds
                  </h1>
              </div>
            )}

            {isWhereUnfolded && (
                  <div className="answerLeft" style={{ top: "42%"}}>
                      <h1>HackHolyoke 2024 is an in-person hackathon.
                         All of our major happenings and hacking will 
                         be in-person held at Mount Holyoke College 
                         and can be attended on-site.
                      </h1>
                  </div>
              )}         
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

            {isTeamUnfolded && (
            <div className="answerRight" style={{ top: "46%"}}>
                <h1>
                You do not need a team to participate.
                While we encourage people to work in teams, 
                hackers are perfectly welcome to go solo.
                If you want a team, but don't have one yet, 
                sign up and we will help you find a team at the start of the event!
                </h1>
            </div>
            )}

            {isParticipateUnfolded && (
              <div className="answerLeft" style={{ top: "50%"}}>
                <h1>We're now open for registration! If you're interested in
                   hacking with us, you can register here and then you will be
                    all set. This year's hackathon is digital-focus, so if you're 
                    not a Mount Holyoke student, all you will need is your computer
                    and an internet connection.
                </h1>
              </div>
            )}
           
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

            {isExperienceUnfolded && (
            <div className="answerRight" style={{ top: "48%"}}>
                <h1>
                Absolutely! We welcome everyone with a passion for learning 
                and a can-do attitude. For people with limited or no coding 
                experience who want to learn more, we will also have 
                beginner-friendly workshops.
                </h1>
            </div>
            )}

            {isMemberUnfolded && (
              <div className="answerLeft" style={{ top: "30%"}}>
                <h1>Each team is allowed to have up to 4 members.
                </h1>
              </div>
            )}
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

            {isFHUnfolded && (
              <div className="answerRight" style={{ top: "48%"}}>
                  <h1>
                  TBD
                  </h1>
              </div>
            )}

            {isFreeUnfolded && (
              <div className="answerLeft" style={{ top: "40%"}}>
                <h1>Yes, it is! You don't have to pay any fees in order 
                  to participate in HackHolyoke 2024. 
                  Just come, build amazing projects, and win prizes!
                </h1>
              </div>
            )}
        </div>

        <div className="image-container">
            <Image 
            src={isOtherWayUnfolded ? Other_way_unfold : Other_way_fold} 
            width={300} 
            height={ isOtherWayUnfolded ? 350 : 85} 
            onClick={handleOtherWayImageClick} 
            alt="Other ways to contribute" 
            className='questionLeft'
            /> 

            {isOtherWayUnfolded && (
              <div className="answerLeft" style={{ top: "55%"}}>
                <h1>HackHolyoke has many ways to participate!
                   You can be a mentor or judge for the event as well.
                    Sign up here if you're interested in becoming a mentor,
                    and here if you're interested in becoming a judge.
                    For current Mount Holyoke students, we're looking for on-site 
                    volunteers who can help us with our in-person components. 
                    Click here for more details. 
                </h1>
              </div>
            )}    
        </div>
    </div>
  );
};

export default FAQ;

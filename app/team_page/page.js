'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/teamPage.css';
import MenuBar from '../components/Menu/menuBar';
import SideMenu from '../components/SideMenu/sideMenu';
import LogisticsCarousel from '../components/LogisticCarousel/LogisticsCarousel';
import { MemberCards,CoChairCards } from '../components/MemberCard/memberCard';

import coChair from '../assets/team/coChair.png'
import zoey from '../assets/team_pics/zoey.png'
import yerim from '../assets/team_pics/yerim.png'

import logistic from '../assets/team/logistic.png'
import tia from '../assets/team_pics/tia_log.png'
import jennifer from '../assets/team_pics/jennifer_log.png'
import ruby from '../assets/team_pics/ruby_log.jpeg'
import eli from '../assets/team_pics/Eli_log.png'
import graceS from '../assets/team_pics/graceS_log.png'

import sponsor from '../assets/team/sponsor.png'
import nha from '../assets/team_pics/nha_spn.png'
import hana from '../assets/team_pics/hana_spn.png'

import design from '../assets/team/design.png'
import linxi from '../assets/team_pics/linxi_design.png'

import mkt from '../assets/team/mkt.png'
import graceL from '../assets/team_pics/graceL_mark.png'

import finance from '../assets/team/finance.png'
import eonbi from '../assets/team_pics/eonbi_fin.png'

import web from '../assets/team/web.png'
import adwoa from '../assets/team_pics/adwoa_web.png'
import dora from '../assets/team_pics/dora_web.png'

const TeamPage = () => {
    const logisticCards = [
        <MemberCards
        frontCard={logistic} mbrPic={tia}
        name={"Tia Mbabazi"} pronouns={"she/her"} year={"2025"}
        major ={"Computer Science"}
        answer ={"I'm most excited about the community that shall be built among the hackers and seeing all the great innovations that are developed! "}
        />,
        <MemberCards
        frontCard={logistic} mbrPic={jennifer}
        name={"Jennifer Zhuang"} pronouns={"she/her"} year={"2025"}
        major ={"Computer Science"}
        answer ={"I'm excited to witness everyone’s awesome ideas and see what kind of amazing projects people come up with!"}
        />,
        <MemberCards
        frontCard={logistic} mbrPic={ruby}
        name={"Ruby Sapkota"} pronouns={"she/her"} year={"2025"}
        major ={"Computer Science & Economics"}
        answer ={"I'm excited to see fresh faces at HackHolyoke 2024 coming up with innovative and impactful ideas, as well as experienced hackers returning to showcase their skills. I feel inspired to watch everyone work together to build cool products that push the boundaries of creativity and technology."}
        />,
        <MemberCards
        frontCard={logistic} mbrPic={eli}
        name={"Elizaveta Kozlova"} pronouns={"she/her"} year={"2025"}
        major ={"Computer Science & French"}
        answer ={"I am excited to see all the projects!"}
        />,
        <MemberCards
        frontCard={logistic} mbrPic={graceS}
        name={"Grace Suh"} pronouns={"she/her"} year={"2025"}
        major ={"Intended CS & Stat"}
        answer ={"Can't wait to meet new people and learn more from this unforgettable event and people!"}
        />
      ];
      const [isMobileView, setIsMobileView] = useState(false);

      useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 910px)');
        const handleMediaQueryChange = (event) => {
          setIsMobileView(event.matches);
        };
    
        // Set initial value
        setIsMobileView(mediaQuery.matches);
    
        // Listen for media query changes
        mediaQuery.addEventListener('change', handleMediaQueryChange);
    
        return () => {
          mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
      }, []);
    return(
        <div>
            <div className='teambg-assets'>
            <div> 
                <MenuBar/>
            </div>

            <div>
                <SideMenu/>
            </div>
    
            
            
            <h1 className='team_header'>Meet the Team</h1>
            <div id='co-chairs' className='team-container'>
                
                {/* <h1 className='heading'>Co-chairs</h1> */}
                
                
                <MemberCards frontCard={coChair} mbrPic={zoey} 
                name={"Zoey Hong"}
                pronouns={"she/her"} year ={"2025"}
                major ={"Computer Science"}
                answer={"I'm excited for our first fully in-person hackathon since COVID! I'm looking forward to meeting new people, mingling, and sharing passions. Hope you have a great time at HackHolyoke!"}/>

                <MemberCards frontCard={coChair} mbrPic={yerim} 
                name={"Yerim Oh"}
                pronouns={"she/her"} year ={"2025"}
                major ={"Statistics"}
                answer={"As a co-chair for HackHolyoke, I’m thrilled about this incredible opportunity we have to create something special together. I hope this event serves as a fantastic platform for you to connect with like-minded individuals who share your interests and passion. Looking forward to an amazing experience with all of you!"}
                />
               
            </div>

            <div id='logistics' className='team-container'>
                {/* <h1 className='heading'>Logistics</h1> */}
                {/* <LogisticsCarousel slides={logisticCards} options={{ loop: false }} /> */}
                {isMobileView ? (
                        <div className="stacked-cards">
                            {logisticCards.map((card, index) => (
                                <div key={index} className="card">
                                    {card}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <LogisticsCarousel slides={logisticCards} options={{ loop: false }} />
                    )}
            </div>

            <div id='sponsorship' className='team-container'>
                {/* <h1 className='heading'>Sponsorship</h1> */}
                <MemberCards frontCard={sponsor} mbrPic={nha}
                name={"Nha-Van Ngyuen"}
                pronouns={"she/her"} year ={"2027"}
                major={"Computer Science & Economics"}
                answer={"Seeing all the innovative products that hackers put out!"}
                />

                <MemberCards frontCard={sponsor} mbrPic={hana}
                name={"Hana Cho"}
                pronouns={"she/her"} year ={"2027"}
                major={"Economics"}
                answer={"The people coming! "}
                />
            </div>

            <div id='webmaster' className='team-container'>
                {/* <h1 className='heading'>Webmaster</h1> */}
                <MemberCards frontCard={web} mbrPic={dora}
                name={"Yu Wati Nyi"}
                pronouns={"she/her"} year ={"2025"}
                major={"Computer Science & Economics"}
                answer={"I am most excited to see how creative people can be through the projects they will be hacking soon!"}
                />

                <MemberCards frontCard={web} mbrPic={adwoa}
                name={"Adwoa Owusu"}
                pronouns={"she/her"} year ={"2026"}
                major={"Computer Science & French"}
                answer={"I'm excited to meet new people and see the amazing projects that participants come up with!"}
                />
            </div>

            <div id='finance' className='team-container'>
                {/* <h1 className='heading'>Finance</h1> */}
                <MemberCards frontCard={finance} mbrPic={eonbi}
                name={"Eonbi Choi"}
                pronouns={"she/her"} year ={"2025"}
                major={"Statistics"}
                answer={"I'm excited to see the creativity and collaboration that our HackHolyoke 2024 participants will showcase throughout the event."}
                />
            </div>

            <div id='marketing' className='team-container'>
                {/* <h1 className='heading'>Marketing</h1> */}
                <MemberCards frontCard={mkt} mbrPic={graceL}
                name={"Grace Lee"}
                pronouns={"she/her"} year ={"2025"}
                major={"Biology & Psychology"}
                answer={"I'm most excited to bring back HackHolyoke after its 2023 hiatus, and see everyone's great projects!"}
                />
            </div>

            <div id='design' className='team-container'>
                {/* <h1 className='heading'>Design</h1> */}
                <MemberCards frontCard={design} mbrPic={linxi}
                name={"Linxi Jiang"}
                pronouns={"she/her"} year ={"2027"}
                major={"Computer Science & Psychology"}
                answer={"I‘m most excited about the collaborative spirit of the event—coming together with like-minded individuals to work towards a common goal, creating projects that have the potential to make a real-world impact."}
                />
            </div>

        
            </div>
        </div>


    );

};
export default TeamPage;
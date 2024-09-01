'use client'
import React from 'react';
import '/styles/teamPage.css';
import MenuBar from '../components/menuBar';
import SideMenu from '../components/sideMenu';
import { MemberCards,CoChairCards } from '../components/memberCard';
import Image from 'next/image';
import Member_Card_Back from '../assets/team/Member_Card_Back.png'

import coChair from '../assets/team/coChair.png'
import zoey from '../assets/team_pics/zoey.png'
import yerim from '../assets/team_pics/yerim.png'

import logistic from '../assets/team/logistic.png'



const TeamPage = () => {
    return(
        <div>

            <div> 
                <MenuBar/>
            </div>

            <div>
                <SideMenu/>
            </div>

            <div id='co-chairs' className='container'>
                
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
                answer={"As a co-chair for HackHolyoke, I am thrilled about this incredible opportunity we have to create something special together. Working alongside a talented team, we have put in a lot of effort to ensure this hackathon is both memorable and impactful for everyone involved. I hope this event serves as a fantastic platform for you to connect with like-minded individuals who share your interests and passion. Looking forward to an amazing experience with all of you!"}
                />
               
            </div>

            <div id='logistics' className='container'>
                <h1 className='heading'>Logistics</h1>
            </div>

            <div id='sponsorship' className='container'>
                <h1 className='heading'>Sponsorship</h1>
            </div>

            <div id='webmaster' className='container'>
                <h1 className='heading'>Webmaster</h1>
            </div>

            <div id='finance' className='container'>
                <h1 className='heading'>Finance</h1>
            </div>

            <div id='marketing' className='container'>
                <h1 className='heading'>Marketing</h1>
            </div>

            <div id='design' className='container'>
                <h1 className='heading'>Design</h1>
            </div>

        

        </div>


    );

};
export default TeamPage;
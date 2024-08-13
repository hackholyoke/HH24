import React from 'react';
import '../styles/pages.css'; 
import '../styles/screenStyles/homeScreen.css'
import '../styles/compStyles/horizontalScroll.css';
import '../styles/screenStyles/statsPage.css'
import MenuBar from './components/menuBar';
import {HomeButtons,RegisterButton, TeamButton,LearnMoreButton} from './components/buttons/HomeButtons';
import Image from 'next/image';
import HH24_logo from './assets/HH24_logo.png';
import colleges_num from './assets/colleges_num.png';
import majors_num from './assets/majors_num.png';
import participants from './assets/particpants.png';
import years_num from './assets/years_num.png';


const HomePage = () => {
  return (
    <div>
      <div> 
         <MenuBar/>
      </div>
      
     <div className='container' id='home'>
         <Image src={HH24_logo} width={250} height={250} className='image'/>
         <p className='welcome'>Welcome To</p>
         <h1 className='heading_shadow'>Hack Holyoke 2024</h1>
         <h1 className='heading'>Hack Holyoke 2024!</h1>
         <p className='desc'>November 9-10 | Chapin Auditorium, South Hadley, MA </p>
         <div className='buttonLayout'>
            <RegisterButton/>
            <TeamButton/>
            <LearnMoreButton/>
         </div>
     </div>

     <div className='container' id='stats'>

        {/* PARTICIPANTS  */}
        <Image src = {participants} className="participants_num  stats_num" />
        <p className='participants stats_words'>participants</p>

        {/* PARTICPATING COLLEGES */}
        <Image src = {colleges_num} className='colleges_num stats_num' />
        <p className='colleges stats_words'>colleges</p>
        <p className='participating stats_words'>participating</p>

        {/* MAJORS */}
        <Image src = {majors_num}  className='majors_num stats_num' />
        <p className='majors stats_words'>majors</p>

        {/* YEAR */}
        <Image src = {years_num} className='years_num stats_num' />
        <p className='th stats_words'>th</p>
        <p className='year stats_words'>year running</p>

         {/* HEADING */}
        
         <div className = 'line-left'></div>
         <p className='stats_heading'>HackHolyoke 2022</p>
         <div className = 'line-right'></div>
        
         <p className='stats_heading_2'>in numbers</p>
        

        
     </div>

     <div className='container' id='aboutUs'>
        <h1 className='heading'>About Us </h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Challenges </h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Speakers</h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Workshops </h1>
     </div>

     <div className='container'>
        <h1 className='heading'>FAQs </h1>
        
     </div>

     <div className='container'>
        <h1 className='heading'>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;


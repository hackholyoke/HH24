import React from 'react';
import '../styles/pages.css'; 
import '../styles/compStyles/horizontalScroll.css';
import MenuBar from './components/menuBar';
import HomeScreen from './screens_components/home.js'
import AboutUS from './screens_components/about_us.js';
import StatsScreen from './screens_components/stats.js';
import SpeakerScreen from './screens_components/speaker_screen.js';
import ChallengeScreen from './screens_components/challenges.js';
import FAQ from './components/faq.js';

const HomePage = () => {
  return (
    <div>
      <div> 
         <MenuBar/>
      </div>
      
     <div className='container' id='home'>
         <HomeScreen/>
     </div>

     <div className='container' id='stats'>
            <StatsScreen/> 
     </div>

     <div className='container' id='about'>
        <AboutUS/>
     </div>

     <div id = "challenges" className='container'>
        {/* <h1 className='heading'>Challenges </h1> */}
        <ChallengeScreen/>
     </div>

     <div id = "speakers" className='container'>
        {/* <h1 className='heading'>Speakers</h1> */}
        <SpeakerScreen/>
     </div>

     <div id = "schedule" className='container'>
        <h1 className='heading'>Schedule </h1>
     </div>

      <div id = "faq">
         <FAQ/>
      </div>

     <div id= "sponsors" className='container'>
        <h1 className='heading'>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;


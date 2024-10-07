import React from 'react';
import '../styles/pages.css'; 
import '../styles/horizontalScroll.css';
import MenuBar from './components/Menu/menuBar.js';
import HomeScreen from './screens_components/Home/home.js'
import AboutUS from './screens_components/AboutUs/about_us.js';
import StatsScreen from './screens_components/Stats/stats.js';
import SpeakerScreen from './screens_components/Speaker/speaker_screen.js';
import ChallengeScreen from './screens_components/Challenges/challenges.js';
import FAQ from './components/FAQ/faq.js';
import Contact from './screens_components/Contacts/contact.js';


const HomePage = () => {
  return (
    <div>
      <div className='bg-assets'>

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
            <SpeakerScreen/>
         </div>

         <div id = "faq">
            {/* <FAQ/> */}
            <FAQScreen/>
         </div>

         <div id= "sponsors" className='container'>

         </div>
         <div id="contacts" className='container'>
            <Contact/>
         </div>
      </div>
      </div>

  );
};

export default HomePage;


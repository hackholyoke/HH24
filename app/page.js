import React from 'react';
import '../styles/pages.css'; 
import '../styles/compStyles/horizontalScroll.css';
import MenuBar from './components/menuBar';
import HomeScreen from './screens_components/home.js'
import AboutUS from './screens_components/about_us.js';
import StatsScreen from './screens_components/stats.js';
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

     <div className='container' id='aboutUs'>
        <AboutUS/>
     </div>

     <div id = "challenges" className='container'>
        <h1 className='heading'>Challenges </h1>
     </div>

     <div id = "speakers" className='container'>
        <h1 className='heading'>Speakers</h1>
     </div>

     <div id = "workshop" className='container'>
        <h1 className='heading'>Workshops </h1>
     </div>

     <div className='container'>
        <FAQ/>
     </div>

     <div id= "sponsors" className='container'>
        <h1 className='heading'>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;


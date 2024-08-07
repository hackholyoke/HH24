import React from 'react';
import '../styles/pages.css'; 
import '../styles/horizontalScroll.css';
import MenuBar from './components/menuBar';
import AboutUS from './about_us';


const HomePage = () => {
  return (
    <div>
      <div> 
         <MenuBar/>
      </div>
      
     <div id = "home" className='container'>
        <h1 className='heading'>Home Screen </h1>
     </div>

     <div id="about" className='container'>
        <AboutUS/>
     </div>

     <div  className='container'>
        <h1 className='heading'>Fast Facts</h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Meet the team </h1>
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
        <h1 className='heading'>FAQs </h1>  
     </div>

     <div id= "sponsors" className='container'>
        <h1 className='heading'>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;


import React from 'react';
import '../styles/pages.css'; 
import '../styles/horizontalScroll.css';
import MenuBar from '../components/menuBar';


const HomePage = () => {
  return (
    <div>
      <div> 
         <MenuBar/>
      </div>
      
     <div className='container'>
        <h1 className='heading'>Home Screen </h1>
     </div>

     <div className='container'>
        <h1 className='heading'>About Us </h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Fast Facts</h1>
     </div>

     <div className='container'>
        <h1 className='heading'>Meet the team </h1>
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
        <section> 
          Question 1
        </section>
        <section> 
          Question 2
        </section>
        <section> 
          Question 3
        </section>
     </div>

     <div className='container'>
        <h1 className='heading'>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;

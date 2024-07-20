import React from 'react';
import './pages.css'; 
import './horizontalScroll.css';


const HomePage = () => {
  return (
    <div>
     <div className='container'>
        <h1>Home Screen </h1>
     </div>


     <div className='container'>
        <h1>About Us </h1>
     </div>

     <div className='container'>
        <h1>Fast Facts</h1>
     </div>

     <div className='container'>
        <h1>Meet the team </h1>
     </div>

     <div className='container'>
        <h1>Challenges </h1>
     </div>

     <div className='container'>
        <h1>Speakers</h1>
     </div>

     <div className='container'>
        <h1>Workshops </h1>
     </div>

     <div className='container'>
        <h1>FAQs </h1>
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
        <h1>Contact Us</h1>
     </div>


    </div>
  );
};

export default HomePage;

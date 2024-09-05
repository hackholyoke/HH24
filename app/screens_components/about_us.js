import React from 'react';
import '/styles/screenStyles/about_us.css';


const AboutUS = () => {
  return (
    <>
     <div className="headerContainer">
        <p> What </p> 
        <p> is </p> 
        <p> HackHolyoke ? </p> 
      </div>

      <div className="textContainer">
        <p>
            HackHolyoke is a 24-hour hackathon hosted every year by students at Mount Holyoke College, one of the first
            historically women's colleges in the US. Initiated in 2014, we have strived to be an inclusive hackathon that
            unites young innovators from a variety of backgrounds. 
            With over 80% of HackHolyoke attendees identifying as women and/or first-time hackers, our hackathon aims to 
            represent what we hope the tech industry will look like.
        </p>
        <p>
            (HackHolyoke 2024 will take place on November 9-10th, 2024 fully in-person tea breaks, information sessions, 
            and workshops.)
        </p>
      </div>
     
    </>
  );
};

export default AboutUS;

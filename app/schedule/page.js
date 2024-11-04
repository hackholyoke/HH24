'use client';  // Ensure it's at the very top

import MenuBar from '../components/Menu/menuBar';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sat_schedule from '../assets/schedule/Nov9.png';
import sun_schedule from '../assets/schedule/Nov10.png';
import './schedule.css';  // Import your CSS file
import ScheduleMenu from '../components/ScheduleMenu/scheduleMenu';


export default function ScheduleScreen() {
  const [scheduleType, setScheduleType] = useState('SatSchedule'); // Default to Saturday

  // Add 'schedule' class to body only for this page
  useEffect(() => {
    document.body.classList.add('schedule');
    return () => {
      document.body.classList.remove('schedule'); // Clean up on unmount
    };
  }, []);

  // Function to handle schedule change
  const handleScheduleChange = (type) => {
    console.log('Schedule changed to:', type); // Add logging to check state update
    setScheduleType(type); // Update the schedule type
  };



  // Determine which schedule image to show
  const scheduleImage = scheduleType === 'SatSchedule' ? sat_schedule : sun_schedule;

  return (
    <div className ='sche-bg-assets'>
      <div className = 'sche-page-container' id='schedule'>
          <div>
            <MenuBar />
          </div>
        <div className="schedule-container">
          <div className="button-container">
            <ScheduleMenu onScheduleChange={handleScheduleChange} />
          </div>
          <div className="divider"></div> {/* Divider for separation */}
          <div className="schedule-image-wrapper">
            <Image 
              src={scheduleImage} 
              alt={scheduleType === 'SatSchedule' ? 'Saturday Schedule' : 'Sunday Schedule'}
              layout="responsive"
              className="schedule-image"
              priority={true}  // Force image loading to avoid lazy load issues
            />
          </div>
        </div>
      </div>
    </div>
  );
}
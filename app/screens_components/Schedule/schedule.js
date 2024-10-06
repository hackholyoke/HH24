'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import sat_schedule from '../../assets/schedule/Nov9.png';
import sun_schedule from '../../assets/schedule/Nov10.png';
import './schedule.css';  // Import your CSS file
import ScheduleMenu from '../../components/ScheduleMenu/ScheduleMenu';

export default function ScheduleScreen() {
  const [scheduleType, setScheduleType] = useState('SatSchedule'); // Default to Saturday

  // Function to handle schedule change
  const handleScheduleChange = (type) => {
    setScheduleType(type); // Update the schedule type
  };

  // Determine which schedule image to show
  const scheduleImage = scheduleType === 'SatSchedule' ? sat_schedule : sun_schedule;

  return (
    <div className="schedule-container">
      <div className="button-container">
        <ScheduleMenu onScheduleChange={handleScheduleChange} />
      </div>
      <div className="divider"></div> {/* Changed class to className */}
      <div className="schedule-image-wrapper">
        <Image 
          src={scheduleImage} 
          alt={scheduleType === 'SatSchedule' ? 'Saturday Schedule' : 'Sunday Schedule'}
          layout="responsive"
          width={1200} 
          height={800} 
          className="schedule-image"
        />
      </div>
    </div>
  );
}
'use client';
import React, { useState } from 'react';
import './ScheduleMenu.css'; // Import your button styles




const ScheduleMenu = ({ onScheduleChange }) => {
  const [activeButton, setActiveButton] = useState('SatSchedule'); // Default active button

  // Handle button click
  const handleClick = (scheduleType) => {
    setActiveButton(scheduleType); // Update the active button
    onScheduleChange(scheduleType); // Call the parent function to change the schedule
  };

  return (
    <div className="button-container">
      <button 
        onClick={() => handleClick('SatSchedule')} 
        className={`button sat-button ${activeButton === 'SatSchedule' ? 'active' : ''}`}
      />
      <button 
        onClick={() => handleClick('SunSchedule')} 
        className={`button sun-button ${activeButton === 'SunSchedule' ? 'active' : ''}`}
      />
    </div>
  );
};

export default ScheduleMenu;
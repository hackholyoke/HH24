'use client';
import React from 'react';
import './ScheduleMenu.css'; // Import your button styles

const ScheduleMenu = ({ onScheduleChange }) => {
  return (
    <div className="button-container">
      <button 
        onClick={() => onScheduleChange('SatSchedule')} 
        className="button sat-button"
      >
        {/* You can keep this empty since you don't want text */}
      </button>
      <button 
        onClick={() => onScheduleChange('SunSchedule')} 
        className="button sun-button"
      >
        {/* You can keep this empty since you don't want text */}
      </button>
    </div>
  );
};

export default ScheduleMenu;
import React from "react";
import './statsPage.css'
import Image from 'next/image';
import colleges_num from '../../assets/stats/colleges_num.png';
import majors_num from '../../assets/stats/majors_num.png';
import participants from '../../assets/stats/particpants.png';
import years_num from '../../assets/stats/years_num.png';

const StatsScreen =() =>{
    return(
        <div className="stats-container">
        {/* PARTICIPANTS  */}
        <Image src = {participants} className="participants_num  stats_num" />
        <p className='participants stats_words'>participants</p>

        {/* PARTICPATING COLLEGES */}
        <Image src = {colleges_num} className='colleges_num stats_num' />
        <p className='colleges stats_words'>colleges</p>
        <p className='participating stats_words'>participating</p>

        {/* MAJORS */}
        <Image src = {majors_num}  className='majors_num stats_num' />
        <p className='majors stats_words'>majors</p>

        {/* YEAR */}
        <Image src = {years_num} className='years_num stats_num' />
        <p className='th stats_words'>th</p>
        <p className='year stats_words'>year running</p>

         {/* HEADING */}
        
         <div className = 'line-left'></div>
         <p className='stats_heading'>HackHolyoke 2022</p>
         <div className = 'line-right'></div>
        
         <p className='stats_heading_2'>in numbers</p>
        </div>

    );
}

export default StatsScreen;
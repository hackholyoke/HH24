import React from 'react';
import '/styles/teamPage.css';
import MenuBar from '../components/menuBar';
import SideMenu from '../components/sideMenu';

const TeamPage = () => {
    return(
        <div>

            <div> 
                <MenuBar/>
            </div>

            <div>
                <SideMenu/>
            </div>

            <div id='co-chairs' className='container'>
                <h1 className='heading'>Co-chairs</h1>
            </div>

            <div id='logistics' className='container'>
                <h1 className='heading'>Logistics</h1>
            </div>

            <div id='sponsorship' className='container'>
                <h1 className='heading'>Sponsorship</h1>
            </div>

            <div id='webmaster' className='container'>
                <h1 className='heading'>Webmaster</h1>
            </div>

            <div id='finance' className='container'>
                <h1 className='heading'>Finance</h1>
            </div>

            <div id='marketing' className='container'>
                <h1 className='heading'>Marketing</h1>
            </div>

            <div id='design' className='container'>
                <h1 className='heading'>Design</h1>
            </div>

        

        </div>


    );

};
export default TeamPage;
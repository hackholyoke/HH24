import React from "react";
import './homeScreen.css'
import Image from 'next/image';
import HH24_logo from '../../assets/HH24_logo.png';
import {HomeButtons,RegisterButton, TeamButton,LearnMoreButton, JoinSlackButton} from '../../components/buttons/HomeButtons';

const HomeScreen = () =>{
    return(
       <div>
        <Image src={HH24_logo} width={250} height={250} layout='responsive' className='image'/>
        <p className='welcome'>Welcome To</p>
        <h1 className='heading_shadow'>Hack Holyoke 2024</h1>
        <h1 className='heading'>Hack Holyoke 2024!</h1>
        <p className='desc'>November 9-10 | Chapin Auditorium, South Hadley, MA </p>
        <div className='buttonLayout'>
                <RegisterButton/>
                <TeamButton/>
                <LearnMoreButton/>
                <JoinSlackButton/>
            </div>
       </div> 

    );
}

export default HomeScreen;
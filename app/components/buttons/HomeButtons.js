'use client'

import React from "react";
import { useState } from "react";
import '/styles/compStyles/buttons.css'
import { useRouter } from "next/navigation";


export const HomeButtons = ({onClick, children})=>{
    return(
        <button onClick={onClick} className='homeButtons'>
            {children}
        </button>
    );
};

export const RegisterButton = () =>{
    const[clicked, setClicked] = useState(false);
    function handleRegisterPress(){
        setClicked(true);
        setTimeout(() => {
            window.open('https://forms.gle/LiPSTWoEuJGuLpMz9', '_blank');
        }, 300)
    }
    return(
        <HomeButtons onClick={handleRegisterPress}>
            Register
        </HomeButtons>
    )
}

export const TeamButton = () =>{
    const[clicked, setClicked] = useState(false);
    const router = useRouter(); // Initialize router
    function handleTeamPress(){
        setClicked(true);
        setTimeout(() => {
            router.push('/team_page'); // Navigate to another page
          }, 300);
    }
    return(
        <HomeButtons onClick={handleTeamPress}>
            Meet the Team
        </HomeButtons>
    )
}

export const LearnMoreButton = () =>{
    const[clicked, setClicked] = useState(false);
    const router = useRouter(); // Initialize router
    function handleLearnPress(){
        setClicked(true);
        setTimeout(() => {
            const targetElement = document.querySelector('#stats');
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Align to the start of the element
              });
            }
          }, 300);
    }
    return(
        <HomeButtons onClick={handleLearnPress}>
            Learn More
        </HomeButtons>
    )
}

/*export default {HomeButtons, RegisterButton};*/
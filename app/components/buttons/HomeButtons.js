'use client'

import React from "react";
import { useState } from "react";
import '/styles/compStyles/buttons.css'
import { useRouter } from "next/navigation";
import Image from "next/image";

import register_a from '/app/assets/buttons/register_a.png'
import register_b from '/app/assets/buttons/register_b.png'
import meet_a from '/app/assets/buttons/meet_a.png'
import meet_b from '/app/assets/buttons/meet_b.png'
import learn_a from '/app/assets/buttons/learn_a.png'
import learn_b from '/app/assets/buttons/learn_b.png'
import join_a from '/app/assets/buttons/join_a.png'
import join_b from '/app/assets/buttons/join_b.png'

export const HomeButtons = ({onClick, normalImage, hoverImage})=>{
    return(
        <button onClick={onClick} className='homeButtons'>
            <Image src={normalImage} className='button-normal' />
            <Image src={hoverImage} className='button-hover' />
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
        <HomeButtons onClick={handleRegisterPress} normalImage={register_b} hoverImage={register_a} />
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
        <HomeButtons onClick={handleTeamPress} normalImage={meet_b} hoverImage={meet_a}/>
          
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
        <HomeButtons onClick={handleLearnPress} normalImage={learn_b} hoverImage={learn_a}/>
    )
}

export const JoinSlackButton = () =>{
    return(
        <HomeButtons normalImage={join_b} hoverImage={join_a}/>
    )
}

/*export default {HomeButtons, RegisterButton};*/
'use client'

import React, { useState } from "react";
import './buttons.css'
import { useRouter } from "next/navigation";
import Image from "next/image";

import register_a from '../../assets/buttons/register_a.png'
import register_b from '../../assets/buttons/register_b.png'
import meet_a from '../../assets/buttons/meet_a.png'
import meet_b from '../../assets/buttons/meet_b.png'
import learn_a from '../../assets/buttons/learn_a.png'
import learn_b from '../../assets/buttons/learn_b.png'
import join_a from '../../assets/buttons/join_a.png'
import join_b from '../../assets/buttons/join_b.png'


const HomeButtons = ({ onClick, normalImage, hoverImage, label}) => {

    return (
        <button onClick={onClick} className='homeButtons' aria-label={label}>
            <Image src={normalImage} className='button-normal' alt="" />
            <Image src={hoverImage} className='button-hover' alt="" />
        </button>
    );
};

export const RegisterButton = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter(); // Initialize router
    function handleRegisterPress() {
        setClicked(true);
        setTimeout(() => {
            // window.open('https://forms.gle/xXXddv89HPbujm7g7', '_blank');
            router.push('/registration'); // Navigate to another page
        }, 300);

    }

    return (
        <HomeButtons onClick={handleRegisterPress} normalImage={register_b} hoverImage={register_a} label="Register"/>
    )
}

export const TeamButton = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter(); // Initialize router
    function handleTeamPress() {
        setClicked(true);
        setTimeout(() => {
            router.push('/team_page'); // Navigate to another page
        }, 300);
    }
    return (
        <HomeButtons onClick={handleTeamPress} normalImage={meet_b} hoverImage={meet_a} label="Team" />


    )
}

export const LearnMoreButton = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter(); // Initialize router
    function handleLearnPress() {
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
    return (
        <HomeButtons onClick={handleLearnPress} normalImage={learn_b} hoverImage={learn_a} label="Learn More"/>
    )
}


export const JoinDiscordButton = () => {
    const [clicked, setClicked] = useState(false);
    function handleJoinPress() {
        setClicked(true);
        setTimeout(() => {
            window.open('https://discord.gg/QG4jccjS', '_blank');
        }, 300);
    }
    return (
        <HomeButtons onClick={handleJoinPress} normalImage={join_b} hoverImage={join_a} label="Join Discord"/>

    )
}

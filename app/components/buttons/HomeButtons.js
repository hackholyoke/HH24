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

const HomeButtons = ({ onClick, normalImage, hoverImage }) => {
    return (
        <button onClick={onClick} className='homeButtons'>
            <Image src={normalImage} priority={true} className='button-normal' />
            <Image src={hoverImage} priority={true} className='button-hover' />
        </button>
    );
};

export const RegisterButton = () => {
    const [clicked, setClicked] = useState(false);
    function handleRegisterPress() {
        setClicked(true);
        setTimeout(() => {
            window.open('https://forms.gle/xXXddv89HPbujm7g7', '_blank');
        }, 300);
    }

    return (
        <HomeButtons onClick={handleRegisterPress} normalImage={register_b} hoverImage={register_a} />
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
        <HomeButtons onClick={handleTeamPress} normalImage={meet_b} hoverImage={meet_a} />
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
        <HomeButtons onClick={handleLearnPress} normalImage={learn_b} hoverImage={learn_a} />
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
        <HomeButtons onClick={handleJoinPress} normalImage={join_b} hoverImage={join_a} />
    )
}

'use client'
import React from "react";
import Image from "next/image";
import ChallengeCarousel from "../../components/ChallengeCarousel/ChallengeCarousel.js";
import { ChallengeCard } from "../../components/ChallengeCard/challengeCard.js";
import useEmblaCarousel from 'embla-carousel-react'
import edu from '../../assets/challenges/edu.png'
import data from '../../assets/challenges/data.png'
import envior from '../../assets/challenges/envior.png'
import finance from '../../assets/challenges/finance.png'
import game from '../../assets/challenges/game.png'
import health from '../../assets/challenges/health.png'
import './challengeScreen.css'

const challengeCards = [
    <ChallengeCard 
    pic={edu} 
    description={"This challenge is designed to be accessible and enjoyable for those new to hackathons. It focuses on creating platforms that teach people about topics they are passionate about. Whether coding, cooking, music, or any other subject, your mission is to create an engaging educational tool that helps others learn."}
    />,
    <ChallengeCard 
    pic={data} 
    description={"In today's world, data is the key to unlocking innovative solutions to complex problems. We challenge you to harness the power of data and predictive models to create impactful solutions. Whether it's predicting natural disasters, forecasting disease outbreaks, or optimizing resources, your mission is to develop a data-driven project that can make a significant difference."}
    />,
    <ChallengeCard 
    pic={envior} 
    description={"Participants will develop projects addressing environmental issues and/or promoting sustainability. Solutions can focus on waste management, renewable energy, conservation, climate change, pollution reduction, carbon footprint tracking, or environmental education. The goal is to create tools, applications, or systems that positively impact the environment and encourage sustainable practices."}
    />,
    <ChallengeCard 
    pic={finance} 
    description={"Participants will develop projects aimed at improving financial management and literacy. Your solution can address personal finance, business finance, investment strategies, or educational resources that help users understand and navigate the complex world of finance. The goal is to create tools that make financial management more accessible, effective, and secure."}
    />,
    <ChallengeCard 
    pic={game} 
    description={"Participants will work together in teams to create a game that demonstrates innovation in one or more aspects. Your game can be for any platform and can belong to any genre. The key is to leverage your creativity and technical skills to build a game that offers a fresh and engaging experience."}
    />,
    <ChallengeCard 
    pic={health} 
    description={"Participants are challenged to develop projects that aim to improve overall health and wellness. Your solution can address physical health, mental well-being, lifestyle enhancements, or even innovative ways to encourage wellness through travel and tourism. The key is to create something that helps individuals lead healthier, happier, and more fulfilling lives."}
    />
  ];

const ChallengeScreen =() =>{
    return(
        <div >
            <h1 className="challenge-heading">Challenges</h1>
            <ChallengeCarousel slides={challengeCards} options={{ loop: true }} />
        </div>
    
    );
}

export default ChallengeScreen;
'use client'
import React from "react";
import Image from "next/image";
import '/styles/compStyles/challengeCard.css'
import edu from '../assets/challenges/edu.png'

export const ChallengeCard =({pic, description}) =>{
    return(
    <div className="c-card-container">
        <div className="card">
        <Image src={pic} className="cardPic"/>
        <div className="text-overlay-challenge">
            <p className ="challenge-description">
                {description}
            </p>
        </div>
        </div>
    </div>
    );
}
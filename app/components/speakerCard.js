'use client'
import React from "react";
import Image from "next/image";
import '/styles/compStyles/speakerCard.css'
import speakerCardPic from '../assets/speakerCardPic.png'

export const SpeakerCard = () =>{
    return(
        <div className = "card">
            <Image src ={speakerCardPic} className="card-pic"/>
            <div className = "text-overlay">
                <h1 className="speakerName">Slide 1</h1>
            </div>
        </div>

    );
}


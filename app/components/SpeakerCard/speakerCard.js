'use client'
import React from "react";
import Image from "next/image";
import './speakerCard.css'
import speakerCardPic from '../../assets/speakerCardPic.png'

export const SpeakerCard = ({speakerPic, speakerName, speakerDesc}) =>{
    return(
        <div className = "speaker-card">
            
            <div className="speaker-pic-container">
                <Image src ={speakerPic} className="speaker-pic"/>
            </div>
            <Image src ={speakerCardPic} className="card-pic"/>
            <div className = "text-overlay-speaker">
                <h1 className="speakerName">{speakerName}</h1>
                <p className="speakerDesc">{speakerDesc}</p>
            </div>
        </div>

    );
}


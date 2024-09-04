'use client'
import React from "react";
import Image from "next/image";
import '/styles/compStyles/speakerCard.css'
import speakerCardPic from '../assets/speakerCardPic.png'

export const SpeakerCard = ({speakerPic, speakerName, speakerDesc}) =>{
    return(
        <div className = "card">
            <Image src ={speakerCardPic} className="card-pic"/>
            <div className="speaker-pic-container">
                <Image src ={speakerPic} className="speaker-pic"/>
            </div>

            <div className = "text-overlay-speaker">
                <h1 className="speakerName">{speakerName}</h1>
                <p className="speakerDesc">{speakerDesc}</p>
            </div>
        </div>

    );
}


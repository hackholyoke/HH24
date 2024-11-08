'use client'
import React from "react";
import Image from "next/image";
import './speakerCard.css'
import speakerCardPic from '../../assets/speakerCardPic.png'

export const SpeakerCard = ({speakerPic, speakerName, speakerDesc , speakerTitle , speakerPosition , speakerNameStyle , speakerPosStyle, speakerTitleStyle, speakerDescStyle}) =>{
    return(
        <div className = "speaker-card">
            <div className="speaker-pic-container">
                <Image src ={speakerPic} className="speaker-pic"/>
            </div>
            <Image src ={speakerCardPic} priority={true} className="card-pic"/>
            <div className = "text-overlay-speaker">
                <h1 className="speakerName" style = {speakerNameStyle}>{speakerName}</h1>
                <p className="speakerDesc" style ={speakerDescStyle}>{speakerDesc}</p>
                <p className= "speakerTitle" style ={speakerTitleStyle}>{speakerTitle}</p>
                <p className= "speakerPosition" style = {speakerPosStyle}>{speakerPosition}</p>
            </div>
        </div>

    );
}


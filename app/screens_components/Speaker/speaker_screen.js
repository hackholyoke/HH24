'use client'
import React from "react";
import Image from "next/image";
import SpeakerCarousel from "../../components/SpeakerCarousel/SpeakerCarousel";
import { SpeakerCard } from "../../components/SpeakerCard/speakerCard";
import speakerCardPic from '../../assets/speakerCardPic.png'
import './speakerScreen.css'
import graceHopper from "../../assets/speakers/graceHopper.png"

const speakerCards=[

  <SpeakerCard 
  speakerPic={graceHopper}
  speakerName={"Speaker 1"}
  speakerDesc={"hello"}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Speaker 2"}
  speakerDesc={"hello"}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Speaker 3"}
  speakerDesc={"hello"}
  />

];

const SpeakerScreen =() =>{
    

    return (
      <div>
        <h1 className="speaker-heading">Speakers</h1>
        <SpeakerCarousel slides={speakerCards} options={{ loop: true }} />
      </div>
    );

}

export default SpeakerScreen;


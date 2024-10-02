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
  speakerName={"Grace Hopper"}
  speakerDesc={"Dr. Emily Chen is a renowned expert in artificial intelligence and robotics, whose groundbreaking research has revolutionized the field of human-robot interaction. With over two decades of experience, Dr. Chen has worked with leading tech companies and research institutions to develop AI systems that enhance human capabilities in industries ranging from healthcare to autonomous vehicles. "}
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


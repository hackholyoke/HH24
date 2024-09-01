'use client'
import React from "react";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import speakerCardPic from '../assets/speakerCardPic.png'
import '/styles/screenStyles/speakerScreen.css'


const SpeakerScreen =() =>{
    const [emblaRef] = useEmblaCarousel()

    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            
            <Image src = {speakerCardPic} height={500}/>
            {/* Slide 1 */}
            </div>
          <div className="embla__slide">
          <Image src = {speakerCardPic} height={500}/>
          {/* Slide 2 */}
            </div>
          <div className="embla__slide">
          <Image src = {speakerCardPic} height={500}/>
            {/* Slide 3 */}
            </div>
        </div>
      </div>
    );

}

export default SpeakerScreen;


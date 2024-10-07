'use client'
import React from "react";
import Image from "next/image";
import './sponsorScreen.css';
import wolframalpha from "../../assets/sponsors/wolframalpha.png"


const SponsorScreen = () =>{

    return (
        <div>
            <h1 className = "sponsor-heading">Sponsors</h1>
            <div className = "spnsr-images">
                <Image src={wolframalpha}/>
            </div>
            <p className='spn-desc'>If you are interested in contributing as a sponsor or mentor please click below</p>
            <a href="mailto:hackholyoke@gmail.com" className="link">
                Sponsor HackHolyoke
            </a>
        </div>
    );
}

export default SponsorScreen;
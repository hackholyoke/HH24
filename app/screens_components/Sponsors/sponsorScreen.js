'use client'
import React from "react";
import Image from "next/image";
import './sponsorScreen.css';
import wolframalpha from "../../assets/sponsors/wolframalpha.png"
import mhc_cs from "../../assets/sponsors/mhc_cs.png"

const SponsorScreen = () =>{

    return (
        <div className="sponsorScreen">
            <h1 className = "sponsor-heading">Sponsors</h1>
            <div className = "spnsr-images">
                <Image src={mhc_cs} className="mhc_cs_logo"/>
                <Image src={wolframalpha} className="wolfram_logo"/>
                
            </div>
            <p className='spn-desc'>If you are interested in contributing as a sponsor or mentor please click below.</p>
            <a href="mailto:hackholyoke@gmail.com" className="link">
                Sponsor HackHolyoke
            </a>
        </div>
    );
}

export default SponsorScreen;
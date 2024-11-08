'use client'
import React, { useState } from "react";
import Image from "next/image";
import './faqComp.css'

/**
 * FAQ Comp Variables
 * close picture
 * open picture
 * 
 * text overlap for open picture
 */

export const FAQComp = ({closeQ, openQ, answerText}) => {
    const[isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    };

    return(
        <div className = 'faq-container' onClick={handleOpen}>
            {/* Preload images */}
            <div style={{ display: 'none' }}>
                <Image src={closeQ} priority={true} alt="closed question preload" />
                <Image src={openQ} priority={true} alt="open question preload" />
            </div>
            
            <div className={`faq${isOpen ? 'faqOpenned' : ''}`}>
                {!isOpen &&(
                <div className='closed-faq'>
                    <Image src={closeQ} iority={true} className='closeQPic' />
                </div>
                )}
                {isOpen && (
                <div className='open-faq'>
                    <Image src={openQ} priority={true} className='openQPic'/>
                    <div className='answer-faq'>{answerText}</div>
                </div>
                )}
            </div>
        </div>
    );
}
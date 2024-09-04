'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import '/styles/compStyles/sideMenu.css';
import ca from '../assets/sidemenu/ca.png';
import cb from '../assets/sidemenu/cb.png';
import da from '../assets/sidemenu/da.png';
import db from '../assets/sidemenu/db.png';
import fa from '../assets/sidemenu/fa.png';
import fb from '../assets/sidemenu/fb.png';
import la from '../assets/sidemenu/la.png';
import lb from '../assets/sidemenu/lb.png';
import ma from '../assets/sidemenu/ma.png';
import mb from '../assets/sidemenu/mb.png';
import sa from '../assets/sidemenu/sa.png'; 
import sb from '../assets/sidemenu/sb.png';
import wa from '../assets/sidemenu/wa.png';
import wb from '../assets/sidemenu/wb.png';

const SideMenu = () => {
    
    useEffect(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        console.log("Menu Items:", menuItems); // Check if menu items are selected correctly

        // Hide all 'choice-active' images initially
        menuItems.forEach(item => {
            item.querySelector('.choice-active').style.display ='none';
        });

        const observerOptions = {
            root: null, // Use the viewport as the container
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const targetId = entry.target.id;
                const menuItem = document.querySelector(`a[href="#${targetId}"]`);
        
                if (menuItem) {  // Check if menuItem exists
                    const choiceImage = menuItem.querySelector('.choice');
                    const activeImage = menuItem.querySelector('.choice-active');
        
                    if (entry.isIntersecting) {
                        choiceImage.style.display = 'none';
                        activeImage.style.display = 'block';
                    } else {
                        choiceImage.style.display = 'block';
                        activeImage.style.display = 'none';
                    }
                } else {
                    console.warn(`Menu item not found for target ID: ${targetId}`);
                }
            });
        }, observerOptions);
        

        // Observe each section
        const sections = document.querySelectorAll('.container');
        sections.forEach(section => {
            observer.observe(section);
        });

    }, []);

    return (
        <div className="sideMenu">
            <ul>
                <a href='#co-chairs' className='menu-item'>
                    <Image src={cb} className='choice' alt="Co-Chairs"/>
                    <Image src={ca} className='choice-active' alt="Co-Chairs Active"/>
                </a>
            </ul>
            <ul>
                <a href='#logistics' className='menu-item'>
                    <Image src={lb} className='choice' alt="Logistics"/>
                    <Image src={la} className='choice-active' alt="Logistics Active"/>
                </a>
            </ul>
            <ul>
                <a href='#sponsorship' className='menu-item'>
                    <Image src={sb} className='choice' alt="Sponsorship"/>
                    <Image src={sa} className='choice-active' alt="Sponsorship Active"/>
                </a>
            </ul>
            <ul>
                <a href='#webmaster' className='menu-item'>
                    <Image src={wb} className='choice' alt="Webmaster"/>
                    <Image src={wa} className='choice-active' alt="Webmaster Active"/>
                </a>
            </ul>
            <ul>
                <a href='#finance' className='menu-item'>
                    <Image src={fb} className='choice' alt="Finance"/>
                    <Image src={fa} className='choice-active' alt="Finance Active"/>
                </a>
            </ul>
            <ul>
                <a href='#marketing' className='menu-item'>
                    <Image src={mb} className='choice' alt="Marketing"/>
                    <Image src={ma} className='choice-active' alt="Marketing Active"/>
                </a>
            </ul>
            <ul>
                <a href='#design' className='menu-item'>
                    <Image src={db} className='choice' alt="Design"/>
                    <Image src={da} className='choice-active' alt="Design Active"/>
                </a>
            </ul>
        </div>
    );
};

export default SideMenu;

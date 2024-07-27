import React from 'react';
import '/styles/sideMenu.css';

const SideMenu = () =>{
    return(
        
        <div className = "sideMenu">
            
            <ul><a href='#co-chairs' className='item'>Co-Chairs</a></ul>
            <ul><a href='#logistics' className='item'>Logistics</a></ul>
            <ul><a href='#sponsorship' className='item'>Sponsorship</a></ul>
            <ul><a href='#webmaster' className='item'>Webmaster</a></ul>
            <ul><a href='#finance' className='item'>Finance</a></ul>
            <ul><a href='#marketing' className='item'>Marketing</a></ul>
            <ul><a href='#design' className='item'>Design</a></ul>
           
        </div>
        

    );
};

export default SideMenu;
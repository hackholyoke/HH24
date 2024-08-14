import React from 'react';
import '/styles/faq.css';


const FAQ = () =>{
    return(
        <div>
        <div className='title' >
            <h1> FAQs</h1>
        </div>
        

        <div className='faq'> 
            <div className='question'>
                <h3> What is HackHolyoke?</h3>

                <svg width= "15" height= "10" viewBox=" 0 0 42 25">
                    <path d ="M3 3L21 21L39 3" stroke = " white" strokeWidth= "7" strokeLinecap="round" />
                </svg>
            </div>

            <div className='answer'> 
                <p> HackHolyoke is Mount Holyoke's hackathon</p>
            </div>

            <div className='question'>
                <h3> What day is hackholyoke happening?</h3>

                <svg width= "15" height= "10" viewBox=" 0 0 42 25">
                    <path d ="M3 3L21 21L39 3" stroke = " white" strokeWidth= "7" strokeLinecap="round" />
                </svg>
            </div>

            <div className='answer'> 
                <p>On the 9th - 10th November</p>
            </div>
        </div>

        </div>
    )
}


export default FAQ;




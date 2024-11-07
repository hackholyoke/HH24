'use client'
import React from "react";
import Image from "next/image";
import { FAQComp } from "../../components/FAQComp/faqComp";
import What_is_HH_fold from '../../assets/faqImg/What_is_HH_fold.png';
import What_is_HH_unfold from '../../assets/faqImg/What_is_HH_unfold.png';
import Where_fold from '../../assets/faqImg/Where_fold.png';
import Where_unfold from '../../assets/faqImg/Where_unfold.png';
import Who_fold from '../../assets/faqImg/Who_fold.png';
import Who_unfold from '../../assets/faqImg/Who_unfold.png';
import Team_unfold from '../../assets/faqImg/Team_unfold.png';
import Team_fold from '../../assets/faqImg/Team_fold.png';
import Participate_unfold from '../../assets/faqImg/Participate_unfold.png';
import Participate_fold from '../../assets/faqImg/Participate_fold.png';
import Free_unfold from '../../assets/faqImg/Free_unfold.png';
import Free_fold from '../../assets/faqImg/Free_fold.png';
import Other_way_unfold from '../../assets/faqImg/Other_way_unfold.png';
import Other_way_fold from '../../assets/faqImg/Other_way_fold.png';
import Member_unfold from '../../assets/faqImg/Member_unfold.png';
import Member_fold from '../../assets/faqImg/Member_fold.png';
import Hackathon_unfold from '../../assets/faqImg/Hackathon_unfold.png';
import Hackathon_fold from '../../assets/faqImg/Hackathon_fold.png';
import FH_unfold from '../../assets/faqImg/FH_unfold.png';
import FH_fold from '../../assets/faqImg/FH_fold.png';
import Experience_unfold from '../../assets/faqImg/Experience_unfold.png';
import Experience_fold from '../../assets/faqImg/Experience_fold.png';
import './FAQScreen.css';

const FAQScreen = () =>{
    return(
        <div>
            <h1 className="FAQ-heading">FAQ</h1>
            <div className='faqScreen'>
                <div className='leftSideFAQ'>
                    <FAQComp closeQ={What_is_HH_fold} openQ={What_is_HH_unfold} 
                    answerText={"HackHolyoke is a 24-hour hackathon hosted every year by students at Mount Holyoke College, one of the first historically women's colleges in the US. This year, HackHolyoke will be a fully in-person hackathon with tea breaks, information sessions, and workshops."}/>
                    <FAQComp closeQ={Who_fold} openQ={Who_unfold} 
                    answerText={"HackHolyoke is open to all students currently enrolled in U.S - based colleges or community colleges, regardless of all other backgrounds."}/>
                    <FAQComp closeQ={Team_fold} openQ={Team_unfold} 
                    answerText={"You do not need a team to participate. While we encourage people to work in teams, hackers are perfectly welcome to go solo. If you want a team, but don't have one yet, sign up and we will help you find a team at the start of the event!"}/>
                    <FAQComp closeQ={Participate_fold} openQ={Participate_unfold} 
                    answerText={"We're now open for registration! If you're interested in hacking with us, you can register here and then you will be all set. This year's hackathon is digital-focus, so if you're not a Mount Holyoke student, all you will need is your computer and an internet connection."}/>
                    <FAQComp closeQ={Free_fold} openQ={Free_unfold} 
                    answerText={"Yes, it is! You don't have to pay any fees in order to participate in HackHolyoke 2024. Just come, build amazing projects, and win prizes!"}/>
                    <FAQComp closeQ={Other_way_fold} openQ={Other_way_unfold} 
                    answerText={"For current Mount Holyoke students, we're looking for on-site volunteers who can help us with our in-person components. ?Click here for more details?"}/>                                                          
                </div>
                <div className='rightSideFAQ'>
                    <FAQComp closeQ={Where_fold} openQ={Where_unfold} 
                    answerText={"HackHolyoke 2024 is an in-person hackathon. All of our major happenings and hacking will be in-person held at Mount Holyoke College and can be attended on-site."}/>
                    <FAQComp closeQ={Member_fold} openQ={Member_unfold} 
                    answerText={"Each team is allowed to have up to 4 members."}/>                
                    <FAQComp closeQ={Hackathon_fold} openQ={Hackathon_unfold} 
                    answerText={"An event in which participants spend a condensed period of time (usually somewhere between 24 and 36 hours) working on a project, attending workshops, networking, and generally having a good time. At the end, the participants can present what they have worked on to judges to win prizes."}/>                
                    <FAQComp closeQ={FH_fold} openQ={FH_unfold} 
                    answerText={"Unfortunately, due to limited budget, HackHolyoke is unable to provide housing to participants. However, guest swipes will be provided for participants to get food at the Blanchard center( Mount Holyoke's main dining center)"}/>                
                     <FAQComp closeQ={Experience_fold} openQ={Experience_unfold} 
                    answerText={"Absolutely! We welcome everyone with a passion for learning and a can-do attitude. For people with limited or no coding experience who want to learn more, we will also have beginner-friendly workshops."}/>               
                </div>
            </div>
        </div>
    )
}

export default FAQScreen;
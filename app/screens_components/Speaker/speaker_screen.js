'use client'
import React from "react";
import Image from "next/image";
import SpeakerCarousel from "../../components/SpeakerCarousel/SpeakerCarousel";
import { SpeakerCard } from "../../components/SpeakerCard/speakerCard";
import speakerCardPic from '../../assets/speakerCardPic.png'
import './speakerScreen.css'
import graceHopper from "../../assets/speakers/graceHopper.png"
import zoey from "../../assets/team_pics/zoey.png"

const speakerCards=[

  <SpeakerCard 
  speakerPic={graceHopper}
  speakerName={"Adam Essemaal"}
  speakerPosition={"Wolfram Language expert"}
  speakerDesc={"An interactive workshop where you'll learn how to leverage resource functions in the Wolfram Language to quickly prototype and deploy a project. We'll guide you through building a simple demo, demonstrating how the Wolfram Language can streamline the process from concept to production. Whether you're new to Wolfram or looking to enhance your skills, this session will equip you with the tools to bring your ideas to life efficiently "}
  speakerTitle={"The Power of Resource Functions: How They Work, Why They're Useful, and How to Use Them to Build a Simple Application."}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Joni Park"}
  speakerPosition={"Software Engineer , Apple "}
  speakerDesc={"In this workshop, you'll get hands-on with the basics of Git and GitHub, essential tools for developers. We'll cover how to track changes in your projects, collaborate with others, and keep your code organized. Whether you're just starting out or need a refresher, this session will help you feel more confident using version control in your workflow. Great for anyone who’s looking to get more comfortable with version control and improve their workflow!"}
  speakerTitle={"Intro to Git & GitHub: Version Control"}

  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Astrid Zhao"}
  speakerPosition={"Technology Analyst , Morgan Stanley"}
  speakerDesc={" Why do I need to put so much effort into networking? Where should I start? How do I reach out to strangers on LinkedIn? What do I say during a coffee chat? If these questions sound familiar, this workshop is for you.This workshop is designed to empower college students with practical skills and strategies necessary to use LinkedIn for networking and career development effectively. Participants will learn how to create a professional LinkedIn profile, strategically build their networks, and use LinkedIn for job searches. Participants will leave equipped with the tools they need to navigate their early professional careers."}
  speakerTitle={"Leveraging LinkedIn: Networking Strategies for Early Career (Middle-of-Nowhere School Special Edition)"}
  />,

  <SpeakerCard
  //speakerPic={}
  speakerName={ "Mai Bui and Natalie Chalfant"}
  speakerPosition={"Research Assistants,Intelligent Medical Robotics Lab"}
  speakerDesc={"The workshop will provide an overview of common surgical robotics research platforms and introduce participants to the Robot Operating System (ROS). Participants will learn how to publish and subscribe to standard ROS messages using the python library rospy as well as some basic rotation and translation matrices. There will also be the opportunity to control the simulated robot using a gamepad controller which broadcasts commands to the robot using ROS messages. Whether you’re an aspiring roboticist or just curious about the field, this workshop is your chance to step into the shoes of a roboticist, researcher, or medical student for a day."}
  speakerTitle={"Teleoperation for Simulated Surgical Robots"}
  speakerNameStyle={{ left: "25%" }}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Laura Sizer"}
  speakerPosition={"Senior Lecturer in Philosophy, MHC"}
  speakerDesc={"COMING SOON !"}
  speakerTitle={"Ethics for Developers: Doing an Ethics Audit of Your Project"}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Avery Colyer"}
  speakerPosition={"Lead UI/UX Designer at Hospitality Innovations"}
  speakerDesc={"COMING SOON !"}
  speakerTitle={"Working as a UX/UI designer in Tech"}
  />,

  <SpeakerCard 
  //speakerPic={}
  speakerName={"Olivia Lee"}
  speakerPosition={"Data Scientist @ Yahoo Finance"}
  speakerDesc={"COMING SOON !"}
  speakerTitle={"Why You Should / Shouldn't Be a Data Scientist"}
  />

];

const SpeakerScreen =() =>{
    

    return (
      <div>
        <h1 className="speaker-heading">Workshops</h1>
        <SpeakerCarousel slides={speakerCards} options={{ loop: true }} />
      </div>
    );

}

export default SpeakerScreen;




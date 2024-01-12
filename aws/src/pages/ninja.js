import React from 'react';
import './ninja.css'; // Importing the CSS file for styles
import planner from '../images/planner.png';
import error from '../images/error.jpg';
import webdriver from '../images/webdriver.png';
import studentlink from '../images/studentlink.png';
import findelement from '../images/findelement.png';
import sendkeys from '../images/sendkeys.png';

function Ninja() {
    return (
        <div className="rectangle-container">
            <img src={planner} alt="Ninja" className="rectangle-image" />
            <h1>Course Auto-Register</h1>
            <bullet>Description:</bullet>
            <c>This project features a <b>Python script</b> that performs preprogrammed click actions on the BU Student Link course registration website. This functionality is achieved using the <b>Selenium</b> library.</c>
            <c>It is adept at quickly registering for all courses in the Planner as soon as registration opens. Additionally,  
                the script can automatically refresh the registration page and promptly enroll in a specific course the moment an available seat is detected.</c>
            <bullet>Declaration:</bullet>
            <c><b>This project was developed solely for research purposes.</b> It has never been utilized, nor will it be used in the future, to gain unfair advantage 
                or to outcompete other students in course registration.</c>
            <bullet>Specifics:</bullet>
            <c>The project involved automated processes executed through a series of <b>preprogrammed clicks</b>.</c>
            <c>Initially, <b>Chromedriver</b> is required to gain browser control for Selenium operations.</c>
            <img src={webdriver} alt="Jarvis" className="rectangle-image-ninja3" />
            <c>Once Chromedriver is set up, we can navigate to the website using the URL through <b>Selenium</b>'s <b>".get"</b> method.</c>
            <img src={studentlink} alt="Jarvis" className="rectangle-image-ninja3" />
            <c>Next, I utilize the <b>"find_element"</b> method to locate a specific button on the webpage. Once identified, I simulate mouse clicks by applying the <b>".click()"</b> method. <b>XPath</b> is 
                commonly employed in this project to locate elements.</c>
            <img src={findelement} alt="Jarvis" className="rectangle-image-ninja3" />
            <c>Username and password credentials can be inputted using the <b>"send_keys"</b> method, enabling automated execution of login actions.</c>
            <img src={sendkeys} alt="Jarvis" className="rectangle-image-ninja3" />
            <c>By employing the methods mentioned above and integrating them within a well-structured logic architecture, we can achieve a series of automated click operations for course registration.</c>
            <bullet>Notes:</bullet>
            <c>Since Selenium's browser control is incompatible with <b>Duo's mobile</b> verification window, implementing a while loop with a try statement or using a 
                sleep method allows for manual verification. The script will then resume automatically after the verification is completed.</c>
            <c>Following the <b>UI overhaul</b> of the Student Link in 2023, the existing code for this project became incompatible with the new interface, primarily due to changes in XPath. 
                However, the fundamental concept of automation through Selenium remains applicable and can be adapted to the updated UI.</c>
            <bullet>Shush!</bullet>
            <img src={error} alt="Jarvis" className="rectangle-image-ninja2" />
        </div>
    );
}

export default Ninja;


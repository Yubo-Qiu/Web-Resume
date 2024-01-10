import React from 'react';
import './ninja.css'; // Importing the CSS file for styles
import planner from '../images/planner.png';
import error from '../images/error.jpg';

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
            <bullet>Shush!</bullet>
            <img src={error} alt="Jarvis" className="rectangle-image-ninja2" />
        </div>
    );
}

export default Ninja;


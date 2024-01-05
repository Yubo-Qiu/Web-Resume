import React from 'react';
import './keith.css'; // Importing the CSS file for styles
import wav from '../monica.jpg';
import keith from '../keith.jpg';
import offices from '../offices.png';
import author from '../author.png';

function Keith() {
    return (
        <div className="rectangle-container">
            <img src={keith} alt="Jarvis" className="rectangle-image" />
            <h1>Web Assistant</h1>
            <bullet>Description:</bullet>
            <c>I serve as a web assistant, managing the official websites for five distinct offices: <b>Global Programs</b>, Study Abroad, International Students and Scholars Office (ISSO), 
                Center for English Language & Orientation Programs (CELOP), and the Global Office. I have been employed in my current role since June 2022 and continue to serve in this capacity.</c>
            <img src={offices} alt="Jarvis" className="rectangle-image3" />
            <c>My core responsibilities encompass the creation and maintenance of over <b>200</b> web pages, alongside meticulous troubleshooting to resolve issues including broken links, malfunctioning 
            collapsible elements, and extensive spelling errors.</c>
            <img src={author} alt="Jarvis" className="rectangle-image2" />
            <c>Highlighted below are some of my notable works:</c>
            <a href="https://www.example.com" className="customlink">Link Text</a>
            <a href="https://www.example.com" className="customlink">Link Text</a>
            <a href="https://www.example.com" className="customlink">Link Text</a>
            <bullet>Specifics:</bullet>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <img src={wav} alt="Jarvis" className="rectangle-image2" />
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <bullet>This:</bullet>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <img src={wav} alt="Jarvis" className="rectangle-image2" />
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
        </div>
    );
}

export default Keith;


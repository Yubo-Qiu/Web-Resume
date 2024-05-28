import React from 'react';
import './keith.css'; 
import keith from '../images/keith.jpg';
import offices from '../images/offices.png';
import author from '../images/author.png';
import wordp from '../images/wordp.png';

function Keith() {
    return (
        <div className="rectangle-container">
            <img src={keith} alt="Jarvis" className="rectangle-image" />
            <h1>Website Developer</h1>
            <bullet>Description:</bullet>
            <c>I serve as a web developer, managing the official websites for five distinct offices: Global Programs, Study Abroad, International Students and Scholars Office (ISSO), 
                Center for English Language & Orientation Programs (CELOP), and the Global Office. I have been employed in my current role since June 2022 and continue to serve in this capacity.</c>
            <img src={offices} alt="Jarvis" className="rectangle-image3" />
            <c>My core responsibilities encompass the creation and maintenance of over <b>200</b> web pages using <b>WordPress</b> and <b>HTML5</b>, alongside meticulous troubleshooting to resolve issues including broken links, malfunctioning 
            collapsible elements, and extensive spelling errors.</c>
            <img src={author} alt="Jarvis" className="rectangle-image2" />
            <c>Highlighted below are some of my notable works:</c>
            <a href="https://www.bu.edu/abroad/accepted-students/pre-departure-pages/" className="customlink" target="_blank" rel="noopener noreferrer">Pre-Departure-Pages</a>
            <a href="https://www.bu.edu/abroad/accepted-students/pre-departure-pages/fall-2023/usa-los-angeles-internshipfall-2023/" className="customlink" target="_blank" rel="noopener noreferrer">LA-Internship-2023</a>
            <a href="https://www.bu.edu/abroad/plan/financial-aid/your-free-pass-to-a-passport-grant/" className="customlink" target="_blank" rel="noopener noreferrer">Financial-Aid</a>
            <bullet>Specifics:</bullet>
            <c>I primarily work on this WordPress platform below, where I perform various tasks using HTML5. I also regularly perform <b>database maintenance</b> tasks, which include cleaning and purging outdated files.</c>
            <img src={wordp} alt="Jarvis" className="rectangle-image2" />
            <c>Beyond my primary duties, I also create official office emails using <b>Inky</b> and efficiently rectify web content errors, including spelling mistakes and broken links, using <b>Siteimprove</b>.</c>
        </div>
    );
}

export default Keith;


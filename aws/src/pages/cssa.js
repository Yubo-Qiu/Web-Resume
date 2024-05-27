import React from 'react';
import './cssa.css'; // Importing the CSS file for styles
import tpm from '../images/tpm.jpg';
import jishu from '../images/jishubu.jpg';

function Cssa() {
    return (
        <div className="rectangle-container">
            <img src={jishu} alt="Jarvis" className="rectangle-image" /> 
            <h1>Full Stack Developer</h1>
            <bullet>Description:</bullet>
            <c>I held the position of <b>Full Stack Developer</b> in the Technology Department of the Boston University Chinese Student and Scholar Association (BUCSSA) from February 2023 
                to December 2023. My responsibilities included designing and developing two web pages for the official website.</c>
            <a href="https://www.bucssa.org/About/About_Jishubu" className="customlink" target="_blank" rel="noopener noreferrer">Link to the BUCSSA official</a>
            <c>In this role, I utilized <b>JavaScript</b>, <b>CSS</b>, and <b>React</b> for front-end development, leveraging these technologies to create dynamic and responsive web pages. 
            The website boasts over <b>300</b> registered users and has garnered a total of <b>67,000</b> views, with a peak transaction rate of <b>2,811</b> per minute.</c>
            <img src={tpm} alt="Jarvis" className="rectangle-image-cssa2" />
        </div>
    );
}

export default Cssa;
import React from 'react';
import './qst.css'; // Importing the CSS file for styles
import wav from '../images/monica.jpg';
import xue from '../images/xue.jpg';

function QST() {
    return (
        <div className="rectangle-container">
            <img src={xue} alt="Fake News Lab" className="rectangle-image" /> 
            <h1>Fake News Lab</h1>
            <bullet>Description:</bullet>
            <c>how people react towards midinformation</c>
            <c>Lab under professor Marshall van alstyne</c>
            <c>NSF grant - link</c>
            <c>empirica</c>
            <bullet>Publishment:</bullet>
            <c>accepted extended abstract, <a href="https://www.ic2s2.org" rel="noopener noreferrer">IC2S2</a>, conference in july</c>
            <a href="https://colab.research.google.com/drive/1Fgw0VdREEPa1XJatgHxUHMqqXEEXrD9q?usp=sharing" className="customlink">Link to View the Abstract</a>
            <bullet>Specifics:</bullet>
            <c>task word records</c>
            <a href="https://colab.research.google.com/drive/1Fgw0VdREEPa1XJatgHxUHMqqXEEXrD9q?usp=sharing" className="customlink">Link to View the Assignment Sheet</a>
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

export default QST;


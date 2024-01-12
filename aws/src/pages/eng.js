import React from 'react';
import './eng.css'; // Importing the CSS file for styles
import wav from '../images/monica.jpg';
import xue from '../images/xue.jpg';

function Eng() {
    return (
        <div className="rectangle-container">
            <img src={xue} alt="Jarvis" className="rectangle-image" /> 
            <h1>Kolachalama Lab</h1>
            <bullet>Description:</bullet>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <bullet>This:</bullet>
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

export default Eng;
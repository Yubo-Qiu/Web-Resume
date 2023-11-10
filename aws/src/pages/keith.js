import React from 'react';
import './keith.css'; // Importing the CSS file for styles
import wav from '../monica.jpg';

function Keith() {
    return (
        <div className="rectangle-container">
            <img src={wav} alt="Jarvis" className="rectangle-image" />
            <h1>Web Assistant</h1>
            <bullet>Descroption:</bullet>
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

export default Keith;


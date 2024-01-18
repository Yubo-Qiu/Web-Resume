import React from 'react';
import './eng.css'; 
import xue from '../images/xue.jpg';

function Social() {
    return (
        <div className="rectangle-container">
            <img src={xue} alt="Jarvis" className="rectangle-image" /> 
            <h1>徐公公</h1>
            <bullet>Description:</bullet>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>

        </div>
    );
}

export default Social;
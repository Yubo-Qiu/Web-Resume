import React from 'react';
import './411.css'; // Importing the CSS file for styles
import cs411 from '../images/411.png';
import astro from '../images/astro.png';
import nextjs from '../images/nextjs.png';
import dash from '../images/dash.png';
import login from '../images/login.png';
import news from '../images/news.png';
import oauth from '../images/oauth.png';
import authen from '../images/authen.png';
import db from '../images/db.png';
import firebase from '../images/firebase.png';

function Stock() {
    return (
        <div className="rectangle-container">
            <img src={cs411} alt="Jarvis" className="rectangle-image" />
            <h1>Stock Software</h1>
            <bullet>Description:</bullet>
            <c>I developed a software platform that provides registered users with access to the latest news and stock 
                graphs for selected companies. This platform features a comprehensive <b>google registration system</b> and 
                a <b>database</b> for user management. It integrates <b>two APIs</b> to deliver real-time updates on news and stock 
                prices. </c>
            <c>The frontend was engineered using <b>Next.js</b> and <b>Astro</b>, both advanced React frameworks. 
                Additionally, Google authentication and real-time database functionalities are efficiently handled 
                through <b>Firebase</b>.</c>
            <bullet>Introduction Video:</bullet>
            <c>This project was completed as the capstone for a Software Engineering course. For a brief overview, 
                please view the accompanying project video here:</c>
            <a href="https://www.youtube.com/watch?v=qo3r48sLYGI" className="customlink">Link for the YouTube video</a>
            <bullet>Frontend Specifics:</bullet>
            <c>Initially, the frontend was developed using <b>Astro</b>, but due to limited resources on integrating Firebase 
                OAuth with Astro, I subsequently transitioned to Next.js for a more seamless implementation.</c>
            <img src={astro} alt="Jarvis" className="rectangle-image4" />
            <c>Following the transition to <b>Next.js</b>, I designed an engaging Introduction-Page, complete with a <b>navigation 
                bar</b> and <b>footer</b>. </c>
            <img src={nextjs} alt="Jarvis" className="rectangle-image5" />
            <c>Upon clicking the 'Let's Go' button, users are directed to the Login-Page.</c>
            <img src={login} alt="Jarvis" className="rectangle-image5" />
            <c>By clicking on the Google logo, users initiate the <b>Google OAuth</b> process, prompting a familiar Google login window to appear for secure authentication.</c>
            <img src={oauth} alt="Jarvis" className="rectangle-image2" />
            <c>Upon successful authentication, users are directed to the dashboard page, where their Google username is 
                automatically retrieved and displayed on the right side. The dashboard features the latest daily stock 
                graph, dynamically updated using the <b>Alpha Vantage</b> API.</c>
            <img src={dash} alt="Jarvis" className="rectangle-image5" />
            <c>Due to time constraints within the semester, certain features on the dashboard, such as the trade button and the gains board, remain under development.</c>
            <c>Selecting the 'News' button on the navigation bar directs users to the news page, which consistently displays and updates the latest news. This feature 
                is powered by the <b>NEWS API</b>, ensuring real-time access to current events.</c>
            <img src={news} alt="Jarvis" className="rectangle-image5" />
            <bullet>Firebase Specifics:</bullet>
            <c>Both the Google OAuth authentication and the real-time database functionality for this project are seamlessly integrated and supported by <b>Firebase</b>.</c>
            <img src={firebase} alt="Jarvis" className="rectangle-image4" />
            <c><b>Google OAuth</b> was selected as the authentication method for this project. This allows for the monitoring of user activities, including new registrations and logins.</c>
            <img src={authen} alt="Jarvis" className="rectangle-image6" />
            <c>The <b>real-time database</b> is configured to store the user's email address and username. When a new account is created, it automatically captures and stores the user's 
                Google email address and username as part of the OAuth authentication process.</c>
            <img src={db} alt="Jarvis" className="rectangle-image3" />
        </div>
    );
}

export default Stock;


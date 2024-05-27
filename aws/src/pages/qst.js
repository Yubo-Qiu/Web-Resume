import React from 'react';
import './qst.css'; // Importing the CSS file for styles
import market from '../images/market.jpg';
import challenge from '../images/challenge.jpg';
import produce from '../images/produce.jpg';
import brand from '../images/brand.jpg';
import endorse from '../images/endorsement.png';
import NSF from '../images/NSF_Team_Dinner_24-3-9.jpg';

function QST() {
    return (
        <div className="rectangle-container">
            <img src={NSF} alt="Fake News Lab" className="rectangle-image" /> 
            <h1>Fake News Lab</h1>
            <bullet>Description:</bullet>
            <c>The Fake News Lab is led by <a href="https://web.mit.edu/marshall/www/home.html" target="_blank" rel="noopener noreferrer">Professor Marshall van Alstyne</a>, a BU professor and MIT research associate, and <a href="https://mehtaver.se/" target="_blank" rel="noopener noreferrer">Swapneel Mehta</a>, an 
                MIT postdoctoral researcher. The lab focuses on using technology-aided societal structures to reduce the spread of fake news. 
                The research aims to demonstrate methods to actively discourage the dissemination of misinformation. 
                The team has secured a <b>$550,000</b> grant from the <b>National Science Foundation</b> (NSF). </c>
            <c>In this team, my role is that of a full-stack developer. My primary responsibility is using <b>Google Cloud</b> and <b>Empirica</b>, which is built on <b>JavaScript</b> and <b>React</b>, to develop the experimental application platform. This platform is a multiplayer game designed to simulate a real-world market and collect data to support 
                our thesis. More details about this lab can be seen <a href="https://www.bu.edu/cds-faculty/2023/10/06/bu-professors-earn-nsf-grant-for-data-science-project-fighting-online-misinformation/" target="_blank" rel="noopener noreferrer">here</a>.</c>
            <c>The game is hosted now on Google Cloud at <a href="https://web.mit.edu/marshall/www/home.html" target="_blank" rel="noopener noreferrer">truthmarket.com</a>. Please check it out!</c>
            <bullet>Publishment:</bullet>
            <c>Our extended abstract has been accepted by <a href="https://www.ic2s2.org" target="_blank" rel="noopener noreferrer">IC2S2</a>, and the conference will be held in July 2024 in Philadelphia.</c>
            <a href="https://openreview.net/forum?id=JYTC9tgSHT" className="customlink" target="_blank" rel="noopener noreferrer">Link to View the Abstract</a>
            <bullet>Specifics:</bullet>
            <c><b>Game Specifics:</b></c>
            <c>The game is essentially a simulation of the real market where players can take on the roles of either consumers or producers. As a producer, you have the ability to produce products, advertise deceptively, warrant your products, and change your brand name for reputation recovery purposes. </c>
            <img src={produce} alt="Jarvis" className="rectangle-image2" />
            <img src={brand} alt="Jarvis" className="rectangle-image2" />
            <c>As a consumer, you can purchase products from various producers within the limits of your wallet and challenge the producers after receiving the products to determine their true quality.</c>
            <img src={market} alt="Jarvis" className="rectangle-image2" />
            <c>If a producer warrants a product that is falsely advertised, and a consumer purchases and challenges it, the warrant amount of money is given to the consumer as compensation.</c>
            <img src={challenge} alt="Jarvis" className="rectangle-image2" />
            <c>The goal for both roles in this game is to maximize their scores. We expect players to decrease the frequency of misinformation to achieve this. The score for producers is essentially the profit from selling their products. For consumers, the score is based on a utility score, which reflects the benefit they gain from purchasing a product. If a consumer buys a high-quality product, they benefit more than if they receive a low-quality product, and therefore, they receive more points. </c>
            <c><b>Tasks Specifics:</b></c>
            <c>Our weekly assignments are well documented and can be viewed in this <a href="https://docs.google.com/document/d/1u8ecVwQJrx2Ca_5LKYp_xbTrUxsCAsES5Z9vrJ6tGpg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Google Doc</a>.</c>
            <c>As a full-stack developer, my job encompasses a diverse range of responsibilities, including front-end, back-end, and UI development, as well as user experience design and behavioral psychology considerations. My tasks vary widely:</c>
            <c>Sometimes, I focus on <b>developing the UI</b> for multiple branches. For example, on April 12, 2024, my task was documented in the Google Doc.</c>
            <c>At other times, my job involves <b>fixing bugs</b> or <b>addressing missing functionalities</b> in the architecture. For instance, on April 2, 2024, I worked on ensuring that when a consumer player does not purchase any products, a feedback page indicates that nothing has been purchased instead of showing a blank page.</c>
            <c>Occasionally, I am tasked with <b>developing entire pages</b> for specific stages of the game. On February 6, 2024, I developed the results page.</c>
            <c>Sometimes, I <b>develop specific architectural features</b>, such as creating artificial bot players to avoid long waiting times when there are too few players. This task was assigned on February 26, 2024.</c>
            <c>I also perform <b>testing</b> on newly built features. For example, on March 8, 2024, I tested the functionalities of the newly developed bot players on some branches.</c>
            <c>Importantly, I also <b>participate in game design discussions</b> and raise meaningful questions. For example, I challenged the idea of informing consumer players about the total number of producers. In 
                scenarios with only two producers, if one producer is honest and maintains their reputation with the original brand name while the other, who cheated in the previous round, tries to regain 
                reputation by changing to a new brand name, it wouldn't work. The consumers who bought the cheater's product would recognize it was the cheater who changed the brand name and choose to buy from the honest producer instead since the other producer's brand name remains unchanged.</c>
            <bullet>Some endorsements!</bullet>    
            <img src={endorse} alt="Jarvis" className="rectangle-image2" />
        </div>
    );
}

export default QST;


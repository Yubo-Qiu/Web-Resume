import React from 'react';
import './resume.css'; // Importing the CSS file for styles
import kunyu from '../images/kunyu.jpg';
import tabs from '../images/tabs.png';
import SSL from '../images/SSL.png';
import secure from '../images/secure.jpg';
import monitor from '../images/monitor.png';

function Resume() {
    return (
        <div className="rectangle-container">
            <img src={kunyu} alt="Jarvis" className="rectangle-image" />
            <h1>Portfolio Website</h1>
            <bullet>Description:</bullet>
            <c>The project in question is this very website, <b>hireyubo.com</b>. This website serves as a comprehensive portfolio, showcasing my 
            work experience, laboratory research, and various projects.</c>
            <c>It features a <b>React-based</b> frontend, crafted using <b>JavaScript</b> and <b>CSS</b>, and is hosted on an <b>Amazon Web Services (AWS)</b> EC2 instance. For efficient web server management 
                and enhanced performance, <b>Nginx</b> is employed</c>
            <c>Additionally, the website is under the surveillance of <b>Cloudflare</b> for enhanced monitoring and security. It has successfully implemented <b>HTTPS</b>, 
                as evidenced by the "Secure" label in the URL bar, indicating that the website's data transfer is encrypted for enhanced security.</c>
            <bullet>Specifics:</bullet>
            <c><b>1: Front End</b></c>
            <c>The frontend of the website is <b>React-based</b>, developed using <b>JavaScript</b> and <b>CSS</b>.</c> 
            <c>It incorporates a JavaScript library for the <b>tabbed interface</b>, enabling users to navigate between different sections such as work experience, research labs, and projects.</c>
            <img src={tabs} alt="Jarvis" className="rectangle-image-resume2" />
            <c>Each work entry on the website includes a concise description, detailed specifics, and other relevant information. Where applicable, 
                links are provided to the work's GitHub repository, Google Colab notebooks, and associated YouTube videos.</c>
            <c><b>2: AWS</b></c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c><b>3: Cloudflare</b></c>
            <c>The website is monitored by Cloudflare, offering valuable <b>data reports</b> and feedback. This includes metrics such as unique visitors, 
                total requests, and more.</c>
            <img src={monitor} alt="Jarvis" className="rectangle-image-resume3" />
            <c>I also implemented Cloudflare's <b>SSL/TLS certificate</b> management to secure website data transmission, ensuring end-to-end encryption and enhancing overall website security.</c>
            <img src={SSL} alt="Jarvis" className="rectangle-image-resume3" />
            <c>Since the website employs HTTPS to encrypt data transmitted between the user and the site, it is labeled as <b>"Secure"</b> in the browser.</c>
            <img src={secure} alt="Jarvis" className="rectangle-image-resume4" />
        </div>
    );
}

export default Resume;


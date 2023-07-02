import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import profile from './book.jpg';
import Test from './test.js';
import { Link } from 'react-router-dom';


// This is your rectangle component. You can style it as needed.

function Rectangle({ title, content, link }) {
  return (
    <div style={{width: '872px', height: '180px', backgroundColor: 'white', marginBottom: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 20px', position: 'relative'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h3 style={{position: 'absolute', top: '50px', left: '60px', margin: '0', color: 'black', fontSize: '45px'}}>{title}</h3>
        <div style={{marginTop: '100px', marginLeft: '60px', color: 'black', fontSize: '18px'}}>
          <div style={{textAlign: 'left'}}>
            {
              Array.isArray(content) 
                ? content.map((line, index) => <p key={index}>{line}</p>)
                : <p>{content}</p>
            }
          </div>
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
        <Link to={link}>
          <button style={{width: '200px', height: '60px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px'}}>Read More</button>
        </Link>
      </div>
    </div>
  );
}



function Spaces({ title, content }) {
  return (
    <div style={{width: '912px', height: '250px', backgroundColor: 'transparent', marginBottom: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3 style={{margin: '0', color: 'black'}}>{title}</h3>
      <p style={{margin: '0', color: 'black'}}>{content}</p>
    </div>
  );
}

function WorkExperienceCard() {
  // Render 3 rectangles for the WorkExperienceCard
  return (
    <div>
      <Rectangle title="Web Developer" content={["At: BUCSSA, Boston University ( February 2023 - Present )", "Skills: Javascript, CSS, React"]} link="/test" />
      <Rectangle title="Web Assistant" content={["At: Global Programs, Boston University ( June 2022 - Present )", "Skills: Wordpress, HTML5"]} link="/test" />
      <Spaces/>
    </div>
  );
}

function ResearchLabsCard() {
  // Render 2 rectangles for the ResearchLabsCard
  return (
    <div>
      <Rectangle title="Kolachalama Lab, BU" content={["Role: Front-End Developer", "Skills: Django, Bootstrap 5"]} link="/test" />
      <Rectangle title="Security Lab, BU" content={["Role: Machine Learning Developer", "Skills: Python, Okapi BM25"]} link="/test" />
      <Spaces/>
    </div>
  );
}

function ProjectsCard() {
  // Render 4 rectangles for the ProjectsCard
  return (
    <div>
      <Rectangle title="Trigger Phrase Detector" content={["Skills: Python, CNN, Tensorflow"]} link="/test" />
      <Rectangle title="Course Auto-Register" content={["Skills: Python, Selenium"]} link="/test" />
      <Spaces/>
    </div>
  );
}


function App() {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <div id="hero">
              <div className="profile-container">
                <img src={profile} alt="Profile" className="profile-image"/>
                <p className="profile-name">Yubo Qiu</p>
                <p className="profile-intro">
                  Hello, I'm Yubo (仇誉博), <br></br>
                  a dedicated Computer Science student at Boston University！<br></br>
                  My enthusiasm lies in the fields of <br></br>
                  Software Engineering and Machine Learning.<br></br>
                  These are some of my notable works:
                </p> 

                {/* Tab buttons */}
                <div className="tabs-container">
                  <button className={selectedTab === 'Tab1' ? 'selected' : ''} onClick={() => setSelectedTab('Tab1')}>
                    Work Experience
                  </button>
                  <button className={selectedTab === 'Tab2' ? 'selected' : ''} onClick={() => setSelectedTab('Tab2')}>
                    Research Labs
                  </button>
                  <button className={selectedTab === 'Tab3' ? 'selected' : ''} onClick={() => setSelectedTab('Tab3')}>
                    Projects
                  </button>
                </div>

                {/* Tab content */}
                <div style={{height: '100px'}}> {/* You can adjust the height value as needed */}
                  {selectedTab === 'Tab1' && <WorkExperienceCard />}
                  {selectedTab === 'Tab2' && <ResearchLabsCard />}
                  {selectedTab === 'Tab3' && <ProjectsCard />}
                </div>
              </div>
            </div>
          </>
        } />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;


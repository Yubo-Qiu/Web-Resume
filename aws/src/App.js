import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import profile from './book.jpg';
import Test from './test.js';
import { Link } from 'react-router-dom';
import Jarvis from './pages/jarvis.js';
import Ninja from './pages/ninja.js';
import Resume from './pages/resume.js';
import Chalama from './pages/chalama.js';
import Keith from './pages/keith.js';


// This is your rectangle component. You can style it as needed.

function Rectangle({ title, content, link }) {
  return (
    <div style={{width: '872px', height: '180px', backgroundColor: 'white', marginBottom: '1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 20px', position: 'relative'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h3 style={{position: 'absolute', top: '50px', left: '60px', margin: '0', color: 'black', fontSize: '45px'}}>{title}</h3>
        <div style={{marginTop: '100px', marginLeft: '60px', color: 'black', fontSize: '18px'}}>
          <div style={{textAlign: 'left'}}>
          {
            Array.isArray(content) 
              ? content.map((line, index) => <p key={index} style={{margin: '18px 0'}}>{line}</p>) 
              : <p style={{margin: '8px 0'}}>{content}</p> 
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
      <Rectangle title="Full Stack Developer" content={["At: BUCSSA, Boston University ( February 2023 - Present )", "Skills: Javascript, CSS, React"]} link="/test" />
      <Rectangle title="Web Assistant" content={["At: Global Programs, Boston University ( June 2022 - Present )", "Skills: Wordpress, HTML5"]} link="/Keith" />
      <Spaces/>
    </div>
  );
}

function ResearchLabsCard() {
  // Render 2 rectangles for the ResearchLabsCard
  return (
    <div>
      <Rectangle title="Kolachalama Lab, BU" content={["Role: Front-End Developer", "Skills: Django, Bootstrap 5"]} link="/chalama" />
      <Rectangle title="Security Lab, BU" content={["Role: Machine Learning Developer", "Skills: Python, Okapi BM25"]} link="/test" />
      <Spaces/>
    </div>
  );
}

function ProjectsCard() {
  // Render 4 rectangles for the ProjectsCard
  return (
    <div>
      <Rectangle title="Portfolio Website" content={["Skills: Javascript, CSS, React, AWS, Cloudflare, Nginx, Git"]} link="/Resume" />
      <Rectangle title="Trigger Phrase Detector" content={["Skills: Python, CNN, Tensorflow"]} link="/Jarvis" />
      <Rectangle title="Course Auto-Register" content={["Skills: Python, Selenium"]} link="/Ninja" />
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
                  <strong>Hello,</strong> I'm <strong>Yubo (仇誉博),</strong> <br></br>
                  a dedicated <strong>Computer Science</strong> student at <strong>Boston University！</strong><br></br>
                  My enthusiasm lies in the fields of <br></br>
                  <strong>Software Engineering</strong> and <strong>Machine Learning.</strong><br></br>
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
        <Route path='/Jarvis' element={<Jarvis />} />
        <Route path='/Ninja' element={<Ninja />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Chalama' element={<Chalama />} />
        <Route path='/Keith' element={<Keith />} />
      </Routes>
    </Router>
  );
}

export default App;


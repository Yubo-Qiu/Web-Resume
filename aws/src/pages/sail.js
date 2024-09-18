import React from 'react';
import './sail.css'; // Importing the CSS file for styles
import kidney from '../images/kidney.png';
import sail from '../images/sail.png';
import greeting from '../images/greeting.png';
import sailoauth from '../images/sailoauth.png';
import prediction from '../images/prediction.png';
import predicted from '../images/predicted.png';
import server from '../images/server.png';
import newpod from '../images/newpod.png';
import nestedfolder from '../images/nestedfolder.png';


function Sail() {
    return (
        <div className="rectangle-container">
            <img src={sail} alt="Jarvis" className="rectangle-image" /> 
            <h1>Full Stack Developer</h1>
            <bullet>Description:</bullet>
            <c>I completed a <b>paid summer internship</b> at the <a href="https://www.bu.edu/hic/centers-initiatives-labs/sail/" target="_blank" rel="noopener noreferrer">Software & Application Innovation Lab (SAIL)</a> at the <a href="https://www.bu.edu/hic/" target="_blank" rel="noopener noreferrer">Hariri Institute
                 for Computing</a>, a professional software development lab that supports computational and data-driven research at 
                 Boston University. The internship lasted from June 2024 to August 25, 2024.</c>
            <c>During this time, I worked on the <b>Kidney Project</b>, a web application designed to analyze kidney biopsy images by 
                measuring foot process (FP) width and glomerular basement membrane (GBM) width. These measurements are critical 
                for diagnosing and understanding kidney diseases, particularly those affecting the glomeruli, such as glomerulopathies.</c>
            <c>As a full stack software engineer, my responsibilities included building the UI with <b>React</b>, developing a 
                nested folder system using <b>Next.js</b> to manage the <b>S3 bucket</b> for efficient database handling, deploying the application on a cloud server 
                for real-time predictions, implementing auto-scaling using <b>Kubernetes</b> to ensure server stability, and integrating the 
                system with SAIL authentication to enable user registration.</c>
            <bullet>Internship Report Powerpoint:</bullet>
            <c>Here is the final report of my internship, presented in a PowerPoint:</c>
            <a href="https://docs.google.com/presentation/d/1dFDZGjKPgxLdVmc3lrD9s2nT6jtV7oW0/edit?usp=sharing&ouid=111081824332166100321&rtpof=true&sd=true" className="customlink" target="_blank" rel="noopener noreferrer">View the Powerpoint</a>
            <bullet>Specifics:</bullet>
            <c>A graph illustrating the structure of this project is displayed below. During my time in this internship, I actively contributed to <b>all</b> aspects of the project.</c>
            <img src={kidney} alt="Jarvis" className="rectangle-image6" />
            <c>Here is a brief walkthrough of the application. It starts with a greeting page where the user can initiate the login process.</c>
            <img src={greeting} alt="Jarvis" className="rectangle-image2" />
            <c>After the user clicks the login button, they are redirected to the SAIL official OAuth system for authentication.</c>
            <img src={sailoauth} alt="Jarvis" className="rectangle-image2" />
            <c>After successful authentication, the user is directed to the dashboard page, where they can upload image files in the upper left section. The files are then stored in the S3 bucket and displayed in the file list in the lower left section. Pagination and delete features are also functional.</c>
            <img src={prediction} alt="Jarvis" className="rectangle-image2" />
            <c>After selecting an appropriate pixel size for the image and clicking the "Run Prediction" button, the deep learning model processes the image and generates a prediction. Once the prediction is made, it is stored in the database. If the user clicks on an image that already has a prediction, instead of seeing the "Run Prediction" button, the predicted result—including the image mask and numerical outcomes—will be displayed directly.</c>
            <img src={predicted} alt="Jarvis" className="rectangle-image2" />
            <c><b>1: UI</b></c>
            <c>For the UI, I used <b>React</b>, <b>JavaScript</b>, and <b>CSS</b>, and I was responsible for designing and developing the <b>entire </b>user interface for the application.</c>
            <c><b>2: Nested Folder Feature</b></c>
            <c>The nested folder feature is also implemented on the backend using <b>Next.js</b>. As shown below, a <b>folder creation</b> function allows users to create new folders. When uploading an image file, users must select a <b>specific folder</b> as the destination. Additionally, there is a <b>navigation path</b> at the top of the folder list in the bottom left corner. By clicking on a folder name in the path, users are navigated to that folder. <b>Folder deletion</b> is also supported.</c>
            <img src={nestedfolder} alt="Jarvis" className="rectangle-image2" />
            <c><b>3: Deployment</b></c>
            <c>The application is deployed on the <a href="https://nerc.mghpcc.org" target="_blank" rel="noopener noreferrer">New England Research Cloud (NERC)</a> and is configured to scale dynamically, with resources activating only when a request is made, functioning in a <b>serverless</b>-like manner.</c>
            <img src={server} alt="Jarvis" className="rectangle-image9" />
            <c><b>4: Auto-Scaling</b></c>
            <c>The server is managed by <b>Kubernetes</b>, with <b>auto-scaling</b> implemented to maintain server consistency. Kubernetes automatically monitors resource usage (CPU and memory), and the CPU and memory usage threshold for each pod is set at <b>70%</b>. If resource consumption exceeds 70% for any pod, Kubernetes creates a new pod to handle incoming requests. Additionally, the maximum number of requests per pod is capped at <b>2</b>, with Kubernetes ensuring stability and responsiveness by creating <b>new pods</b> when necessary.</c>
            <img src={newpod} alt="Jarvis" className="rectangle-image9" />
            <c><b>5: OAuth and Database Integration</b></c>
            <c>The integration with the SAIL OAuth system and the S3 bucket is handled through Kubernetes secrets, ensuring secure management of sensitive credentials.</c>
            <bullet>Offer Letter:</bullet>
            <a href="https://drive.google.com/file/d/1T5rKbiFU2BIq2keuI9vL-gZU8m0woRtp/view?usp=sharing" className="customlink" target="_blank" rel="noopener noreferrer">Click to view</a>
            <bullet>Thank You All:</bullet>
            <c>Thank you: Zoe! Greg, Karina, Collin, Asad, Dr. Tomlinson, and Mr. Simeon for the best intern experience!</c>
        </div>
    );
}

export default Sail;


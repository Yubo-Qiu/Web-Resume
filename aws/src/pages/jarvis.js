import React from 'react';
import './jarvis.css'; // Importing the CSS file for styles
import wav from '../images/wav.png';
import jar from '../images/jarvis.png';
import yesjar from '../images/jar.png';
import nojar from '../images/nojar.png';
import spec1 from '../images/spec1.png';
import spec2 from '../images/spec2.png';
import spec3 from '../images/spec3.png';

function Jarvis() {
    return (
        <div className="rectangle-container">
            <img src={jar} alt="Jarvis" className="rectangle-image" />
            <h1>Trigger Phrase Detector</h1>
            <bullet>Description:</bullet>
            <c>This project involved developing a detector capable of recognizing a specific trigger phrase, akin 
                to Siri's activation upon hearing "Hey Siri". In this project, the designated trigger phrase for 
                activation is "<b>Jarvis!</b>".This functionality was achieved using a <b>Convolutional 
                Neural Network (CNN)</b> model, which I trained with a self-collected and prepared dataset.</c>
            <c>The implementation of the CNN was facilitated by leveraging the <b>TensorFlow</b> library in <b>Python</b>.</c>
            <a href="https://colab.research.google.com/drive/1Fgw0VdREEPa1XJatgHxUHMqqXEEXrD9q?usp=sharing" className="customlink">Link to the Google Colab</a>
            <bullet>Presentation:</bullet>
            <c>This project was completed as the capstone for a Machine Learning course. For a detailed and engaging overview, please view the 
                accompanying project presentation here:</c>
            <a href="https://docs.google.com/presentation/d/14EybCiuEQVuVBp2L3fb6xRdk3RCr9xwJ0mJ3-N2tMDU/edit?usp=sharing" className="customlink">Link to the Google Slides</a>
            <bullet>Methods:</bullet>
            <c><b>Step 1: Data collection</b></c>
            <c>Initially, I gathered around <b>400</b> voice clips from approximately <b>20</b> individuals, featuring either the trigger phrase 
                or words phonetically similar to it. The data were categorized into two sets: the positive set and the negative set. 
                The <b>positive set</b> exclusively comprises clips with the single word "Jarvis".</c>
            <img src={yesjar} alt="Jarvis" className="rectangle-image7" />
            <c>The <b>negative set</b> contains clips of similar-sounding words, such as "Darkness" or "Harvest", but not the trigger phrase itself.</c>
            <img src={nojar} alt="Jarvis" className="rectangle-image6" />
            <c>The balanced quantity of clips in both sets, coupled with the diversity of contributors who differ in gender, age, and native language, 
                led to a wide range of voice samples. This variety is instrumental in reducing the risk of overfitting.</c>
            <c>Subsequently, I <b>labeled</b> all samples in the positive set with "1" and those in the negative set with "0". After <b>concatenating</b> these 
            labeled sets, I <b>shuffled</b> the data and <b>split</b> it into a training set and a testing set.</c>
            <c><b>Step 2: Data preprocessing</b></c>
            <c>Currently, all the voice samples, exist as <b>raw data</b>, are in WAV file format, which isn't directly compatible with training a CNN model. </c>
            <img src={wav} alt="Jarvis" className="rectangle-image8" />
            <c>To address this, an additional preprocessing step was implemented: converting the WAV files into <b>spectrograms</b>. Following this transformation, samples 
                containing the word "Jarvis" are visually represented below: </c>
            <img src={spec1} alt="Jarvis" className="rectangle-image9" />
            <img src={spec2} alt="Jarvis" className="rectangle-image9" />
            <c>Below are spectrogram examples of words that have phonetic similarities to "Jarvis":</c>
            <img src={spec3} alt="Jarvis" className="rectangle-image9" />
            <c>zero padding.</c>
            <bullet>This:</bullet>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
            <c>This is where your content will go. You can add more content elements inside this container as needed.</c>
        </div>
    );
}

export default Jarvis;


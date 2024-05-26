import React from 'react';
import './jarvis.css'; // Importing the CSS file for styles
import wav from '../images/wav.png';
import jar from '../images/jarvis.png';
import yesjar from '../images/jar.png';
import nojar from '../images/nojar.png';
import spec1 from '../images/spec1.png';
import spec2 from '../images/spec2.png';
import spec3 from '../images/spec3.png';
import jmodel from '../images/jmodel.png';
import para from '../images/para.png';
import results from '../images/results.png';
import loss from '../images/loss.png';
import array from '../images/array.png';

function Jarvis() {
    return (
        <div className="rectangle-container">
            <img src={jar} alt="Jarvis" className="rectangle-image" />
            <h1>Trigger Phrase Detector</h1>
            <bullet>Description:</bullet>
            <c>This project involved developing a detector capable of recognizing a specific trigger phrase, akin 
                to Siri's activation upon hearing "Hey Siri". In this project, the designated trigger phrase for 
                activation is "<b>Jarvis!</b>".</c>
            <c>This functionality was achieved using a <b>Convolutional Neural Network (CNN)</b> model, which I trained 
            with a self-collected and prepared dataset. The implementation of the CNN was facilitated by leveraging 
            the <b>TensorFlow</b> library in <b>Python</b>.</c>
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
            <c>To <b>reshape</b> the data, given the varying sample lengths, I employed a technique known as <b>zero-padding</b>. 
                This involves setting a threshold for the clip length. If a sample exceeds this threshold, it's 
                truncated; if shorter, silence is appended to the end to achieve uniform length across all samples.</c>
            <c><b>Step 3: CNN</b></c>
            <c>The <b>Convolutional Neural Network (CNN)</b> is a multi-layered neural network adept at extracting specific visual features 
                from the provided data, essentially enabling <b>image analysis</b> for this Natural Language Processing (NLP) project. In essence, we're capturing diverse 
                features of the spectrogram images of the trigger phrase 'Jarvis,' as pronounced in various ways, within the model.</c>
            <c>Subsequently, I trained the model with 12 epochs, utilizing an architecture comprising 2 convolutional layers, a flatten layer, and 2 dense layers. 
                Model parameters are detailed below.</c>
            <img src={jmodel} alt="Jarvis" className="rectangle-image10" />
            <img src={para} alt="Jarvis" className="rectangle-image10" />
            <c>Once the model is developed, it's ready for detection tasks. To ensure compatibility, input 
                audio clips must match the model's input shape. This is achieved by <b>slicing</b> the audio 
                into uniformly lengthed smaller windows.</c>
            <bullet>Results:</bullet>
            <c>I experimented with training the model for 16 epochs, achieving a <b>precision of 1.0</b>, which initially seemed improbable.</c>
            <img src={results} alt="Jarvis" className="rectangle-image5" />
            <c>However, the consistent decrease in <b>loss</b> and <b>validation loss</b> suggests that this high precision accurately represents the model's effectiveness.</c>
            <img src={loss} alt="Jarvis" className="rectangle-image11" />
            <c>Below are the results from a self-recorded sentence featuring the trigger phrase repeated several times. The model demonstrates <b>impeccable</b> detection 
            capabilities, as indicated by the '1's in the array, which represent instances where the trigger phrase is recognized.</c>
            <img src={array} alt="Jarvis" className="rectangle-image10" />
            <c>Several tests were conducted using various audio files, and consistently, the same high level of detection accuracy was achieved.</c>
            <bullet>Evaluations:</bullet>
            <c>This project was executed smoothly and successfully. However, the perfect testing results may hint at <b>overfitting</b>, potentially due to the limited amount of training 
                data and the fact that the test audio samples were self-recorded with the same voice.</c>
            <c><b>Data augmentation</b> could serve as a viable strategy to mitigate the risk of overfitting in this project, such as randomly slowing down syllables or adjusting volumes.</c>
            <c><b>Real-time detection</b> hasn't been implemented due to Colab's limitations in accessing the local microphone. However, there's potential 
                to export the model and integrate it with a microphone using Jupyter Notebook for live audio processing. However, configuring the environment for this integration could 
                present some challenges.</c>
            <bullet>Fun Fact:</bullet>
            <c>An interesting observation during this project was that the model struggled to recognize the trigger phrase in <b>movie audio clips</b>, even when I clearly articulated it. 
                This suggests that while human ears can effectively filter out background noises, such as those in Tony Stark's action scenes, computers 
                might get confused by these complex soundscapes.</c>
            <bullet>Reference:</bullet>
            <c>This project greatly benefited from the insights and guidance provided by this video tutorial.</c>
            <a href="https://www.youtube.com/watch?v=ZLIPkmmDJAc" className="customlink">Link to the YouTube video</a>
        </div>
    );
}

export default Jarvis;


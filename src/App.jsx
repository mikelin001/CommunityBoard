import React from "react";
import InfoSheet from "./assets/components/infoSheet";
import './App.css';
import Met2 from "./images/Met2.jpg";
import BrooklynM from "./images/BrooklynMuseum.jpg";
import JewishM from "./images/JewishMuseum.jpg";
import MoMA from "./images/MoMA.jpg";
import MuseumCity from "./images/MuseumCity.jpg";
import NaturalHistory from "./images/NaturalHistory.jpg";
import PhotoM from "./images/PhotographyMuseum.jpg";
import TransitM from "./images/TransitMuseum.jpg";
import Whiteney from "./images/Whiteney.jpg";
import HistorySociety from "./images/HistorySociety.jpg"


const App = () => {
    return (
        <div className="App">
            <div className="firstSection">
                {/*header section*/}
                <div className="Title">
                <h1>Famous Museums in New York</h1>
                <p className="Quote">"A museum is a place where nothing was lost, just rediscovered."</p>
                <p className="Author"> - Nanette L. Avery</p>
                </div>
                <img src="src\images\MET.png" alt="Metropolitan Museum of Art"/>
            </div>
            <p className="Museum">List of Museums</p>
            <div className="secondSection">  
                    
                    <InfoSheet image={Met2}/>
                    <InfoSheet image={BrooklynM}/>
                    <InfoSheet image={JewishM}/>
                    <InfoSheet image={MoMA}/>
                    <InfoSheet image={MuseumCity}/>
                    <InfoSheet image={NaturalHistory}/>
                    <InfoSheet image={PhotoM}/>
                    <InfoSheet image={TransitM}/>
                    <InfoSheet image={Whiteney}/>
                    <InfoSheet image={HistorySociety}/>
            </div>
        </div>

    );
 }

 export default App;
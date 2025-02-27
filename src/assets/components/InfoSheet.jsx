import React from "react";
import "../components/InfoSheet.css";

const InfoSheet = (props) => 
    {
        return(
            <div className="infosheet">
                <img className="graphic-img" src={props.image} alt="test"></img>
                <button className="buttonMuseum">Go Here!</button>
            </div>
        );
    }

export default InfoSheet;
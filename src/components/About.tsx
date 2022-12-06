import React from "react";

import labels from "../images/carousel-shop-1.jpg"
import nicelyPacked from "../images/carousel-shop-4.jpg"
import chilledMe from "../images/ChilledMe.jpg"
import friends from "../images/carousel-shop-6.jpg"

const About = () => {
    return (
        <div className="noFutureGallery">
            <div className="card">
                <img
                    src={labels} alt ={labels}/>
                <div className="cardHead">Organic cotton</div>
            </div>
            <div className="card">
                <img
                    src={chilledMe} alt={chilledMe}/>
                <div className="cardHead">Increases flexibility</div>
            </div>
            <div className="card">
                <img
                    src={nicelyPacked} alt={nicelyPacked}/>
                <div className="cardHead">Nicely packed</div>
            </div>
            <div className="card">
                <img src={friends} alt={friends}/>
                <div className="cardHead">Friends wear No Future</div>
            </div>

        </div>
    )
}

export default About;
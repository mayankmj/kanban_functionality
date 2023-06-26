import React from "react";
import image1 from "../assets/hero-grp-img.png"
import "../Style/Hero.css"
const Hero = () => {
    return(
        <div>
            <div className="hero-row">
                <h1 className="hero-heading">Mobile App</h1>
                <img src={image1} alt="my-image" />
            </div>
        </div>
    )
}

export default Hero
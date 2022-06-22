import React from "react";
import hero from "./images/hero-image.jpg";
import './styles/hero.css';

const Hero = () => {

    return (
        <section className="hero-area">
            <div className="image-div">
                <img src={hero} alt="Hero Banner" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">Women’s Outerwear</h1>
                <div className="hero-band"></div>
            </div>
        </section>
    )
}

export default Hero;
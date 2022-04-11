import React from 'react';
import profile from '../img/profile.jpg'

export default function Hero() {

    return(
        <section className="hero">
            <h2 className="hero__heading">Creative Technologist</h2>
            <p className="hero__text">I'm a developer with a passion for cutting-edge user experiences.</p>
            <img className="hero__image" src={profile} alt="eric canosa headshot" />
            {/* <h2 className="hero__heading">Eric Canosa</h2> */}
        </section>
    )
}
import React from 'react';
import { FiArrowRight  } from "react-icons/fi";
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'
import { Link } from "react-router-dom";

function Landing(){
    return (
    <div id="page-landing">
        <div className="content-wrapper">
            <img src={logoImg} alt="Happy"/>
            <main>
                <h1>Bring Happiness to the World</h1>
                <p>Visit Orphanages and change the day of many children.</p>
            </main>
            <div className="location">
                <strong>Berlin</strong>
                <span>Deutschland</span>
            </div>
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>
        </div>
    </div>
    );
}

export default Landing
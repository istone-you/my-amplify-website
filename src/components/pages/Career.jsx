import React from 'react'
import { useState, useEffect } from 'react';
import Skill from '../layout/Skill';
import History from '../layout/History';
import '../styles/fade.css';

const Career = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);
    return (
        <div className={`App ${isLoaded ? "loaded" : ""}`} style={{ textAlign: "center" }}>
            <div>
                <p style={{ fontSize: "50px" }}>Career</p>
            </div>
            <History />
            <br />
            <Skill />
            <br />
        </div>
    )
}

export default Career
import React from 'react'
import { useState, useEffect } from 'react';
import useMedia from 'use-media';
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

    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '40%' : '90%'

    return (
        <div className={`App ${isLoaded ? "loaded" : ""}`} style={{ textAlign: "center", width: width, margin: "0 auto", overflowWrap: "normal", fontFamily: "ヒラギノ角ゴシック" }}>
            <div>
                <p style={{ fontSize: "50px" }}><b>Career</b></p>
            </div>
            <History />
            <br />
            <Skill />
            <br />
        </div>
    )
}

export default Career
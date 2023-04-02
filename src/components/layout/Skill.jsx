import React from 'react';
import { useState, useEffect } from 'react';
import useMedia from 'use-media';
import All from './All';
import Aws from './Aws';
import '../styles/fade.css';


const Skill = () => {
    const [isAll, setIsAll] = useState(true);
    const [animationClass, setAnimationClass] = useState("fade-enter");

    const handleClick = () => {
        setIsAll(!isAll);
    };

    const [backgroundColor, setBackgroundColor] = useState("#eb6100");

    useEffect(() => {
        setAnimationClass("fade-enter");
        const timer = setTimeout(() => {
            setAnimationClass("fade-enter-active");
        }, 50);

        return () => {
            clearTimeout(timer);
        };
    }, [isAll]);

    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '40%' : '90%'

    return (
        <div style={{ margin: "0 auto", overflowWrap: "normal", width: width }}>
            <h1>Skill</h1>
            <button
                onClick={handleClick}
                onMouseEnter={() => setBackgroundColor("#f56500")}
                onMouseLeave={() => setBackgroundColor("#eb6100")}
                style={{
                    color: "#fff",
                    backgroundColor: backgroundColor,
                    borderRadius: '100vh'
                }}
            >
                <b>{isAll ? "AWSサービス" : "戻る"}</b>
            </button>
            <div className={animationClass}>{isAll ? <All /> : <Aws />}</div>

        </div>
    )
}

export default Skill
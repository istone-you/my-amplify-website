import React from 'react';
import { useState, useEffect } from 'react';
import All from './All';
import Aws from './Aws';
import '../styles/fade.css';


const Skill = () => {
    const [isAll, setIsAll] = useState(true);
    const [animationClass, setAnimationClass] = useState("fade-enter");
    const [backgroundColor, setBackgroundColor] = useState("#eb6100");

    const handleClick = () => {
        setIsAll(!isAll);
    };

    useEffect(() => {
        setAnimationClass("fade-enter");
        const timer = setTimeout(() => {
            setAnimationClass("fade-enter-active");
        }, 50);

        return () => {
            clearTimeout(timer);
        };
    }, [isAll]);

    return (
        <div>
            <h1>Skill</h1>
            <button
                onClick={handleClick}
                onMouseEnter={() => setBackgroundColor("#f56500")}
                onMouseLeave={() => setBackgroundColor("#eb6100")}
                style={{
                    color: "#fff",
                    backgroundColor: backgroundColor,
                    borderRadius: '100vh',
                    border: "none",
                    padding: "10px 20px",
                }}
            >
                <b>{isAll ? "AWSサービスはこちら" : "戻る"}</b>
            </button>
            <div className={animationClass}>{isAll ? <All /> : <Aws />}</div>

        </div>
    )
}

export default Skill
import React from 'react';
import { useState, useEffect } from 'react';
import All from './All';
import Aws from './Aws';
import '../styles/fade.css';


const Skill = () => {
    const [isAll, setIsAll] = useState(true);
    const [animationClass, setAnimationClass] = useState("fade-enter");

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
            <div style={{ display: 'flex' }}>
                <div
                    onClick={() => setIsAll(true)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setIsAll(true);
                        }
                    }}
                    role = "button"
                    tabIndex = "0"
                    style={{
                        width: "50%",
                        pointerEvents: isAll ? "none" : "",
                        background: isAll ? "" : "transparent",
                        cursor: isAll ? "default" : "pointer",
                        border: "none",
                        color: isAll ? "white" : "black",
                        backgroundColor: isAll ? "black" : "",
                        borderBottom: isAll ? "none" : `2px solid black`,
                    }}
                >
                    <b>All</b>
                </div>
                <div
                    onClick={() => setIsAll(false)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setIsAll(false);
                        }
                    }}
                    role = "button"
                    tabIndex = "0"
                    style={{
                        width: "50%",
                        pointerEvents: isAll ? "" : "none",
                        background: isAll ? "transparent" : "",
                        cursor: isAll ? "pointer" : "default",
                        border: "none",
                        color: isAll ? "black" : "white",
                        backgroundColor: isAll ? "" : "black",
                        borderBottom: isAll ? `2px solid black` : "none",
                    }}
                >
                    <b>AWS</b>
                </div>
            </div>
            <div className={animationClass} style={{marginTop: "20px"}}>{isAll ? <All /> : <Aws />}</div>
        </div>
    )
}

export default Skill
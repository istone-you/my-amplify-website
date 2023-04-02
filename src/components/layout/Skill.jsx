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
                        backgroundColor: isAll ? "#eb6100" : "",
                        borderBottom: isAll ? "none" : "1px solid #eb6100",
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
                        backgroundColor: isAll ? "" : "#eb6100",
                        borderBottom: isAll ? "1px solid #eb6100" : "none",
                    }}
                >
                    <b>AWS</b>
                </div>
            </div>
            <div className={animationClass}>{isAll ? <All /> : <Aws />}</div>
        </div>
    )
}

export default Skill
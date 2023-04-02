import React from 'react'
import { useState } from 'react'
import useMedia from 'use-media'
import All from './All'
import Aws from './Aws'


const Skill = () => {
    const [isAll, setIsAll] = useState(true);

    const handleClick = () => {
        setIsAll(!isAll);
    };

    const [backgroundColor, setBackgroundColor] = useState("#eb6100");

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
                {isAll ? "AWSサービス" : "戻る"}
            </button>
            {isAll ? <All /> : <Aws />}
        </div>
    )
}

export default Skill
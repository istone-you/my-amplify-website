import React from 'react'
import Skill from '../layout/Skill';
import History from '../layout/History';

const Career = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Noto Sans JP" }}>
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
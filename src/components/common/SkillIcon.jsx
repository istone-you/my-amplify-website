import React from 'react'

const SkillIcon = (prpps) => {
    return (
        <div style={{ flex: '1 0 25%', textAlign: 'center' }}>
            <img src={prpps.imgSrc} height="100px" alt={prpps.text} style={{ padding: prpps.padding ? "15px" : "10px" }} />
            {prpps.isStar ? <p><b>{prpps.text}</b></p> : <p>{prpps.text}</p>}
        </div>
    )
}

export default SkillIcon
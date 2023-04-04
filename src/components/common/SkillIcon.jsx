import React from 'react'

const SkillIcon = (prpps) => {
    return (
        <div style={{margin: "0 auto"}}>
            <div style={{ textAlign: 'center', margin: "15px" }}>
                <img src={prpps.imgSrc} width="100px" alt={prpps.text} style={{ padding: prpps.padding ? "15px" : "10px" }} />
                {prpps.isStar ? <p><b>{prpps.text}</b></p> : <p>{prpps.text}</p>}
            </div>
        </div>
    )
}

export default SkillIcon
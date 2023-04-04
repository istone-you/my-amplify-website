import React from 'react'
import useMedia from 'use-media';

const SkillIcon = (prpps) => {
    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '25%' : '30%'
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
import React from 'react'
import useMedia from 'use-media';

const SkillIcon = (prpps) => {
    const isWide = useMedia({ minWidth: '768px' })
    const width = isWide ? '25%' : '30%'
    return (
        <div style={{ flex: `1 0 ${width}`, textAlign: 'center' }}>
            <img src={prpps.imgSrc} width="100px" alt={prpps.text} style={{ padding: prpps.padding ? "15px" : "10px" }} />
            {prpps.isStar ? <p><b>{prpps.text}</b></p> : <p>{prpps.text}</p>}
        </div>
    )
}

export default SkillIcon
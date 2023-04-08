import React from 'react'

const SkillIcon = (props) => {
    return (
        <div style={{
            width: "130px",
            margin: "0 auto",
            display: props.aws ? "" : "flex",
            alignItems: props.aws ? "" : "flex-end"
        }}>
            <div style={{
                textAlign: 'center',
                margin: "15px",
                marginTop: props.aws ? "" : "auto"
            }}>
                <img
                    src={props.imgSrc}
                    width="100px"
                    alt={props.text}
                    style={{ padding: props.padding ? "15px" : "10px" }}
                />
                {props.isStar ? <p><b>{props.text}</b></p> : <p>{props.text}</p>}
            </div>
        </div>
    )
}

export default SkillIcon


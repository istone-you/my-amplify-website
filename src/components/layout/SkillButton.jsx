import React from 'react'

const SkillButton = (props) => {
    return (
        <div
            onClick={() => props.setSelectSkill(props.skill)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    props.setSelectSkill(props.skill);
                }
            }}
            role="button"
            tabIndex="0"
            style={{
                width: "100%",
                pointerEvents: props.selectSkill === props.skill ? "none" : "",
                background: props.selectSkill === props.skill ? "" : "transparent",
                cursor: props.selectSkill === props.skill ? "default" : "pointer",
                border: "none",
                color: props.selectSkill === props.skill ? "white" : "black",
                backgroundColor: props.selectSkill === props.skill ? "black" : "",
                borderBottom: props.selectSkill === props.skill ? "none" : `2px solid black`,
            }}
        >
            <b>{props.skill}</b>
        </div>
    )
}

export default SkillButton
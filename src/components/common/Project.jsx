import React from 'react'

const Project = (props) => {
    return (
        <div className="animate__animated animate__fadeInUp">
            <h3>{props.title}</h3>
            <ul>
                {props.detail}
            </ul>
        </div>
    )
}

export default Project
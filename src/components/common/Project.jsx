import React from 'react'

const Project = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            {props.detail}
        </div>
    )
}

export default Project
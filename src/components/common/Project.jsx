import React from 'react'

const Project = (props) => {
    const ulStyle = {
        padding: 0,
        fontSize: '14px',
        lineHeight: 1.6,
        listStyle: 'none'
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <ul style={ulStyle}>
                {props.detail}
            </ul>
        </div>
    )
}

export default Project
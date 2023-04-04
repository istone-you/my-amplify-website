import React from 'react'

const Article = (props) => {

    const liStyle = {
        listStyle: "none",
        position: "relative",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        marginBottom: "50px"
    }

    return (
        <li style={liStyle}>
            <h3><a href={`${props.url}`}>{props.title}</a></h3>
            <p>{props.description}</p>
            <img width={props.width} alt={props.alt} src={props.src}></img>
        </li>
    )
}

export default Article
import React from 'react'

const Repository = (props) => {

  const cardStyle = {
    position: "relative",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    marginBottom: "30px"
  }

  return (
    <div style={cardStyle}>
      <h3><a href={`https://github.com/istone-you/${props.title}`}>{props.title}</a></h3>
      <p>{props.description}</p>
      <img width={props.width} alt={props.alt} src={props.src}></img>
    </div>
  )
}

export default Repository
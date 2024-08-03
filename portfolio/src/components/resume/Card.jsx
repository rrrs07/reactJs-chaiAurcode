import React from 'react'

function Card(props) {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <h3 className="timeline__title">{props.title}</h3>
        <span className="timeline__date">{props.year}</span>
        
        <p className="timeline__description">{props.details}</p>
    </div>
  )
}

export default Card

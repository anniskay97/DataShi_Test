import React from 'react';
import './App.css';


const Player = (props) =>(
  <div className="col">
    <img className="photoPlayer" src={props.src} alt = "Player"></img>
    <h6><strong>Name: </strong>{props.name}</h6>
    <h6>{props.text}</h6>
    <a className="viewProfile" href = "#">View profile >></a>
  </div>
)
export default Player
import React from 'react';
import './App.css';

const Service= (props) =>(
  <div className="col">
    <h4>{props.title}</h4>
    <h6>{props.text}</h6>
  </div>
)
export default Service
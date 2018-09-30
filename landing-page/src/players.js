import React from 'react';
import './App.css';
import photoWomen from './img/sotrudnik.jpg'
import Player from './player'

const Players = () =>(
  <div className="container">
    <div className="row">
      <Player src = {photoWomen} name= "Jane Doe" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut interdum libero."></Player>
      <Player src = {photoWomen} name= "Jane Doe" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut interdum libero."></Player>
      <Player src = {photoWomen} name= "Jane Doe" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut interdum libero."></Player>
      <Player src = {photoWomen} name= "Jane Doe" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut interdum libero."></Player>
      <Player src = {photoWomen} name= "Jane Doe" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut interdum libero."></Player>
    </div>
  </div>
)
export default Players
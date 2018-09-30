import React from 'react';
import './App.css';
import officeParis from './img/office-v-parizhe.jpg'
import office2 from './img/429846_gallery.world.jpg'
import officeBus from './img/office-dlia-biznesa.jpg'

const Slider = () =>(
  <div className="container mt-3">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ul>

      <div className="carousel-inner text-center">
        <div className="carousel-item active">
          <img src={officeParis} alt="Los Angeles" width="700" height="300"/>
        </div>
        <div className="carousel-item">
          <img src={office2} alt="Chicago" width="700" height="300"/>
        </div>
        <div className="carousel-item">
          <img src={officeBus} alt="New York" width="700" height="300"/>
        </div>
      </div>

      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
)
export default Slider
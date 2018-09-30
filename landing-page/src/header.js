import React from 'react';
import './App.css';
import bootstrap from 'bootstrap';

const Header = () =>(

<nav className="navbar navbar-expand-lg bg-light navbar-light">

  <div className="logo">
    <h3>Composition</h3>
    <h6 className="d-sm-none d-md-block">Free Psd Website Template</h6>
  </div>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse bg-danger navbar-dark  menu" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">HOMEPAGE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">STYLE DEMO</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">FULL WIDTH</a>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " id = "navbarDropdown1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DROPDOWN</a>
          <div className="dropdown-menu ">
            <a className="dropdown-item" href="#">LINK1</a>
            <a className="dropdown-item" href="#">LINK2</a>
            <a className="dropdown-item" href="#">LINK3</a>
            
          </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">LINK TEXT</a>
      </li> 
    </ul>
  </div> 
</nav>

)
export default Header
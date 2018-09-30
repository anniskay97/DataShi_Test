import React from 'react';
import './App.css';
import RegistrarionForm from './registrationForm'

const Footer = () =>(
  <div className = "footer text-center">
    <div className=" row">
      <div className="col companyDetails">
        <div className="details">
          <h4>Company details</h4>
          <h6>Company name</h6>
          <h6>Street name and number</h6>
          <h6>Town</h6>
          <h6>Zip code</h6>
        </div>
        <div className="officeHours">
          <h4>Ofiice hours</h4>
          <h6>Monday-Friday: 08.00-17.00 </h6>
          <h6>Saturday: 08.00-13.00</h6>
        </div>
      </div>

        <div className="col">
        <RegistrarionForm/>
        </div>
    </div>
  </div>
)
export default Footer
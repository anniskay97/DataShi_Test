import React from 'react';
import axios from 'axios';

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log(formData);

     axios.post('http://localhost:64105/api/values', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
      })
     .then(response => console.log("response" + response.name));
  }
  
  render() {
    return (
      <div>
        <h4 className="registration">Registration</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Name: <br/> 
            <input ref="name" className="name" type='text' name="name"/>
          </label>
          <label>Email:<br/>  
            <input ref="email" className="email" type='tel' name="email"/>
          </label>
          <label>Password: <br/> 
            <input ref="password" className="password" type='password' name="password"/>
          </label>
          <br/>
          <input type="submit" value="Submit" className="btn btn-danger"/>
        </form>
      </div>
      );
    }
  }
  
  export default RegistrationForm
  
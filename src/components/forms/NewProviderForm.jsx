import React from 'react';
import ApiService from '../../utils/apiService';

class NewProviderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      address: '',
      state: '',
      rating: 1,
      type: 'Hospital',
      image: '',
  };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState( {[event.target.name]: event.target.value });
  }
  handleFileChange = event => {
    this.setState({ image: event.target.files[0] })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const urlToReach =  'https://rhmo-sample-api.herokuapp.com/providers'
    const { name, address, state, rating, type, image } = this.state;
    const providerDetails = JSON.stringify({ name, address, state, rating, type, image })
    ApiService.post(urlToReach, providerDetails)
    alert('New Provider Added')
  }
  // TASK 4: Add New Provider
  // Add Functionality to the form below
  // On submission it should make a POST request to 
  // the server to create a new provider.
  // Refer to the API documentation for details.

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Provider Name:</label>
          <input className="input__style_1" type="text" name="name" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider Address:</label>
          <input className="input__style_1" type="text" name="address" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Provider State:</label>
          <input className="input__style_1" type="text" name="state" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Provider Rating:</label>
          <select className="select input__style_1" type="number" name="rating" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="type">Provider type:</label>
          <select className="select input__style_1" type="text" name="type" onChange={this.handleChange}>
            <option value="hospital">Hospital</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="clinic">Clinic</option>
          </select>
        </div>        
        <div className="form-group">
          <label htmlFor="image">Provider Image</label>
          <img src="https://via.placeholder.com/400x200" alt="new provider"/>
          <input type="file" name="file" onChange={this.handleFileChange}/>
        </div>
        <div className="form-group button-row">
          <button
            type="submit"
            className="btn btn-primary no-margin"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default NewProviderForm;

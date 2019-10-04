import React from 'react';
import ApiService from '../utils/apiService';
import '../layouts/style.css'

class ViewProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      provider: {}
    }
  };
  componentDidMount() {
    ApiService.get(`https://rhmo-sample-api.herokuapp.com/providers/${this.props.match.params.id}`)
      .then(data => {
        this.setState({provider: data, loading: false})
      })
  }
render() {
      return (
        <div className="provider">
          {
            this.state.loading ? <h1>Loading</h1> : (
              <div className="provider-card">
              <img src={this.state.provider.data.imageUrl} alt="Provider" />  
              <h1>
                Name: { this.state.provider.data.name}
              </h1>
              <h3>Type: { this.state.provider.data.type}</h3> 
                <h4>Location</h4>
                <h3>Address: { this.state.provider.data.location.address}</h3>
                <h3>State: { this.state.provider.data.location.state}</h3>
              </div>
            )
          }
         
        </div>
      )
    }
}

export default ViewProvider;
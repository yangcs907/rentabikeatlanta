import React, { Component } from "react";
import "../index.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      name: "",
      phone: "",
      email: "",
      availability: ""
    };
  };

  componentDidMount() {
    this.loadListings();
  };

  // loadListings = () => {
  //   API.getListings()
  //     .then(res =>
  //     this.setState( {location: res.data})
  //   )
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        {this.state.location.map(location => (
          <h4>
          <p>{location.location}</p>
          <p>{location.name}</p>
          <p>{location.email}</p>
          <p>{location.phone}</p>
          <p>location.availability</p>
          <a onClick={() => this.deleteListing(location._id)}>Delete Listing</a>
          </h4>
        ))}
      </div>
    )
  }


}


export default Test;

// <div>
//   {this.state.name.map(name => (
//     <div>
//       <p>Pickup Station: {this.state.location}</p>
//       <p>Name: {this.state.name}</p>
//       <p>Email: {this.state.email}</p>
//       <p>Phone: {this.state.phone}</p>
//     </div>
//   ))}
// </div>

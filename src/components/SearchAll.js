import React, { Component } from "react";
import "../index.css";
import firebase from "./firebase.js";

const bold = {
  fontWeight: "bold"
};

class SearchAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    }
  };
  componentDidMount() {
    const listingsRef = firebase.database().ref("listings");
    listingsRef.on("value", (snapshot) => {
      let listings = snapshot.val();
      let newState = [];
      for (let name in listings) {
        newState.push({
          id: name,
          name: listings[name].name,
          location: listings[name].location,
          email: listings[name].email,
          price: listings[name].price,
          phone: listings[name].phone,
          availability: listings[name].availability,
          user: listings[name].user
        });
      }
      this.setState({
        name: newState
      });
      console.log(newState);
    });
  };



  render() {
    return (
      <div className="listingHead">
      <h4>{this.props.currentUser}Available Bikes</h4>
      <p>All bikes</p>
      {this.state.name.map(name => (
          <div className="ListingContainer">
            <div className="row">
              <div className="col s12 m12">
            <p style={bold}>Station: {name.location}</p>
            <p>Name: {name.name}</p>
            <p>Hourly Rate: {name.price}</p>
            <p>Email: {name.email}</p>
            <p>Phone: {name.phone}</p>
            <p>Availability: {name.availability}</p>
            <a href="mailto:">Contact {name.name}</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  };
};

export default SearchAll;

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

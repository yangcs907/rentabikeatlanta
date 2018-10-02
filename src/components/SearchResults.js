import React, { Component } from "react";
import "../index.css";
import firebase from "./firebase.js";

const bold = {
  fontWeight: "bold"
};

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      location: this.props.location,
      updateSearchResults: ""
    }
  };
  componentDidMount() {
    const location = this.state.location;
    const listingsRef = firebase.database().ref("listings");
    const listingsLocationRef = listingsRef.orderByChild("location").equalTo(location);
    listingsLocationRef.on("value", (snapshot) => {
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
      <p>For {this.props.location} Bike Station</p>
      <a href="/Search" id="searchButton">Do another search</a>
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
              <a href="mailto:" id="searchButton">Contact {name.name}</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  };
};

export default SearchResults;

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

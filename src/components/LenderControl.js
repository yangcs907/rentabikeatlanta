import React, { Component } from "react";
import "../index.css";
import firebase from "./firebase.js";

class LenderControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      name: [],
      location: "",
      email: "",
      price: ""
    }
  };
  componentDidMount() {
    const user = this.state.currentUser;
    const listingsRef = firebase.database().ref("listings");
    const listingsUserRef = listingsRef.orderByChild("user").equalTo(user);
    listingsUserRef.on("value", (snapshot) => {
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
      let filteredState = newState.filter(user => {
        return user = this.state.currentUser;
      });
      this.setState({
        name: newState
      });
      console.log(newState);
    });
  }

  render() {
    return (
      <div>
      <h5>{this.props.currentUser}, below are the bikes you have listed</h5>
      {this.state.name.map(name => (
          <div className="lenderListingContainer">
            <div className="row">
              <div className="col s12 m12">
            <p>Username: {name.user}</p>
            <p>Station: {name.location}</p>
            <p>Name: {name.name}</p>
            <p>Hourly Rate: {name.price}</p>
            <p>Email: {name.email}</p>
            <p>Phone: {name.phone}</p>
            <p>Availability: {name.availability}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  };
};

export default LenderControl;

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

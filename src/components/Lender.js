import React, { Component } from "react";
import "../index.css";
import firebase from "./firebase.js";
import LenderControl from "./LenderControl.js";

const usernameStyle = {
  paddingLeft: "0px"
};
class Lender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      location: "",
      phone: "",
      price: "",
      loggedIn: false,
      newUser: "",
      newpassword: "",
      password: "",
      currentUser: ""
    };
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleListingSubmit = event => {
    event.preventDefault();
    const listingRef = firebase.database().ref('listings');
    const listing = {
      user: this.state.currentUser,
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      phone: this.state.phone,
      price: this.state.price,
      availability: "available"
    }
    listingRef.push(listing);
    this.setState({
      name: "",
      email: "",
      location: "",
      phone: "",
      price: ""
    });
  };

  getCurrentListings = event => {

  }

  login = () => {
    this.setState({ loggedIn: true});
  }

  checkNewUserCreation = () => {
    console.log(this.state.newUser);
    console.log(this.state.newpassword);
  }
  checkLoginInfo = () => {
    console.log(this.state.currentUser);
    console.log(this.state.password);
  }
  getState = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.location);
    console.log(this.state.phone);
  };

  render() {
    const nameState = this.state.name;
    const emailState = this.state.email;
    const locationState = this.state.location;
    const phoneState = this.state.phone;
    const newUserState = this.state.newUser;
    const passwordState = this.state.password;
    const currentUserState = this.state.currentUser;

    let submit
    if (nameState && emailState && locationState && phoneState) {
      submit = <a onClick={this.handleListingSubmit} id="searchButton">Submit</a>
    } else {
      submit = <a id="noSearch" href="">Submit</a>
    };

    let create
    if (newUserState && passwordState) {
      create = <a onClick={this.checkNewUserCreation} id="searchButton">Create</a>
    } else {
      create = <a id="noSearch" href="">Create</a>
    }

    let login
    if (currentUserState) {
      login = <a onClick={this.login} id="searchButton">Login</a>
    } else {
      login = <a id="noSearch">Login</a>
    }

    if(this.state.loggedIn) {
    return (
      <div className="lenderPage">
        <div className="row" id="lenderPageTitle">
          <h4>Welcome {this.state.currentUser}!</h4>
          <p>Here you can list a bike for rent or manage your existing bikes</p>
        </div>
      <div className="row">
        <div className="col s12 m6">
          <h4>List a Bike for Rent!</h4>
            <a href="/"><i className="fas fa-arrow-left"></i>&nbsp;Back</a>
          <form>
            <div class="row">
              <div class="input-field col s12">
                <input
                  placeholder="Please enter your full name"
                  name="name"
                  id="name"
                  type="text"
                  class="validate"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  />
              </div>
              <div class="input-field col s12">
                <input
                  placeholder="Please enter your email address"
                  name="email"
                  id="email"
                  type="email"
                  class="validate"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  />
              </div>
              <div class="input-field col s12">
                <input
                  placeholder="Please enter your phone number"
                  name="phone"
                  id="phone"
                  type="text"
                  class="validate"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  />
              </div>
              <div class="input-field col s12">
                <input
                  placeholder="Hourly Rate $$"
                  name="price"
                  id="price"
                  type="text"
                  class="validate"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  />
              </div>
              <p>Select a Bike Station to Drop Off Your Bike</p>
              <div className="row">
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Georgia Tech"
                    onChange={this.handleInputChange}
                    />
                  <span>Georgia Tech</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Atlantic Station"
                    onChange={this.handleInputChange}
                    />
                  <span>Atlantic Station</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Midtown"
                    onChange={this.handleInputChange}
                    />
                  <span>Midtown</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Five Points"
                    onChange={this.handleInputChange}
                    />
                  <span>Five Points</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Inman Park"
                    onChange={this.handleInputChange}
                    />
                  <span>Inman Park</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="South Atlanta"
                    onChange={this.handleInputChange}
                    />
                  <span>South Atlanta</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Virginia Highland"
                    onChange={this.handleInputChange}
                    />
                  <span>Virginia Highland</span>
                </label>
              </div>
              <div class="input-field col s3">
                <label>
                  <input
                    name="location"
                    type="radio"
                    value="Buckhead"
                    onChange={this.handleInputChange}
                    />
                  <span>Buckhead</span>
                </label>
              </div>
            </div>
            </div>
            {submit}
          </form>
        </div>
        <div className="col s12 m6">
          <h4>Current Bikes</h4>
          <LenderControl
            currentUser = {this.state.currentUser}
            />

        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div className="login">
        <div className="row" id="loginPageTitle">
            <a href="/"><i className="fas fa-arrow-left"></i>&nbsp;Back</a>
        </div>
        <div className="row">
      <div className="col s12 m12">
        <h5>Enter a Username</h5>
        <p>Already have a listing? Enter your previous username to manage your bikes</p>
          <div class="input-field col s12" style={usernameStyle}>
            <input
              placeholder="Please enter your username"
              name="currentUser"
              id="currentUser"
              type="text"
              class="validate"
              value={this.state.currentUser}
              onChange={this.handleInputChange}
              />
          </div>
          {login}
      </div>
      </div>
    </div>
    );
  };
  };
};

export default Lender;

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

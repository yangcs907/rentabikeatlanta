import React, { Component } from "react";
import "../index.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      email: "",
      phone: ""
    };
  };
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };
  checkState = () => {
    console.log(this.state.name);
    console.log(this.state.location);
    console.log(this.state.email);
    console.log(this.state.phone);
  };
  // loadSearchResults = () => {
  //   API.getResults()
  //     .then(res=>
  //     this.setState({ name: res.data })
  //   )
  //     .catch(err => console.log(err));
  // };
  render() {
    const nameState = this.state.name;
    const locationState = this.state.location;
    const emailState = this.state.email;
    const phoneState = this.state.phone;

    let search
    if (nameState && locationState && emailState && phoneState) {
      search = <a onClick={this.checkState} id="searchButton">Search</a>
    } else {
      search = <a id="noSearch">Search</a>
    }
    return (
      <div className="searchPage">
        <div className="row">
          <div className="col s12 m6">
            <h4>Find Your Ride</h4>
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
                <p>Select a Bike Station to Pick Up Your Bike</p>
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
              {search}
            </form>
          </div>
          <div className="col s12 m6">
            <h4>Available Bikes</h4>

          </div>
        </div>
      </div>
    )
  };
};

export default Search;

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

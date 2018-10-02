import React, { Component } from "react";
import "../index.css";
import SearchAll from "./SearchAll.js";
import SearchResults from "./SearchResults.js";
import firebase from "./firebase.js";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      searchAll: false,
      searchResults: false,
      searchAgain: false
    };
  };
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  searchAllFunction = () => {
    this.setState({
      searchAll: true,
      searchResults: false
    });
  };

  searchResultsFunction = () => {
    this.setState({
      searchAll: false,
      searchResults: true,
      searchAgain: true
    });

    };



  render() {
    const locationState = this.state.location;
    const updateSearchResultsState = this.state.updateSearchResults;
    const searchAgainState = this.state.searchAgain;

    let search
    if (locationState && !searchAgainState) {
      search = <a onClick={this.searchResultsFunction} id="searchButton">Search by Station</a>
    } else if (searchAgainState) {
      search = <a id="noSearch">Search by Station</a>
    } else {
      search = <a id="noSearch">Search by Station</a>
    }

    let results
    if (this.state.searchResults) {
      results = <SearchResults
        location = {this.state.location}
        update = {this.state.updateSearchResults}
        />
    } else if (this.state.searchAll) {
      results = <SearchAll />
    } else {
      results = ""
    }
    return (
      <div className="searchPage">
        <div className="row">
          <div className="col s12 m6">
            <h4>Find Your Ride</h4>
            <a href="/"><i className="fas fa-arrow-left"></i>&nbsp;Back</a>
            <form>
              <div class="row">
                <div className="row">
                  <h5>Search By Bike Station</h5>
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
            <h5>Or</h5>
            <br></br>
            <a onClick={this.searchAllFunction} id="searchButton">Search All Available Bikes</a>
          </div>
          <div className="col s12 m6">
            {results}
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

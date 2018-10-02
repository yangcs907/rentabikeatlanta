import React, { Component } from "react";
import "../index.css";


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div className="mainPage">
        <div className="row">
          <div className="col s12 m6">
        <h4>Search for a bike to ride now!</h4>
        <p>Search for a bike in your particular area and browse the many bikes available today!</p>
        <br></br>
        <br></br>
      <a href="/Search" className="mainPageButton">Search For A Bike</a>
        </div>
        <div className="col s12 m6">
      <h4>Become a bike lendor</h4>
      <p>Have a bike that you want to rent out? Rent a Bike Atlanta offers users the security and ease of renting out your own bikes for the millions of riders in your area!</p>
      <br></br>
    <a href="/Lender" className="mainPageButton">Rent Your Bike Out</a>
      </div>
        </div>
        <a href="/Test">TEST</a>
      </div>
    )
  }
}


export default MainPage;

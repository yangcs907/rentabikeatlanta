import React, { Component } from "react";
import "../index.css";

class LearnMore extends Component {
  render() {
    return (
      <div className= "learnMore">
        <div className="row">
          <div className="col s12 m6">
          </div>
          <div className="col s12 m6">
            <div className="row">
            <a className="learnMoreButton" id="hideLearnMoreButton" onClick={this.props.hideLearnMore}><i className="far fa-times-circle"></i></a>
            </div>
      <p>Love to bike your way around Atlanta? Rent a Bike allows anyone to be able to
           search for a bike no matter their location! Simply search, locate, and reserve
           your bike for a set amount of time. Pick the bike up from one of our many bike reservation
           stations, and return when done. It is that simple!
        </p>
        <br></br>
        <p>Have a bike that you want to rent out to other riders? Simply list a bike for rent, and
          leave it at one of our many secure bike stations to be ready for pickup!

        </p>
        </div>
        </div>
      </div>
    )
  }
};

export default LearnMore;

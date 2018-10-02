import React, { Component } from "react";
import LearnMore from "./LearnMore";
import "../index.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      learnMore: false
    }
  };

  showLearnMore = () => {
    this.setState({ learnMore: true });
  };

  hideLearnMore = () => {
    this.setState({ learnMore: false});
  };

  render() {
    const learnMoreState = this.state.learnMore;
    let topContainerLearnMore
    if (learnMoreState) {
      topContainerLearnMore = "topContainerLearnMore"
    } else {
      topContainerLearnMore = ""
    };

    let learnMoreDiv
    if (learnMoreState) {
      learnMoreDiv =
      <LearnMore
        hideLearnMore = {this.hideLearnMore}
      />
  } else {
    learnMoreDiv = ""
  }

  return (
    <div>
    <div className={topContainerLearnMore}>
  <div className="topContainer">
    <div className="row">
      <div className="col m6 s12" id="logo">
        <h4><a href="/">Rent a Bike&nbsp;&nbsp;<i className="fas fa-bicycle"></i></a></h4>
        <h5>Atlanta</h5>
        <p>The go-to hassle free solution for convenient bike renting and sharing</p>
        <a className="learnMoreButton" onClick={this.showLearnMore}>Learn More&nbsp;&nbsp;<i className="fas fa-chevron-circle-right"></i></a>
    </div>
  </div>
    </div>
  </div>
  {learnMoreDiv}
</div>
);
};

};

export default Header;

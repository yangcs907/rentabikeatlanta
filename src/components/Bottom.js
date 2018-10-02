import React, { Component } from "react";
import "../index.css";

class Bottom extends Component {
  render() {
    return(
      <div className="bottom">
        <div className="row">
          <div className="col s12 m4">
        <h4>Why ride a bike?</h4>
        <p>
          Riding a bike offers many benefits not only for the health of the rider, but for the environment as well.
          At Rent a Bike, our passion is for more people to experience the joy of riding bikes. Whether it's for your
          daily commute, or if you simply want to enjoy the outdoors, we believe that everyone should be able to ride
          when they want, and how they want.
        </p>
      </div>
      <div className="col s12 m4">
    <h4>How does it work?</h4>
    <p>
      We offer a platform for users to rent a bike as well as lend their bike to others. We have placed secure bike stations
      around the city of Atlanta, so both renters and lenders can feel confident and safe. Lenders simply place their bikes
      at one of the stations and post the listing. Users that reserve the bike will be connected to the lender to set up rental period
      as well as price. The whole process is simple!
    </p>
  </div>
  <div className="col s12 m4">
<h4>Our Community</h4>
<p>
  We pride ourselves on our service to the city of Atlanta and would love for you to be a part of our growing community. We desire
  to bring people from all walks of life together, united with the passion and joy of riding bikes. Check out our Facebook page, and follow us
  on Twitter and Instagram!
</p>
<div className="row" id="socialMediaRow">
<div className="col s4 m4">
  <a href="https://facebook.com" id="socialMedia"><i className="fab fa-facebook"></i></a>
</div>
<div className="col s4 m4">
  <a href="https://twitter.com" id="socialMedia"><i className="fab fa-twitter-square"></i></a>
</div>
<div className="col s4 m4">
  <a href="https://instagram.com" id="socialMedia"><i className="fab fa-instagram"></i></a>
</div>
</div>
</div>

      </div>
      </div>
    )
  };
};

export default Bottom;

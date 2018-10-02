import React, { Component } from "react";
import "../index.css";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLocations: false
    };
  };

  showHideLocations = () => {
    if (this.state.showLocations) {
      this.setState({showLocations: false});
    } else {
      this.setState({showLocations: true});
    }
  };
  render() {
    let locations
    if (this.state.showLocations) {
      locations = "locationsShow"
    } else {
      locations = "locationsHide"
    }
    return (
      <div className="locationContainer">
        <a onClick={this.showHideLocations} id="locationsButton">Click Here to Show Our Bike Stations</a>
        <div className={locations}>
          <div className="row">
            <div className="col s12 m3">
              <p>Georgia Tech</p>
              <p>266 4th St NW, Atlanta, GA 30332</p>
              <p><a href="https://www.google.com/maps/place/Georgia+Tech+Library/@33.7746368,-84.3968536,17z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f50462e6f9f0bf:0x2aa470e52403e3e3!8m2!3d33.7742603!4d-84.3957281">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>Atlantic Station</p>
              <p>1380 Atlantic Dr NW, Atlanta, GA 30363</p>
                <p><a href="https://www.google.com/maps/place/Atlantic+Station/@33.7918827,-84.3961775,17.06z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f504f64acac393:0xdf16cfa5c38dadf5!8m2!3d33.7927256!4d-84.3978712">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>Midtown</p>
              <p>878 Peachtree St NE, Atlanta, GA 30309</p>
                <p><a href="https://www.google.com/maps/place/The+Vortex+Bar+%26+Grill/@33.7815222,-84.3845905,15.9z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f504686a9ce843:0x1d390cb807a61ee7!8m2!3d33.779047!4d-84.3844387">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>Five Points</p>
              <p>30 Alabama St SW, Atlanta, GA 30303</p>
                <p><a href="https://www.google.com/maps/place/Five+Points/@33.7509796,-84.3929435,15.62z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f503814f3ae143:0x1494f0ed58ec7b23!8m2!3d33.7538799!4d-84.3916216">Show on Maps</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <p>Inman Park</p>
              <p>1217 Caroline St NE, Atlanta, GA 30307</p>
              <p><a href="https://www.google.com/maps/place/Barnes+%26+Noble/@33.7579364,-84.3552848,16.8z/data=!3m1!5s0x88f506ace9b76705:0x6a01047171053620!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f506ac9d708c91:0x301521d0e928efee!8m2!3d33.7578315!4d-84.3488297">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>South Atlanta</p>
              <p>2002 Lakewood Way SW, Atlanta, GA 30315</p>
                <p><a href="https://www.google.com/maps/place/Cellairis+Amphitheatre+at+Lakewood/@33.6985036,-84.4050454,14.44z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f50257e2d12087:0xea089f2228aa0c3e!8m2!3d33.7035457!4d-84.3971658">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>Virginia Highland</p>
              <p>1006 North Highland Avenue Northeast, Atlanta, GA 30306</p>
                <p><a href="https://www.google.com/maps/place/Taco+Mac/@33.7821179,-84.3593383,15.25z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x0:0x38ddd219ce61e54!8m2!3d33.7819942!4d-84.3545857">Show on Maps</a></p>
            </div>
            <div className="col s12 m3">
              <p>Buckhead</p>
              <p>3101 Piedmont Rd NE, Atlanta, GA 30305</p>
                <p><a href="https://www.google.com/maps/place/Fogo+de+Ch%C3%A3o+Brazilian+Steakhouse/@33.8393894,-84.3750939,14.82z/data=!4m12!1m6!3m5!1s0x88f5048aebc34fe3:0xb52ad03e3ad8c50f!2sGeorgia+Institute+of+Technology!8m2!3d33.7756178!4d-84.396285!3m4!1s0x88f505f150a4e4e7:0x2b78b4520e335e5b!8m2!3d33.8406215!4d-84.3693835">Show on Maps</a></p>
            </div>
          </div>
          <div className="row" id="hideRow">
            <a onClick={this.showHideLocations} id="hideLocations">hide</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Locations;

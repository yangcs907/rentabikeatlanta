import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import Search from "./components/Search.js";
import Header from "./components/Header.js";
import Locations from "./components/Locations.js";
import Bottom from "./components/Bottom.js";
import Lender from "./components/Lender.js";
import Test from "./components/Test.js";


const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Lender" component={Lender} />
      </Switch>
      <Locations />
      <Bottom />
    </div>
  </Router>
);

export default App;

import React from 'react';
// import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Neighborhoods from "./components/neighborhoods.jsx";
import SingleNeighborhood from "./components/neighborhood.jsx";
import Coffees from "./components/coffees.jsx";
import SingleCoffee from "./components/coffee.jsx";
import Donuts from "./components/donuts.jsx";
import SingleDonut from "./components/donut.jsx";
import Landing from './components/landing.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/neighborhoods/:neighborhoodId" component={SingleNeighborhood} />
          <Route path="/neighborhoods" component={Neighborhoods} />
          <Route exact path="/coffees" component={Coffees} />
          <Route exact path="/coffees/:coffeeId/" component={SingleCoffee} />
          <Route exact path="/donuts/:donutId/" component={SingleDonut}/>
          <Route exact path="/donuts" component={Donuts}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

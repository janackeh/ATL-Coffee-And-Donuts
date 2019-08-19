import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Neighborhoods from "./components/neighborhoods.jsx";
import Neighborhood from "./components/neighborhood.jsx";
import Coffees from "./components/coffees.jsx";
import Coffee from "./components/coffee.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/neighborhoods" component={Neighborhoods}/>
          <Route path="/neighborhood" component={Neighborhood}/>
          <Route path="/coffees" component={Coffees}/>
          <Route path="/coffee" component={Coffee}/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;

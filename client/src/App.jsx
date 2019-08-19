import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Neighborhoods from "./components/neighborhoods.jsx";
import Coffees from "./components/coffees.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/neighborhoods" component={Neighborhoods}/>
          <Route path="/coffees" component={Coffees}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

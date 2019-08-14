import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Neighborhoods from "./components/neighborhoods";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/neighborhoods" component={Neighborhoods}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

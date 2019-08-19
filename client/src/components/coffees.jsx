
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Coffees extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        coffees: [],
        isNewFormDisplayed: false,
        addNewCoffee: [],
        newCoffee: "",
    };

        componentDidMount() {
        this.getAllCoffees();
        }

        getAllCoffees = () => {
            axios.get("/api/coffees/").then(res => {
              console.log(res.data);
              this.setState({ coffees: res.data });
            });
          };
        
          handleToggleNewForm = () => {
            this.setState(state => {
              return { isNewFormDisplayed: !state.isNewFormDisplayed };
            });
          };
        
          handleInputChange = event => {
            const copiedCoffee = { ...this.state.newCoffee };
            copiedCoffee[event.target.name] = event.target.value;
        
            this.setState({ newCoffee: copiedCoffee });
          };
        
          handleSubmit = event => {
            event.preventDefault();
        
            axios.post("/api/coffees/", this.state.newCoffee).then(res => {
              this.setState({ isNewFormDisplayed: false });
              this.getAllCoffees();
            });
          };
        

    render() {
        let coffeesList = this.state.coffees.map(coffee => {
            return (
              <div>
      
                <Link key={coffee._id} to={`/coffees/${coffee._id}`}>
                  {coffee.name}
                </Link>
              </div>
            );
          });
          return this.state.isNewFormDisplayed ? (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-coffee-name">Coffee Name</label>
              <input
                type="text"
                id="new-coffee-name"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.newCoffee.name}
              />
      
              <label htmlFor="new-coffee-location">Coffee Shop Location</label>
              <input
                type="text"
                id="new-coffee-location"
                name="location"
                onChange={this.handleInputChange}
                value={this.state.newCoffee.location}
              />
      
              <input type="submit" value="Create Coffee Shop" />
            </form>
          ) : (
              <div>
                <img src="https://i.imgur.com/s7ULwLu.png" alt="coffee shops"></img>
                <h1> Coffee Shops </h1>
                {coffeesList}
                <div>
                  <button onClick={this.handleToggleNewForm}>Create New Coffee Shops</button>
                </div>
              </div>
            );
        }
      }
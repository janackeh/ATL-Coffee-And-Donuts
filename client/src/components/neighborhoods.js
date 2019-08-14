
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Neighborhoods extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        neighborhoods: [],
        isNewFormDisplayed: false,
        addNewNeighborhood: [],
        newNeighborhood: "",
    };

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
        componentDidMount() {
        this.getAllNeighborhoods();
        }

        getAllNeighborhoods = () => {
            axios.get("/api/neighborhoods/").then(res => {
              console.log(res.data);
              this.setState({ neighborhoods: res.data });
            });
          };
        
          handleToggleNewForm = () => {
            this.setState(state => {
              return { isNewFormDisplayed: !state.isNewFormDisplayed };
            });
          };
        
          handleInputChange = neighborhoods => {
            const copiedNeighborhood = { ...this.state.newNeighborhood };
            copiedNeighborhood[event.target.name] = event.target.value;
        
            this.setState({ newNeighborhood: copiedNeighborhood });
          };
        
          handleSubmit = neighborhoods => {
            event.preventDefault();
        
            axios.post("/api/neighborhoods/", this.state.newNeighborhood).then(res => {
              this.setState({ isNewFormDisplayed: false });
              this.getAllNeighborhoods();
            });
          };
        
    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        let neighborhoodsList = this.state.neighborhoods.map(neighborhood => {
            return (
              <div>
      
                <Link key={neighborhood._id} to={`/neighborhoods/${neighborhood._id}`}>
                  {neighborhood.name}
                </Link>
              </div>
            );
          });
          return this.state.isNewFormDisplayed ? (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-neighborhood-name">Neighborhood Name</label>
              <input
                type="text"
                id="new-neighborhood-name"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.newNeighborhood.name}
              />
      
              <label htmlFor="new-neighborhood-location">Neighborhood Location</label>
              <input
                type="text"
                id="new-neighborhood-location"
                name="location"
                onChange={this.handleInputChange}
                value={this.state.newEvent.location}
              />
      
              <input type="submit" value="Create Neighborhood" />
            </form>
          ) : (
              <div>
                <img src="https://i.imgur.com/7EVpbk2.png" alt="logo"></img>
                <h1> Neighborhoods </h1>
                {neighborhoodsList}
                <div>
                  <button onClick={this.handleToggleNewForm}>Create New Neighborhood</button>
                </div>
              </div>
            );
        }
      }
    
      
    


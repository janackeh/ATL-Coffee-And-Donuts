
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Neighborhoods extends Component {
    state = {
        neighborhoods: [],
        isNewFormDisplayed: false,
        addNewNeighborhood: [],
        newNeighborhood: "",
    };


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
        
          handleInputChange = event => {
            const copiedNeighborhood = { ...this.state.newNeighborhood };
            copiedNeighborhood[event.target.name] = event.target.value;
        
            this.setState({ newNeighborhood: copiedNeighborhood });
          };
        
          handleSubmit = event => {
            event.preventDefault();
        
            axios.post("/api/neighborhoods/", this.state.newNeighborhood).then(res => {
              this.setState({ isNewFormDisplayed: false });
              this.getAllNeighborhoods();
            });
          };
    
          
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
                value={this.state.newNeighborhood.name}/>
      
              <label htmlFor="new-neighborhood-location">Neighborhood Location</label>
              <input
                type="text"
                id="new-neighborhood-location"
                name="location"
                onChange={this.handleInputChange}
                value={this.state.newNeighborhood.location}/>
      
              <input type="submit" value="Create Neighborhood" />
            </form>
          ) : (
              <div>
                <img src="https://i.imgur.com/f2V6A8v.png" alt="neighborhoods"></img>
                <h1> Neighborhoods </h1>
                {neighborhoodsList}
                <div>
                  <button onClick={this.handleToggleNewForm}>Create New Neighborhood</button>
                </div>
              </div>
            );
        }
      }
    
      
    


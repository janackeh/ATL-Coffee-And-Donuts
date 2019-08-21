
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Donuts extends Component {

    state = {
        state = {
            donuts: [],
            isNewFormDisplayed: false,
            addNewDonut: [],
            newDonut: "",
        },
    
    
        componentDidMount() {
          this.getAllDonuts();
          },
    
        getAllDonuts = () => {
          axios.get("/api/donuts/").then(res => {
                  console.log(res.data);
                  this.setState({ donuts: res.data });
                });
              },
            
              handleToggleNewForm = () => {
                this.setState(state => {
                  return { isNewFormDisplayed: !state.isNewFormDisplayed };
                });
              },
            
              handleInputChange = event => {
                const copiedDonut = { ...this.state.newDonut };
                copiedDonut[event.target.name] = event.target.value;
            
                this.setState({ newDonut: copiedDonut });
              },
            
              handleSubmit = event => {
                event.preventDefault();
            
                axios.post("/api/donuts/", this.state.newDonuts).then(res => {
                  this.setState({ isNewFormDisplayed: false });
                  this.getAllDonuts();
                });
              },
        
              
       render() {
        let donutsList = this.state.donuts.map(donut => {
          return (
                   <div>
                    <Link key={donut ._id} to={`/donuts/${donut._id}`}>
                      {donut.name}
                    </Link>
                  </div>
                );
              });
              return this.state.isNewFormDisplayed ? (
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="new-donutshop-name">Donut Shop Name</label>
                  <input
                    type="text"
                    id="new-donutshop-name"
                    name="name"
                    onChange={this.handleInputChange}
                    value={this.state.newDonut.name}/>
          
                  <label htmlFor="new-donutshop-location">Donut Shop Location</label>
                  <input
                    type="text"
                    id="new-donutshop-location"
                    name="location"
                    onChange={this.handleInputChange}
                    value={this.state.newDonut.location}/>
          
                  <input type="submit" value="Create Donut Shop" />
                </form>
              ) : (
                  <div>
                    <img src="https://i.imgur.com/f2V6A8v.png" alt="donut shops"></img>
                    <h1> Donut Shops </h1>
                    {donutsList}
                    <div>
                      <button onClick={this.handleToggleNewForm}>Create New Donut Shop</button>
                    </div>
                  </div>
                );
            }
          }
}
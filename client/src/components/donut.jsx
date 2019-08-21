
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";

export default class SingleDonut extends Component {
    state = {
        donut: {},
        isEditFormDisplayed: false,
        redirectHome: false
  };

   componentDidMount() {
    axios
      .get(`/api/donuts/${this.props.match.params.donutId}`)
      .then(res => {
        this.setState({ donut: res.data });
      });
  }

  handleInputChange = event => {
    let copiedDonut = { ...this.state.donut };
    copiedDonut[event.target.name] = event.target.value;

    this.setState({ donut: copiedDonut });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(`/api/donuts/${this.state.donut._id}`, this.state.donut)
      .then(res => {
        this.setState({
          donut : res.data,
          isEditFormDisplayed: false
        });
      });
  };

  handleToggleEditForm = () => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteEvent = () => {
    axios.delete(`/api/donuts/${this.state.donut._id}`).then(() => {
      this.setState({ redirectToHome: true });
    });
  };

  redirectHome = () => {
      this.setState({
          redirect: true
    })
  }

  renderRedirect = () => {
      if (this.state.redirect) {
          return <Redirect to='/donuts'/>
      }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/donuts"/>;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="donutshop-name">Donut Shop Name</label>
        <input
          type="text"
          id="donutshop-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.donut.name}
        />

        <label htmlFor="donutshop-location">Donut Shop Location</label>
        <input
          type="text"
          id="donutshop-location"
          name="location"
          onChange={this.handleInputChange}
          value={this.state.donutshop.location}
        />

        <input type="submit" value="Update Donut Shop" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Donut Shop</button>
        <button onClick={this.handleDeleteEvent}>Delete Donut Shop</button>
        {this.renderRedirect()}
        <button onClick={this.redirectHome}>Back to Home</button>
        <h2>{this.state.donut.name}</h2> 
        <h4>{this.state.donut.location}</h4>  
      </div>
    );
  }
}


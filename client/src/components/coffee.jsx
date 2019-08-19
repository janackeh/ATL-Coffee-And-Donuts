/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class SingleCoffee extends Component {
    state = {
        coffeeshop: {},
        isEditFormDisplayed: false,
        redirectHome: false
  };

   componentDidMount() {
    axios
      .get(`/api/coffees/${this.props.match.params.coffeeId}`)
      .then(res => {
        this.setState({ coffee: res.data });
      });
  }

  handleInputChange = event => {
    let copiedCoffee = { ...this.state.event };
    copiedCoffee[event.target.name] = event.target.value;

    this.setState({ coffee: copiedCoffee });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(`/api/coffees/${this.state.coffee._id}`, this.state.coffee)
      .then(res => {
        this.setState({
          coffee: res.data,
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
    axios.delete(`/api/coffees/${this.state.coffee._id}`).then(() => {
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
          return <Redirect to='/'/>
      }
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="coffee-name">Coffee Shop Name</label>
        <input
          type="text"
          id="coffee-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.coffee.name}
        />

        <label htmlFor="coffee-location">Coffee Location</label>
        <input
          type="text"
          id="coffee-location"
          name="location"
          onChange={this.handleInputChange}
          value={this.state.coffee.location}
        />

        <input type="submit" value="Update Coffee Shop" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Coffee Shop</button>
        <button onClick={this.handleDeleteEvent}>Delete Coffee Shop</button>
        {this.renderRedirect()}
        <button onClick={this.redirectHome}>Back to Home</button>
        <h2>{this.state.coffee.name}</h2>
        <p>{this.state.coffee.location}</p>
      </div>
    );
  }
}

    render() 
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
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
export default class SingleNeighborhood extends Component {
    state = {
        event: {},
        isEditFormDisplayed: false,
        redirectHome: false
  };

   componentDidMount() {
    axios
      .get(`/api/neighborhoods/${this.props.match.params.neighborhoodId}`)
      .then(res => {
        this.setState({ neighborhood: res.data });
      });
  }

  handleInputChange = event => {
    let copiedNeighborhood = { ...this.state.event };
    copiedNieghborhood[event.target.name] = event.target.value;

    this.setState({ neighborhood: copiedNeighborhood });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(`/api/neighborhoods/${this.state.neighborhood._id}`, this.state.neighborhood)
      .then(res => {
        this.setState({
          neighborhood: res.data,
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
    axios.delete(`/api/neighborhoods/${this.state.neighborhood._id}`).then(() => {
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
        <label htmlFor="neighborhood-name">Neighborhood Name</label>
        <input
          type="text"
          id="neighborhood-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.neighborhood.name}
        />

        <label htmlFor="neighborhood-location">Neighborhood Location</label>
        <input
          type="text"
          id="neighborhood-location"
          name="location"
          onChange={this.handleInputChange}
          value={this.state.neighborhood.location}
        />

        <input type="submit" value="Update Neighborhood" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Neighborhood</button>
        <button onClick={this.handleDeleteEvent}>Delete Neighborhood</button>
        {this.renderRedirect()}
        <button onClick={this.redirectHome}>Back to Home</button>
        <h2>{this.state.neighborhood.name}</h2>
        <p>{this.state.neighborhood.location}</p>
      </div>
    );
  }
}

    render() 
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
            </div>
        );
    
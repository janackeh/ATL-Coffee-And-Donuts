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
        axios.get('/api/helloworld')
            .then((res) => {
                this.setState({message: res.data})
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

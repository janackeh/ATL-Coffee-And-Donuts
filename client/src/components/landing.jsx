import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Landing extends Component {
    render() {
       
        return (
            <div>
        <div className="Landing">
            <div id="header" className="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://i.imgur.com/F8JNepJ.mp4" type="video/mp4">
                        </source>
                </video>

             <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
                <div className="w-100 text-white">
                 <h1 className="display-3">ATL Coffee & Donuts</h1>
                 <p class="lead mb-0">wake up with us.
            </p>
            </div>
            </div>
            </div>
            </div>
        
                <section className="my-5">
                  <div className="container">
        <div className="row">
        <div className="col-md-8 mx-auto">
        <p>We exist to make your morning routine more exciting than just loud alarm clocks and Atlanta traffic.</p>
        <p className="mb-0">
        <Link to="/neighborhoods"><Button variant="primary" active={true}>GOOD MORNING</Button></Link>
        </p>
      </div>
     </div>
     </div>
     </section>
     
        
) 
</div> 
        )
}
}

export default Landing

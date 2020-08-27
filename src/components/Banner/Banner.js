import React from 'react';
import logo from '../../images/Illustration.png'
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h6>Are you ready to learn?</h6>
                            <h1>Learn With Fun</h1>
                            <h1>on <span className="span-color">any Schedule</span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem in neque necessitatibus delectus commodi omnis!</p>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                        <div className="col-md-6">
                            <img src={logo} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                  </div>        
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        </div>
    );
};

export default Banner;
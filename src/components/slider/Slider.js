import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'
const Slider=()=>
{
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="images/image1.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h1>Well treated animals</h1>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="images/sheep.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h1>trustworthy farmers</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="images/beef.jpeg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h1>Fresh products</h1>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

export default Slider;
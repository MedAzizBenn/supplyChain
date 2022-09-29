import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "./content.css";
import Card from "./cards/card.js";
import Trace from "./Trace/Trace.js";
import Slider from "./slider/Slider"
export class content extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div className='slider'>
          <Slider></Slider>
        </div>
        <div className='wood'>
        <div className='welcome blockquote text-center'>
          <h1>Welcome</h1>
          <p>The FARM Animal Care Program standards are revised every three years to reflect the most current science and<br/>
            best management practices within the dairy industry.</p>
          </div>
        <div className='container-fluid d-flex justify-content-center'>
       
          <div className='row justify-content-around'>
            <div className='col-md-4'>
            <Card img="images/cow1.jpeg" title="Source" info="Lexcept to obtain some advantage from
it? But who has any right to find fault
with a man chooses to enjoy."/>
            </div>
            <div className='col-md-4'>
            <Card img="images/image2.jpg" title="Feeding" info="Lexcept to obtain some advantage from
it? But who has any right to find fault
with a man chooses to enjoy."/>
            </div>
            <div className='col-md-4'>
            <Card img="images/image3.webp" title="Our Products" info="Lexcept to obtain some advantage from
it? But who has any right to find fault
with a man chooses to enjoy."/>
            </div>
          </div>

        </div>
     
        <div className='aboutUs blockquote'>
            <h1>Know About Our Farm And History</h1>
            <hr/>
            <p>The FARM Animal Care Program standards are revised every three years to reflect the most current science and<br/> best management practices within the dairy industry.<br/> The current standards, rationale, and accountability measures have been reviewed and revised by the FARM Technical<br/> Writing Group and National Milk Producers Federation Animal Health and Well-Being Committee and approved<br/> by the National Milk Producers.</p>
          </div>
        </div>
        <div className='checkYourProduct'>
          <Trace title="Trace your meat to see how good feed good" img="images/beefLogo.png"/>
        </div>
      
          <div className='offers lockquote text-center'>
            <h1>What we offer</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
          </div>




     
      </>
     
    );
}
  }

  

export default content
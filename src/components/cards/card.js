import React, { PureComponent } from 'react'
import "./card.css";
const Card=props=>
{
    return(
        <div className="example">
        <div className='card text-center'>
        <div className='overflow'>
          <img src={props.img}  alt="" className='img card-img-top'/>
        </div>
        <div className='card-body text-dark'> <h4 className="title">{props.title}</h4> 
            <p className='card-text text-secondary'>
                {props.info}
            </p>
            <a href='#' className='btn btn-outline-danger'>CLick</a>
        </div>
       
    </div>
    </div>

    )
};

export default Card;
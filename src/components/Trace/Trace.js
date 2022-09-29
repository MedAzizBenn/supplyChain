import React,{Component} from 'react'
import "./Trace.css";
import Customer from "./../Customer"
import {useNavigate,useParams } from 'react-router-dom';



 class Trace extends React.Component{

    state={
        value:''
    };

    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValue=(event)=>
    {
        this.setState({value:event.target.value});
    }

    render()
    {
        return(
            <div className='trace'>
            <div className="card">
            <div className="card-body">
             <h2 className="card-title">{this.props.title}</h2>
             <form className='form-inline'>
             <label className="card-text form-label pull-right">
              Enter "Check Your Product" Code :
              </label>
              <div className='inline'>
             
             <input type="text" className="code form-control" onChange={this.getValue}/>
             <button type="button" className="btn" onClick={this.handleSubmit}>check Product</button>
                 </div>
          
              <p>Enter your code and learn all about your product</p>
              <p className="card-text">
               <small className="text-muted">Don't have a code? Contact as <a href="">info@example.com</a></small>
              </p>
             </form>
             </div>
             </div>
          </div>
        

    );

}

handleSubmit(evt)
{
    let code=this.state.value;
    this.props.navigate(`app/Consumer/${code}`);

}

}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <Trace {...props} navigate={navigate} />
}

export default WithNavigate

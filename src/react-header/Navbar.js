import ReactDOM from 'react-dom'
  import React,{useState} from 'react'
  import './Navbar.scss';
  import { MDBFooter,MDBIcon} from 'mdb-react-ui-kit';

  import { useNavigate } from 'react-router';




function Navbar(props) {
    const [click,setClick]=useState(false);
    let navigate = useNavigate();

    const handleClick=()=>
{
  console.log("azik");
  navigate(`/app/Login`);

}

  return (
    <header>

    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button type="button" className="login btn" onClick={handleClick}>Login</button>

        </div>
      </div>
    </nav>
  
   
  </header>
  );
}

export default Navbar
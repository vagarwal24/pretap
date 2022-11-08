import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import log_img from "../Images/log.jpeg"
import logimg from "../Images/impact.jpeg"

export default function Header(props) {
	return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logimg} className="impact"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accounting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Expenses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reports</a>
        </li>
        
<li className="nav-item">
      <div className="input-group">
  <div className="form-outline">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    
  </div>
  <button type="button" className="btn btn-outline-success">
    <i className="fa fa-search"></i>
  </button>
</div>

</li>
    <li className="nav-item">
    <a className="nav-link" href="#"><i className="fa fa-commenting"></i></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#"><i className="fa fa-bell"></i></a>
    </li>
    <li className="nav-item">
    <img src={log_img} className="img-circle user"/>
    </li>

      </ul>


    </div>
  </div>
</nav>
    )
}
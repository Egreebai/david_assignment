import React from 'react'
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" >
    <Link className="navbar-brand" to="#" style={{color:"#fff", fontSize:"18px"}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/" style={{color:"#fff"}}>To Do List <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/Weather" style={{color:"#fff"}}>Weather Api</Link>
        </li>
      </ul>
    </div>
  </nav>
  </>
  )
}

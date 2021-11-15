import React, {useState} from 'react'
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">About us</Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">Contact</Link>
          </li> */}
        </ul>
          <div className={`custom-control custom-switch text-${props.mode === 'light'?'dark':'light'} mx-1`}>
            <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitches"/>
            <label className="custom-control-label" htmlFor="customSwitches" >{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
          </div>
      </div>
      
    </nav>
    )
}

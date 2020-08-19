import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, navigate, Router} from '@reach/router';
import axios from 'axios';
import Mainpage from './components/Mainpage';
import Resume from './components/Resume';

function App() {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand text-light m-2 lead" to="/">Makenna Martin</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light lead" href="/#projects">Projects</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light lead" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead active" href="https://www.linkedin.com/in/makennamartin97/">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead active" href="https://github.com/makennamartin97">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead" href="/#contact">Contact</a>
            </li>

          </div>
        </div>
      </nav>
      <Router>
        <Mainpage path="/"/>
        <Resume path="/resume"/>

      </Router>
      

  
      
    </div>
  );
}

export default App;

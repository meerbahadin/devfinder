import React from 'react'
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
            <a className="navbar-brand" href="#"><FiGithub/><span className='lead ml-3'>{props.title}</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/about'>About app</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
}



export default Navbar;

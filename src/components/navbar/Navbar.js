import React ,{useEffect, Fragment}from 'react'
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './header.css';
const Navbar = (props) => {
  
   let isopen = false;
   const toggler = () => {
    const item = document.querySelector('.collapse.navbar-collapse');
    if (isopen === false) {
      item.classList += ' show';
     } 
     setTimeout(() => {
      item.classList.remove('show');
     }, 5000);
     isopen = !isopen;
   }

        return (
          <Fragment>
          <div className="jumbotron jumbotron-fluid text-center pt-0">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand"><motion.span animate={{opacity : [0,1]}}  transition={{yoyo: Infinity, duration: 1, ease: "easeInOut"
  }}><FiGithub/></motion.span><span className='ml-3'>{props.title}</span></a>
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" onClick={toggler}></span>
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
            <h1 className="mt-10 heading-main">Search For Developers</h1>
            <p className="text-light">Type the name of the developer this app will browse the GitHub API and find the user made for fun and just for playing with GitHub free API free source code available!</p>
          </div>
          </Fragment>
        )
}



export default Navbar;

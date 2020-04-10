import React ,{useEffect}from 'react'
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const Navbar = (props) => {
  useEffect(() => {
   const item = document.querySelector('.collapse.navbar-collapse');
   const toggler = document.querySelector('.navbar-toggler-icon');
   console.log(item)
   let isopen = false;
   toggler.addEventListener('click' , () => {
     if (isopen === false) {
      item.classList += ' show';
     } else {
      item.classList.remove('show');
     }
     isopen = !isopen;
   })

  }, [])
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
            <a className="navbar-brand" href="#" ><motion.span animate={{opacity : [0,1]}}  transition={{yoyo: Infinity, duration: 1, ease: "easeInOut"
  }}><FiGithub/></motion.span><span className='lead ml-3'>{props.title}</span></a>
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

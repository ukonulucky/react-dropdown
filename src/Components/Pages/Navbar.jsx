import React, { useState} from 'react'
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom"

import { navItems, serviceDropDown } from "../assets/NavItems" 
import "../styles/Navbar.css"
import ServicesDropDown from './ServicesDropDown';
function Navbar() {
    const [dropDown, setdropDown] = useState(false)
    console.log(dropDown)
  return (
      <div>
            <div className="navbar">
          <Link to="/" className="navbar-logo">
              Nature
              <MdAccountBalance />
          </Link>
          <ul>
              {
                      navItems.map(item => {
                          if (item.title === "Services") {
                              return (
                                
                                  <li onMouseEnter={() => setdropDown(true)} onMouseLeave={() => setdropDown(false)}
                                         className={ item.cName}
                                        key={item.id}>
                                        <Link to={item.path}  >
                                          {item.title}
                                      </Link>
                                      { dropDown &&   <ServicesDropDown /> }
                                  </li>  
                          )
                      }
                      return (
                         
                        <li 
                        className={ item.cName}
                       key={item.id}>
                       <Link to={item.path}  >
                         {item.title}
                     </Link>    
                 </li>  
                  )
              })
              }
          </ul>

          <button>
              <Link to="/">
              SignUp
              </Link>
         </button>

          </div>
          <ServicesDropDown />
    </div>
  )
}

export default Navbar
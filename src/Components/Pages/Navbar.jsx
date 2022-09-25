import React, { useState} from 'react'
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom"

import { navItems, serviceDropDown } from "../assets/NavItems" 
import "../styles/Navbar.css"
import ServicesDropDown from './ServicesDropDown';
function Navbar() {
    const [dropDown, setdropDown] = useState(true)
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
                          if (item.title == "Services") {
                              return (
                                
                                      <Link
                              
                                        to={item.path} key={item.id}>
                                        <li className={ item.cName}>
                                          {item.title}
                                          <ServicesDropDown />
                                          </li>
                                         
                                      </Link>
                                
                          )
                      }
                      return (
                          <Link
                              
                              to={item.path} key={item.id}>
                              <li className={ item.cName}>
                              { item.title}
                      </li>
                          </Link>
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
         
    </div>
  )
}

export default Navbar
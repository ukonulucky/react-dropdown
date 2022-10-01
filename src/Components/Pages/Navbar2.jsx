import React, { useState } from 'react'
import { FaReact, FaHamburger, FaWindowClose} from "react-icons/fa"

import { Link } from 'react-router-dom'
import { navItems } from '../assets/NavItems'
import "../styles/Navbar2.css"


function Navbar2() {
    const [show, setshow] = useState(false)
    const handleClick = () => {
        setshow(!show)
    }
    console.log(show)
    const navList = navItems.map((item) => {
        return (
            <div className="list-item" key={item.id}>
                 <Link className={ item.cName} to={ item.url}>{ item.title }</Link>
           </div>
               )
    }
 )

  return (
      <nav className="nav-item">
          <div className="nav-logo">
              
              <span>React  <FaReact /></span>
             
              <div className="mobile" onClick={() => handleClick()}>
                  { show ? <FaWindowClose /> :  <FaHamburger />  }
             </div>
          </div>
          <ul className={ show ? "show show-anim" : "show"}>
              {navList}
              <div className="ul-btn">
              <button>
                  SignUp
              </button>
          </div>
          </ul>
          <div className="btn">
              <button>
                  SignUp
              </button>
          </div>

     </nav>
  )
}

export default Navbar2
import React, { useState } from 'react'
import { serviceDropDown } from "../assets/NavItems" 
import { Link } from "react-router-dom"

export default function ServicesDropDown() {
    const [dropDown, setdropDown] = useState(true)
  return (
      <div>
                
                <div className="serviceDropDown" onClick={ () => setdropDown(false)}>
                  <ul className={ dropDown ? "dropDown" : "hideDropDown" }>  
              
                  {
                      serviceDropDown.map(item => {
                          return (
                              <Link key={ item.id} to={ item.path}>
                                  <li className={ item.cName}>
                                      { item.title} 
                              </li>
                              </Link>
                          )
                              
                          
                      })
                      }
                  </ul>
              </div>
         
    </div>
  )
}

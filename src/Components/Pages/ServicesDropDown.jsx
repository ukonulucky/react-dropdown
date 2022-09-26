import React, { useState } from 'react'
import { serviceDropDown } from "../assets/NavItems" 
import { Link } from "react-router-dom"
import "../styles/Services.css"

export default function ServicesDropDown() {
    const [dropDown, setdropDown] = useState(true)
  return (
      <div>
                
                <div  className={ dropDown ? "serviceDropDown" : "hideDropDown" } onClick={ () => setdropDown(false)}>
                  <ul className= "dropDown" >  
              
                  {
                      serviceDropDown.map(item => {
                          return (
                              <li  className={ item.cName} key={ item.id} >
                                  <Link to={ item.path}>
                                      { item.title} 
                              </Link>
                              </li>
                          )
                              
                          
                      })
                      }
                  </ul>
              </div>
         
    </div>
  )
}

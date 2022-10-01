import React from 'react'
import "../styles/intersection.css"
import { useInView } from "react-intersection-observer"

function InterSectionDelay() {
    const { ref: myRef, inView, entries } = useInView()
    console.log(inView, entries)
  return (
      <div>
          <div className="wrapper one">1</div>
          <div className="wrapper two">2</div>
          <div className="wrapper three">3</div>
          <div ref={ myRef } className={ inView ? "wrapper four animate": "wrapper four"}>4</div>
          <div className="wrapper five">5</div>
    </div>
  )
}

export default InterSectionDelay
import React from 'react'
import './Summary.scss'

export default function Summary(props) {

    // const {present, late, absent, unmarked} = props.attending;

  return (
    <div className="summaryWrapper" >
      {/* <p>Present: {present} </p>
      <p>Late: {late} </p>
      <p>Absent: {absent} </p>
      <p>Unmarked: {unmarked} </p> */}
      <hr/>
      <button className="reset btn" >Reset</button>
      <button className="done btn">Done</button>
    </div>
  )
}


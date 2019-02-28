import React from 'react'
import './Summary.scss'

export default function Summary() {
  return (
    <div className="summaryWrapper" >
      <p>Present: </p>
      <p>Late: </p>
      <p>Absent: </p>
      <p>Unmarked: </p>
      <hr/>
      <button className="reset btn" >Reset</button>
      <button className="done btn">Done</button>
    </div>
  )
}

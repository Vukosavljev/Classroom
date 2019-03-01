import React from 'react'
import './Summary.scss'

export default function Summary(props) {

    const {present, late, absent, students} = props.attending;
    const unmarked = students.length - (present + late + absent);

  return (
    <div className="summaryWrapper" >
      <p>Present: {present} </p>
      <p>Late: {late} </p>
      <p>Absent: {absent} </p>
      <p>Unmarked: {unmarked}</p>
      <hr/>
      <button className="reset btn" onClick={props.reset} >Reset</button>
      <button className="done btn"  onClick={props.doneClicked} >Done</button>
      {/* for done btn ----- disabled={unmarked !== 0} */}
    </div>
  )
}


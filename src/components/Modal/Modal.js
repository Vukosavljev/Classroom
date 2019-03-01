import React from 'react'
import './Modal.scss'

export default function Modal({ students, done }) {

  return (
    <div className="Modal" style={done ? {top: '15%'}: null}>
      <h2>Attending list</h2>
      <ul>
          <li>Present: {showStudents(students, 'present')} </li>
          <li>Late: {showStudents(students, 'late')} </li>
          <li>Absent: {showStudents(students, 'absent')} </li>
      </ul>
    </div>
  )
}

function showStudents (arr, state) {
    let list = ''
    for (const i of arr) {
        if (i.attendance === state) {
            list += i.name +', ';
        }
    }
    return list;
}

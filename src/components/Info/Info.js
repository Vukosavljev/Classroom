import React from 'react';

import './Info.scss';

export default function Info(props) {

  const {showInfoIdStudent, students } = props.stateInfo;
  if (showInfoIdStudent) {
    var studentInfo = students.filter( student => student.id === showInfoIdStudent);
    var {name, id, attendance} = studentInfo[0];
  }


  return (
    <div className="Student-info">
        <h1>Student Details</h1>
        <ul>
            <li>Name: {name}</li>
            <li>Id: {id}</li>
            <li>Attendance: {attendance}</li>
        </ul>
      {/* <NavLink to="/" exact >
      Back
      </NavLink> */}


      
    </div>
  )
}

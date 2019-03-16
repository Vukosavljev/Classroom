import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Info.scss';

class Info extends Component {
  render() {
    const {showInfoIdStudent, students } = this.props.stateInfo;
    if (showInfoIdStudent) {
      var studentInfo = students.filter(student => student.id === showInfoIdStudent);
      var {name, id, attendance} = studentInfo[0];
    }
    // console.log(Link)
  
    return (
      <div className="Student-info">
          <h1>Student Details</h1>
          <ul>
              <li>Name: {name}</li>
              <li>Id: {id}</li>
              <li>Attendance: {attendance}</li>
          </ul>
          <NavLink to={"/"} >
              Back
          </NavLink>

      </div>
    )

  }

}

export default Info;

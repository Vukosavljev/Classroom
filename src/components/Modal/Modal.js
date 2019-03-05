import React from 'react';
import './Modal.scss';
import 'font-awesome/css/font-awesome.min.css';


export default function Modal({ students, done, removeModal, keyPress }) {

    if (done) {
        document.getElementById('Modal').focus();
    }

  return (
    <div className="modal-wrapper" style={done ? {top: '0%'}: null}
    onClick={removeModal}
    >
        <div id="Modal" className="Modal" style={done ? {top: '15%'}: null}
        onKeyUp={keyPress}
        tabIndex="0"
        onClick={ proxy => proxy.stopPropagation()}
        >
        <h2>Attending list</h2>
        <i className="fa fa-times" onClick={removeModal} ></i>
        <ul>
            <li>Present: {showStudents(students, 'present')} </li>
            <li>Late: {showStudents(students, 'late')} </li>
            <li>Absent: {showStudents(students, 'absent')} </li>
        </ul>
        </div>
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

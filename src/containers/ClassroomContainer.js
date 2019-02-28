import React, { Component } from 'react'
import Student from '../components/Student/Student'
import Summary from '../components/Summary/Summary'
import './Classroom.scss'


export default class ClassromContainer extends Component {
    state = {
        students: [
            {name: 'Marko', id: 1}, {name: 'Pera', id: 2}, {name: 'Mika', id: 3},
            {name: 'Perica', id: 4}, {name: 'Aca', id: 5}, {name: 'Milos', id: 6},
            {name: 'Marina', id: 7}, {name: 'Ana', id: 8}, {name: 'Milena', id: 9}, 
            {name: 'Dragana', id: 10}, {name: 'Milica', id: 11}, {name: 'Ivana', id: 12}
        ]
    }

    addAttendaceHandler = (e, id) => {
        const attendStudents = [...this.state.students].map( student => {
            if (student.id === id) {
                student.attendace = e;
            }
            return student;
        })
        this.setState({ student: attendStudents });
        console.log(attendStudents)
    }

    
  render() {
    const students = this.state.students.map( student => 
        <Student key={student.id}
        name={student.name}
        attendace={student.attendace}  
        addAttendace={(e) => this.addAttendaceHandler(e.target.alt, student.id)}
        />)

    return (
        <>
            <div className="Classroom" >
                {students}
            </div>
            <div className="Summary" >
                <Summary />
            </div>
   
        </>
    )
  }
}



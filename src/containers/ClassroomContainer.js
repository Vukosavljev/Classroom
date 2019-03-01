import React, { Component } from 'react'
import Student from '../components/Student/Student'
import Summary from '../components/Summary/Summary'
import './Classroom.scss'


export default class ClassromContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         students: [
    //             {name: 'Marko', id: 1, attendace: null}, {name: 'Pera', id: 2, attendace: null}, 
    //             {name: 'Mika', id: 3, attendace: null}, {name: 'Perica', id: 4, attendace: null}, 
    //             {name: 'Aca', id: 5, attendace: null}, {name: 'Milos', id: 6, attendace: null},
    //             {name: 'Marina', id: 7, attendace: null}, {name: 'Ana', id: 8, attendace: null}, 
    //             {name: 'Milena', id: 9, attendace: null}, {name: 'Dragana', id: 10, attendace: null}, 
    //             {name: 'Milica', id: 11, attendace: null}, {name: 'Ivana', id: 12, attendace: null},
    //         ],
    //     }
    
    // }
    state = {
        students: [
            {name: 'Marko', id: 1, attendace: null}, {name: 'Pera', id: 2, attendace: null}, 
            {name: 'Mika', id: 3, attendace: null}, {name: 'Perica', id: 4, attendace: null}, 
            {name: 'Aca', id: 5, attendace: null}, {name: 'Milos', id: 6, attendace: null},
            {name: 'Marina', id: 7, attendace: null}, {name: 'Ana', id: 8, attendace: null}, 
            {name: 'Milena', id: 9, attendace: null}, {name: 'Dragana', id: 10, attendace: null}, 
            {name: 'Milica', id: 11, attendace: null}, {name: 'Ivana', id: 12, attendace: null},
        ],
        // present: 0,
        // late: 0,
        // absent: 0,
        // unmarked: this.state.students.length,
    }
    addAttendaceHandler = (e, id) => {
        console.log(this.state['students'])
        // const attendStudents = [...this.state.students].map( student => {
        //     if (student.id === id) {
        //         student.attendace = e;
        //     }
        //     return student;
        // })
        // this.setState({ students: attendStudents });
        // console.log(attendStudents)
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
                <Summary 
                // attending={this.state}
                 />
            </div>
   
        </>
    )
  }
}



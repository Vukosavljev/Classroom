import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Student from '../components/Student/Student';
import Summary from '../components/Summary/Summary';
import Modal from '../components/Modal/Modal';
import Info from '../components/Info/Info';
import './Classroom.scss'


export default class ClassromContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Marko', id: 1, attendance: null }, { name: 'Pera', id: 2, attendance: null },
                { name: 'Mika', id: 3, attendance: null }, { name: 'Perica', id: 4, attendance: null },
                { name: 'Aca', id: 5, attendance: null }, { name: 'Milos', id: 6, attendance: null },
                { name: 'Marina', id: 7, attendance: null }, { name: 'Ana', id: 8, attendance: null },
                { name: 'Milena', id: 9, attendance: null }, { name: 'Dragana', id: 10, attendance: null },
                { name: 'Milica', id: 11, attendance: null }, { name: 'Ivana', id: 12, attendance: null },
            ],
            present: 0,
            late: 0,
            absent: 0,
            done: false,
            showInfoIdStudent: null,
        }
    }

    addAttendanceHandler = (e, id) => {
        const attendStudents = [...this.state.students].map(student => {
            if (student.id === id) {
                student.attendance = e;
            }
            return student;
        })
        this.setState(state => {
            return { [e]: state[e] + 1 };
        });
        this.setState({ students: attendStudents });

    }

    resetattendance = () => {
        const resetStudents = [...this.state.students];
        resetStudents.forEach(student => student.attendance = "");

        this.setState({ students: resetStudents, present: 0, late: 0, absent: 0, done: false });
    }

    doneClickHandler = () => {
        this.setState({ done: true })
    }

    removeModal = (e) => {
        // e.stopPropagation();
        this.setState({ done: false });
    }

    onEscapePress = (e) => {
        if (e.keyCode === 27) {
            this.removeModal();
        }
    }

    showInfoHandler = (id) => {
        this.setState({ showInfoIdStudent: id });
    }

    render() {

        const students = this.state.students.map(student =>
            <Student key={student.id}
                name={student.name}
                id={student.id}
                attendance={student.attendance}
                addAttendance={(e) => this.addAttendanceHandler(e.target.id, student.id)}
                showInfoHandler={this.showInfoHandler}
            />)

        return (
            <>
                <Switch>
                <Route exact path="/" render={() => (
                    <>
                        <div className="ClassroomContainer" >
                            {students}
                        </div>

                        <div className="Summary" >
                            <Summary
                                attending={this.state}
                                reset={this.resetattendance}
                                doneClicked={this.doneClickHandler}
                            />
                        </div>
                    </>
                )} />

                <Route path="/student-info"
                    render={() => <Info stateInfo={this.state} />}
                />
                </Switch>

                <Modal
                    students={this.state.students}
                    done={this.state.done}
                    removeModal={this.removeModal}
                    keyPress={this.onEscapePress}
                />

            </>
        )
    }
}



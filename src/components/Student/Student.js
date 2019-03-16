import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/images/student.png'
import present from '../../assets/images/present.png'
import late from '../../assets/images/late.png'
import absent from '../../assets/images/absent.png'
import './Student.scss'

export default class Student extends Component {

  render() {

    const { addAttendance, name, attendance, id, showInfoHandler } = this.props

    return (
      <div className="studentWrapper" >
        <div>
          <img src={image} alt="student" className="Student-img" />
          <button onClick={() => showInfoHandler(id)} className="Info-btn" >
            <Link to={"/student-info/" + name}>Info</Link>
          </button>

        </div>
        <h4>{name}</h4>
        <h4>

          {
            attendance ?
              <div className="images">
                <img src={require(`../../assets/images/${attendance}.png`)} alt="present" className="img" style={{ cursor: 'context-menu' }} />
                <span>{attendance}</span>
              </div> :

              <div className="images">
                <img src={present} alt="present" id="present" className="img" onClick={addAttendance} />
                <img src={late} alt="late" id="late" className="img" onClick={addAttendance} />
                <img src={absent} alt="absent" id="absent" className="img" onClick={addAttendance} />
              </div>
          }

        </h4>
      </div>
    )
  }
}

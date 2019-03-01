import React from 'react'
import image from '../../assets/images/student.png'
import present from '../../assets/images/present.png'
import late from '../../assets/images/late.png'
import absent from '../../assets/images/absent.png'
import './Student.scss'

export default function student({ addAttendance, name, attendance }) {


  return (
    <div className="studentWrapper" >
      <div>
          <img src={image} alt="student" className="Student-img"/>
      </div>
      <h4>{name}</h4>
      <h4>
        {attendance ?
            <div className="images">
                <img src={require(`../../assets/images/${attendance}.png`)} alt="present" className="img" style={{cursor: 'context-menu'}} />
                <span>{attendance}</span> 
            </div> :
            (
            <div className="images">
                <img src={present} alt="present" className="img" onClick={addAttendance} />
                <img src={late} alt="late" className="img" onClick={addAttendance}/>
                <img src={absent} alt="absent" className="img" onClick={addAttendance}/>
            </div>
            )
        }
      </h4>
    </div>
  )
}

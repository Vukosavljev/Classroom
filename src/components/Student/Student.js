import React from 'react'
import image from '../../assets/images/student.png'
import present from '../../assets/images/present.png'
import late from '../../assets/images/late.png'
import absent from '../../assets/images/absent.png'
import './Student.scss'

export default function student({ addAttendace, name, attendace }) {


  return (
    <div className="studentWrapper" >
      <div>
          <img src={image} alt="student" style={{height: '50px'}}/>
      </div>
      <h4>{name}</h4>
      <h4>
        {attendace ?
            <div className="images">
                <img src={require(`../../assets/images/${attendace}.png`)} alt="present" className="img" />
                <span>{attendace}</span> 
            </div> :
            (
            <div className="images">
                <img src={present} alt="present" className="img" onClick={addAttendace} />
                <img src={late} alt="late" className="img" onClick={addAttendace}/>
                <img src={absent} alt="absent" className="img" onClick={addAttendace}/>
            </div>
            )
        }
      </h4>
    </div>
  )
}

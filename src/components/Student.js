import React from 'react'
import image from '../assets/images/student.png'
import correct from '../assets/images/correct.png'
import x from '../assets/images/x.png'
import clock from '../assets/images/clock.png'

export default function student({ addAttendace, name, attendace }) {


  return (
    <div style={{flex: '1 0 200px', border: '1px solid black', margin: '20px'}}>
      <div>
          <img src={image} alt="student" style={{height: '50px'}}/>
      </div>
      <h4>{name}</h4>
      <h4 style={{display: 'flex', justifyContent: 'space-around'}} >
        {attendace ?
            <div>
                <img src={require(`../assets/images/${attendace}.png`)} alt="correct" style={imgStyle} onClick={addAttendace} />
                {attendace === 'correct' ? 'Present' :
                attendace === 'clock' ? 'late' : 'Absent'} 
            </div> :
            (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <img src={correct} alt="correct" style={imgStyle} onClick={addAttendace} />
                <img src={clock} alt="clock" style={imgStyle} onClick={addAttendace}/>
                <img src={x} alt="x" style={imgStyle} onClick={addAttendace}/>
            </div>
            )
        }
      </h4>
    </div>
  )
}

const imgStyle = {
    display: 'block',
    width: '20px',
    height: '20px',
}

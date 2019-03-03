import React from 'react';
import './Info.scss'

export default function Info({ name }) {
  return (
    <div>
        <h1>Student Details</h1>
        <ul>
            <li>Name: {name}</li>
        </ul>
      <p></p>
      
    </div>
  )
}

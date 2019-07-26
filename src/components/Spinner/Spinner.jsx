
import React from 'react'
import './Spinner.css'

export default props => (
  <div className="spinner-container">
    <div className="spinner-box">
      <div className="blue-orbit leo" />

      <div className="green-orbit leo" />

      <div className="red-orbit leo" />

      <div className="white-orbit w1 leo" /><div className="white-orbit w2 leo" /><div className="white-orbit w3 leo" />
    </div>
  </div>
)

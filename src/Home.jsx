import React from 'react'
import imageBack from '../image/png.webp'

export default function () {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img src={imageBack} className="card-img" alt="Background"
          height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div claasName="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARIVALS</h5>
            <p className="card-text load fs-2"> CHEK OUT ALL THE TRETDS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import image from '../image/contact.png'

export default function Contact() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-md 5 d-flex justify-contet-center">
            <img src={image} alt="Contact Us"
              height="400px" width="400px " />
          </div>
          <div className='col-md-6 d-inline'>
            <form action="">
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleForm" placeholder="Full Name"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
            <button type="button" class="btn btn-outline-dark w-25" >Danger</button>
          </div>
        </div>
      </div>
    </div>
  )
}

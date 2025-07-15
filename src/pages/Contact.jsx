import React from 'react'

function Contact() {
  return (
    <div className='container my-5'>
      <h2 className='text-dark text-center' ><i className="bi bi-person-lines-fill"></i> Contact us</h2>
      <div className='row'>
        <div className='col-md-6 offset-3'>
          <form action="">
            <p>Enter Name : <input type="text" className='form-control' placeholder='Enter  Name' /></p>
            <p>Enter Email : <input type="email" className='form-control' placeholder='Enter  Email' /></p>
            <p>Message : <textarea name="" className='form-control' id=""></textarea></p>
            <p className='text-center'>
              <button className='btn btn-warning'> Contact</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
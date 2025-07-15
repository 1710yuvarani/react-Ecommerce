import React from 'react'
import shopingbag from '../assets/shopingbag.jpg'


function About() {
  return (
    <div className='container my-3'>
      <h2 className='text-dark text-center'><i className="bi bi-question-octagon"></i> About us</h2>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6'>
          <img src={shopingbag} className='img-fluid pt-4' alt="" />
        </div>
        <div className=' col-12 col-md-6 text-center '>
          <p className='fst-italic pt-4'>
            Welcome to StepStyle Shoes – your trusted destination for stylish and comfortable footwear.

            We specialize in offering a wide variety of shoes for men, women, and kids – from daily wear to sports and formal collections.
            Our goal is to provide high-quality shoes that match your style and support your every step.

            With a perfect blend of fashion, comfort, and affordability, StepStyle makes sure you never have to compromise.
            Whether you're going to work, college, gym, or a casual outing — we have something for every walk of life.

            Step in with confidence. Step out in style – only at StepStyle Shoes.
          </p>
        </div>
      </div>


    </div>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div>
            <div class="card text-center text-bg-warning">
                <div className="card-header">
                   <i className="bi bi-cart4"></i>  Ecommerce App
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special Shopping Time </h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link className='text-warning' to={'/'} class="btn btn-dark">Home</Link>
                </div>
                <div class="card-footer text-dark">
                    Copyright &copy; 2025
                </div>
            </div></div>
    )
}

export default footer
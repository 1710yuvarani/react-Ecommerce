import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        < Link to={'/'} className="navbar-brand text-warning"><i className="bi bi-cart4"></i> Ecommerce</Link>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 gap-lg-5 fs-5 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className="nav-link text-light active " aria-current="page" > <i className="bi bi-house-heart-fill"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/About'} className="nav-link text-light active " aria-current="page" ><i className="bi bi-question-octagon"></i> About</Link>
            </li>
            <li className="nav-item">
              < Link to={'/Product'} className="nav-link text-light active " aria-current="page" ><i className="bi bi-bag-plus-fill"></i> Product</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Contact'} className="nav-link text-light active " aria-current="page" ><i className="bi bi-person-lines-fill"></i>  Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar
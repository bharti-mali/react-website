import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand">Logo</Link>
              <button type="button" className="navbar-toggler" data-bs-target="#navmenu" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse"></div>
              <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link to='/' className="nav-link active">Home</Link></li>
                  <li className="nav-item"><Link to='/about' className="nav-link ">About Us</Link></li>
                  <li className="nav-item"><Link to='/service' className="nav-link ">Service</Link></li>
                  <li className="nav-item"><Link to='/contact' className="nav-link ">Contact Us</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar

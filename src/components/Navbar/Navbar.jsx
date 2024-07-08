import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="./den black 1.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center justify-content-around " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Internships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
        
      </ul>
      <form className="d-flex align-items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        <a href="#" className="lightBlue">Create Account</a>
        <button className="cyan" type="submit">Sign In</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

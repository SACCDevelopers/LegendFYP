import React from 'react'
import '../css/HomeAndNav.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Student_Signup from '../signup/student_signup/Student_Signup';

export default function HomeNav() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg py-4">
      <div className="container-fluid">
      <a className="text-wrap text-break hovera fw-bold" href="#" style={{fontSize:"20px"}}>Self Assessment and Career Counselling</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link hovera active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link hovera" href="#">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link hovera">Contact Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link hovera">About Us</a>
              <Link to="/CarouselPage">Home</Link>
            </li>
          </ul>
          <div className='btn homebtn'>
            <button className='noStyle'>login /</button>
             <button onClick={<Student_Signup/>} className='noStyle'>SignUp</button>
            
             </div>
            
        </div>
      </div>
    </nav>
    </div>
  )
}

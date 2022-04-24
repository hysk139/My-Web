import React from 'react'
import logo from "../assets/afm.png"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0">
        <div class="container">
            <a class="navbar-brand" href="#"><img className="my-logo" src={logo}></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#about-me">About Me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#project">Project</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Me</a>
                </li>
            </ul>
            </div>
        </div>
</nav>
  )
}

export default Navbar
import React from 'react'
import me from "../assets/me.jpg"
import "./HeroComponent.css"
import Typed from "react-typed"

const HeroComponent = () => {
  return (
    <div class="container-fluid d-flex align-items-center">
      <div class="p-3 image-bg img-fluid w-100 d-flex align-items-center text-center justify-content-center">
        <div class="container">

          <div class="row">
            <div class="col text-light text-center">
              <h2 class="text-center fw-bold text-light">Hi! I Am <ins>Ahmad Fakhri Mirfananda</ins></h2><br/>
              <span class=" text-light text-center fs-3">I do </span><Typed
              className="typed-text text-light text-center fs-3"
              strings={["Web Design", "Backend Development", "Database Design"]}
              typeSpeed={40}
              backSpeed={60}
              loop
              />
              
              <br /><a class="btn btn-link text-decoration-none border border-secondary text-light mt-5" href="#about-me" role="button">Get to Know Me</a>
            </div>
          </div>

        </div>
          
          
      </div>
    </div>
    
  )
}

export default HeroComponent
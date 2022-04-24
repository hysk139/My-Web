import React from 'react'
import me from "../assets/Fakhri.png"
import CV from "../assets/Ahmad Fakhri Mirfananda_CV.pdf"
const AboutMe = () => {
  return (
    <div class="container text-break p-5" id="about-me" style={{}}>
        <div class="row mb-5 ">
            <h1 class="text-center fw-bold mt-5">
                About Me
            </h1>
        </div>
        <div class="row text-break">
            <div class="col-4">
            <img class="me rounded mx-auto d-block" src={me} alt="..."></img>
            </div>
            <div class="col-8 d-flex align-items-center">
              
              <p class="w-75 ps-5">
              My name is Ahmad Fakhri Mirfananda. I am a Computer Engineering Student in Universitas Indonesia. I am highly motivated in learning new things and I have high interest in everything technology. I am experienced in both web development projects and mobile development projects. I always strive to develop myself better by learning and tackling new challenges in development projects. Currently, I am the Project Manager of my organization in campus.
              </p>

              
              
                
            </div>
        </div>
        <div class="row">
          <div class="col justify-content-center text-center">
            <a class="btn btn-dark mt-5" href={CV} role="button">Download My CV</a>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
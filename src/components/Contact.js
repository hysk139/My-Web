import React from 'react'

import github from "../assets/github.png"
import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"



const Contact = () => {
  return (
    <div class="container mb-5 shadow-lg p-3 mb-5 bg-white rounded" id ="contact">
        <div class="row">
            <div class="col text-center mb-5">
                <h1 class="fw-bold fs-1">
                    Contact Me  
                </h1>
            </div>
        </div>

        <div class="row text-center">
            <div class="col-sm-4 ">
                <img class="rounded mx-auto" src={email} alt="..."></img>
                <p>fakhri1304@gmail.com</p>
            </div>
            <div class="col-sm-4">
                <img class="rounded mx-auto" src={github} alt="..."></img>
                <p>
                    <a href="https://github.com/hysk139">hysk139</a>
                </p>
            </div>
            <div class="col-sm-4">
                <img class="rounded mx-auto" src={linkedin} alt="..."></img>
                <p>
                    <a href="https://www.linkedin.com/in/ahmad-fakhri-mirfananda-675317197/">Ahmad Fakhri Mirfananda</a>
                </p>
                 
            </div>
        </div>





    </div>
  )
}

export default Contact
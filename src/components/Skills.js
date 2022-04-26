import React from 'react'
import logoHtml from "../assets/htmlcss.png"
import logoJava from "../assets/java.png"
import logoJS from "../assets/js.png"
import logoReact from "../assets/react.png"
import "./Skills.css"

const Skills = () => {
  return (
    <div class="container text-break p-5 my-skills shadow-lg bg-white rounded" id="skills"> 
    <div class="row">
        <h1 class="text-center fw-bold mb-5">
            Skills
        </h1>
    </div>
      <div class="row text-center ">
         <div class="col-lg-3 col-sm-6 col-xs-12">
         <img class="rounded mx-auto d-block w-25" src={logoHtml} alt="..."></img>
         <h5 class="fw-bold mt-1 mb-4">HTML & CSS</h5>
         </div>
         <div class="col-lg-3 col-sm-6 col-xs-12">
         <img class="rounded mx-auto d-block w-25" src={logoJS} alt="..."></img>
         <h5 class="fw-bold mt-1 mb-4">JavaScript</h5>
         </div>
         <div class="col-lg-3 col-sm-6 col-xs-12">
         <img class="rounded mx-auto d-block w-25" src={logoJava} alt="..."></img>
         <h5 class="fw-bold mt-1 mb-4">Java</h5>
         </div>
         <div class="col-lg-3 col-sm-6 col-xs-12">
         <img class="rounded mx-auto d-block w-25" src={logoReact} alt="..."></img>
         <h5 class="fw-bold mt-1 mb-4">React</h5>
         </div>
      </div>
    </div>
  )
}

export default Skills
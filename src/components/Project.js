import React from 'react'
import project1 from "../assets/ezcookforme.png"
import project2 from "../assets/yourkeeb.png"
import project3 from "../assets/EDUC8.png"
import project4 from "../assets/WebScrap.png"
import "./Project.css"

const Project = () => {

  return (
    <div class="container p-5" id="project"> 
    <div class="row mb-5 ">
        <h1 class="text-center fw-bold mt-5">
            Projects I Have Worked On
        </h1>
    </div>
    <div class="row mb-4">
      <div class="col col-lg-6 mb-3 mb-lg-0">
        <div class="hover hover-3 text-white rounded"><img src={project1} alt=""></img>
          <div class="hover-overlay"></div>
          <div class="hover-3-content px-5 py-4">
            <h1 class="hover-3-description text-uppercase mb-1">EZCOOKFORME</h1>
            <button type="button" class="btn btn-light btn-sm hover-3-description" data-bs-toggle="modal" data-bs-target="#project1-modal">More Info</button>
          </div>
        </div>
        </div>

        <div class="modal fade " id="project1-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">EZCOOKFORME</h5>
                
              </div>
              <div class="modal-body">
              <img class="rounded mx-auto d-block w-100" src={project1} alt="..."></img>
              <p class="mt-5 text-center">
                  EZCOOKFORME is a website built with React and JavaScript with an implementation of PostgreSQL. This site is used to store recipes in order to ease the user in finding the recipes they want to cook
              </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="https://ezcookfor.me" target="_blank" class="btn btn-primary" role="button" >Website</a>

              </div>
            </div>
          </div>
        </div>



        <div class="col col-lg-6 mb-3 mb-lg-0">
        <div class="hover hover-3 text-white rounded"><img src={project2} alt=""></img>
          <div class="hover-overlay"></div>
          <div class="hover-3-content px-5 py-4">
            <h1 class="hover-3-description text-uppercase mb-1">yourkeeb</h1>
            <button type="button" class="btn btn-light btn-sm hover-3-description" data-bs-toggle="modal" data-bs-target="#project2-modal">More Info</button>
          </div>
        </div>
        </div>

        <div class="modal fade " id="project2-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">yourkeeb</h5>
                
              </div>
              <div class="modal-body">
              <img class="rounded mx-auto d-block w-100" src={project2} alt="..."></img>
              <p class="mt-5 text-center">
                  yourkeeb is a React based website with implementation of PostgreSQL which helps the user or keyboard enthusiast to build and list the mechanical keyboard builds they have built or will build.
              </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="https://github.com/hysk139/yourkeeb-final" target="_blank" class="btn btn-primary" role="button" >Github</a>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row mb-4">
        <div class="col col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-3 text-white rounded"><img src={project3} alt=""></img>
            <div class="hover-overlay"></div>
            <div class="hover-3-content px-5 py-4">
              <h1 class="hover-3-description text-uppercase mb-1">EDUC8</h1>
              <button type="button" class="btn btn-light btn-sm hover-3-description" data-bs-toggle="modal" data-bs-target="#project3-modal">More Info</button>
            </div>
          </div>
        </div>
        <div class="modal fade " id="project3-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">EDUC8</h5>
                
              </div>
              <div class="modal-body">
              <img class="rounded mx-auto d-block w-100" src={project3} alt="..."></img>
              <p class="mt-5 text-center">
              EDUC8 is a study management mobile app that is used to keep track of studying progress with a to do list and resource management feature that can be used to store study materials.
              </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="https://github.com/hysk139/educ8fe" target="_blank" class="btn btn-primary" role="button" >Github FE</a>
                <a href="https://github.com/hysk139/educ8-be" target="_blank" class="btn btn-primary" role="button" >Github BE</a>
              </div>
            </div>
          </div>
        </div>




        <div class="col col-lg-6 mb-3 mb-lg-0">
        <div class="hover hover-3 text-white rounded"><img src={project4} alt=""></img>
          <div class="hover-overlay"></div>
          <div class="hover-3-content px-5 py-4">
            <h1 class="hover-3-description text-uppercase mb-1">Web Scrapping</h1>
            <button type="button" class="btn btn-light btn-sm hover-3-description" data-bs-toggle="modal" data-bs-target="#project4-modal">More Info</button>
          </div>
        </div>
        </div>
        <div class="modal fade " id="project4-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <h5 class="modal-title fw-bold" id="exampleModalLabel">Web Scrapping E-Commerce</h5>
                
              </div>
              <div class="modal-body">
              <img class="rounded mx-auto d-block w-100 h-100" src={project4} alt="..."></img>
              <p class="mt-5 text-center">
                  Made a tool for a client to scrap information of sales from an e-commerce account using python and available libraries.
              </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a href="https://github.com/hysk139/Webscrap-Exercise" target="_blank" class="btn btn-primary" role="button" >Github</a>

              </div>
            </div>
          </div>
        </div>

      </div>
      


    </div>
  )
}

export default Project
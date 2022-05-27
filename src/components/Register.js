import React from 'react'

import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        <Link to="/"><button type="button" class="btn-close btn-lg shadow-none float-end" aria-label="Close">
            <span class="material-symbols-outlined">
            close
            </span>
            </button></Link>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign Up with</p>
            <button type="button" class="btn btn-primary bg-primary mx-1 ">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary bg-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary bg-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            
          </div>

          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          
          </div>
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Confirm password" />
          
          </div>

          
       
            

          <div class="text-center text-lg-start mt-4 pt-2">
            <Link to="/LoggedIn"><button type="button" class="btn btn-primary btn-lg bg-primary"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Sign Me Up</button></Link>
            <p class="small fw-bold mt-2 pt-1 mb-0">Have an account? <Link to="/Login"><a href="#!"
                class="link-danger">Login</a></Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    
    </>
  )
}

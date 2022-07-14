import React from "react";
import "../index.css";

function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          
          <div class="col-lg-5">
            <h1 class="font-weight-light">Log In</h1>
            
            <form>
            <label>
              <p>Username</p>
              <input type="text" />
            </label>
            <br/>
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
            <div>
              <button id="submitButton">Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

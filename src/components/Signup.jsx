import React from "react";

function Signup() {
  return (
    <div className="signup">
      <div class="container">
        <div class="row align-items-center my-5">
          
          <div class="col-lg-5">
            <h1 class="font-weight-light">Sign Up</h1>
            
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
            <br/>
            <label>
              <p>Confirm Password</p>
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

export default Signup;

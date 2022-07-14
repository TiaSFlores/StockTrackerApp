import React from "react";
import NASDAQ from "../images/NASDAQ.png"
import DOWJONES from "../images/DOWJONES.png"
import TESLA from "../images/TESLA.png"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home page</h1>
          </div>
        </div>

        

      </div>
      <div class="images">
          <img src={NASDAQ} alt="NASDAQ" width="700px"/>
          <img src={TESLA} alt="NASDAQ" width="700px"/>
          <img src={DOWJONES} alt="NASDAQ" width="700px"/>
        </div>
    </div>
  );
}

export default Home;

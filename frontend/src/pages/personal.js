import React from "react";
import './personal.css';
import NavBar from "../components/Navbar";

const edit = () => {
  return (
    <>

      <NavBar />

      <div className='details'>

        <div className='info'>
          <div class="name">
            <label for="fullName">Full Name   </label>
            <input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
          </div>
          <div class="year">
            <label for="year">Year  </label>
            <input type="text" class="form-control" id="year" placeholder="Enter year(First/Second/Third/Fourth)" />
          </div>
          <div class="branch">
            <label for="branch">Branch  </label>
            <input type="text" class="form-control" id="branch" placeholder="Enter branch" />
          </div>
          <div class="email">
            <label for="email">Email ID   </label>
            <input type="text" class="form-control" id="email" placeholder="Enter Email ID" />
          </div>
          <div className='Buttons'>
            <div className="updateButton">
              <button type="submit" className="updateButtons">Update</button>
            </div>
            <div className='cancelButton'>
              <button type="submit" className="cancelButtons">Cancel</button>
            </div>

          </div>

        </div>

      </div>



    </>
  );


}

export default edit;
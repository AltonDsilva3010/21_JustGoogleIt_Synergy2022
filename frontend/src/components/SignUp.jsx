import { useState } from "react";

const SignUp = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <a href="/">Log In</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Roll no:</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="e.g 9999"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Class</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="role"
            >
              <option value="secomps">SE Computers</option>
              <option value="seaids">SE AI/DS</option>
              <option value="seecs">SE Electronics and Computer Science</option>
              <option value="semech">SE Mechanical</option>
              <option value="tecomps">TE Computers</option>
              <option value="teaids">TE AI/DS</option>
              <option value="teecs">TE Electronics and Computer Science</option>
              <option value="temech">TE Mechanical</option>
              <option value="becomps">BE Computers</option>
              <option value="beaids">BE AI/DS</option>
              <option value="beecs">BE Electronics and Computer Science</option>
              <option value="bemech">BE Mechanical</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Type</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="role"
            >
              <option value="student">Student</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

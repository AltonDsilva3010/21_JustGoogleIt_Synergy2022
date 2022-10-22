import { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "Organizer") {
      setRole(true);
    } else {
      setRole(false);
    }
  };

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
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
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
            <label>Type</label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="role"
              onChange={handleChange}
            >
              <option value="Customer">Customer</option>
              <option value="Organizer">Organizer</option>
            </select>
          </div>
          {role && (
            <div className="form-group mt-3">
              <label>Enter Adhaar number</label>
              <input
                type="text"
                name="adhaarno"
                className="form-control mt-1"
              />
            </div>
          )}
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

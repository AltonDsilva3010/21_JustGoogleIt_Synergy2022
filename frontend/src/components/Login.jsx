import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, loginUser } from "../store/userSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [formData, setFormData] = useState({ rollno: "", password: "" });

  const { rollno, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData));
    return navigate("/");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In?</h3>
          <div className="text-center">
            Not registered?{" "}
            <span className="link-primary">
              <Link to="/signup">Sign In</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Roll no</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter Roll Number"
              value={rollno}
              onChange={onChange}
              name="rollno"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={onChange}
              name="password"
            />
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

export default Login;

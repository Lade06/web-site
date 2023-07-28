import React from "react";
import "./login.css"
const Login = () => {
  return (
    <div>
      <div className="loginn mt-5">
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label for="email" className="form-label">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label for="pwd" className="form-label">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              id="pwd"
              placeholder="Enter Password"
              name="pswd"
            />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
};
export default Login;

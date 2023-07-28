import "./signup.css"
const Signup = () => {
    return(
        <div>
            <div className="sign mt-5">
            <form action="/action_page.php">
           <div className="mb-3 mt-3">
            <label for="firstname" className="form-label">
              First Name
            </label>{" "}
            <br />
            <input
              type="text"
              id="firstname"
              placeholder="Enter First Name"
              name="First Name"
            />
          </div>
          <div className="mb-3 mt-3">
            <label for="lastname" className="form-label">
              Last Name
            </label>{" "}
            <br />
            <input
              type="text"
              id="firstname"
              placeholder="Enter Last Name"
              name="Last Name"
            />
          </div>
          <div className="mb-3 mt-3">
            <label for="email" className="form-label">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="Email"
            />
          </div>
          <div className="mb-3 mt-3">
            <label for="phone" className="form-label">
              Phone Number
            </label>{" "}
            <br />
            <input
              type="number"
              id="phonenumber"
              placeholder="Enter Phone Number"
              name=" Phone Number"
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
    )
}

export default Signup;
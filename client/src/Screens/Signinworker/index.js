import React from "react";
import "./signupworker.css";

function Signupworker() {
  return (
    <div className="Loginworkerdiv">
      <h1 className="signup">Sign up</h1>
      <p>Name</p>
      <input type="text" />
      <p>Email</p>
      <input type="email" />
      <p>Mobile</p>
      <input type="tel" />
      <p>Password</p>
      <input type="password" />
      <button className="buttn">Submit</button>
    </div>
  );
}

export default Signupworker;

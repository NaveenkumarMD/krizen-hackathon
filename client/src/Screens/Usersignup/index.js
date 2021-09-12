import React from "react";
import { useState } from "react";

export default function UserSignup() {
    const [name,setname] = useState("");
    const[password,setpassword]=useState("");
    const[number,setnumber]=useState(0);
    const[email,setemail]=useState("");

  return (
    <div className="Loginworkerdiv">
      <h1 className="signup">Sign up</h1>
      <p>Name</p>
      <input type="text" onChange={e=>setname(e.target.value)}/>
      <p>Email</p>
      <input type="email" onChange={e=>setemail(e.target.value)} />
      <p>Mobile</p>
      <input type="tel" onChange={e=>setnumber(e.target.value)}/>
      <p>Password</p>
      <input type="password" onChange={e=>setpassword(e.target.value)} />
      <button className="buttn">Submit</button>
    </div>
  );
}


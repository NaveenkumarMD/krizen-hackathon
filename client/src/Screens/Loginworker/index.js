import React, { useState } from "react";
import "./Loginworker.css";
import Worker from "../../Assets/worker.jpg";
import Coffee from "../../Assets/coffee.svg";
import {useHistory} from 'react-router-dom';
function Loginworker() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const history = useHistory();

  const login = () => {
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(email)) {
    //   return alert("Invalid email");
    // }

    console.log(email);
    fetch("http://localhost:2000/worker/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('workerdata',JSON.stringify({
          ...data.user
        }));
        history.push('/Jobsrecieved');
      }).catch((err)=>alert('Something went wrong'));
  };

  return (
    <div className="Logindiv">
      <img src={Worker} className="image" alt="Worker" />
      <div className="div_2">
        <h1 style={{ margin: "0 0 20px 0" }}>Find works</h1>
        <h3 style={{ margin: "0 0 40px 0" }}>Login to a new epic</h3>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="buttn"
          onClick={login}
          style={{ position: "relative", left: 0, bottom: "10px" }}
        >
          Submit
        </button>
        <div style={{marginTop:"10px",fontSize:"14px",color:"gray",cursor:"pointer"}} onClick={()=>history.push("/signup-worker")}>New to Find workers?</div>
        <img className="coffee" src={Coffee} alt="Worker" />
      </div>
      <p className="quote">
        A professional make <br />
        everything neater
      </p>
    </div>
  );
}
export default Loginworker;

import React from "react";
import "./Loginworker.css";
import Worker from "../../Assets/worker.jpg";
import Coffee from "../../Assets/coffee.svg";

function Loginworker() {
  return (
    <div className="Logindiv">
      <img src={Worker} className="image" alt="Worker"/>
      <div className="div_2">
          <h1 style={{margin:"0 0 20px 0"}}>Find worker</h1>
          <h3 style={{margin:"0 0 40px 0"}}>Login to a new epic</h3>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Password" />
        <button className="buttn" style={{position:"relative",left:0,bottom:"10px"}}>Submit</button>
        <img className="coffee" src={Coffee}  alt="Worker"/>
    </div>
    <p className="quote">A professional make <br/>everything neater</p>
    </div>
  );
}

export default Loginworker;

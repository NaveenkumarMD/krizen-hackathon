import React from "react";
import Worker from "../../Assets/worker.jpg";
import Coffee from "../../Assets/coffee.svg";
import { useState } from "react";

function UserLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const login = async () => {
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(email)) {
    //   return alert("Invalid email");
    // }
    alert("hello");
    console.log(email);
    await fetch("https:localhost:2000/customer/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="buttn"
          style={{ position: "relative", left: 0, bottom: "10px" }}
          onClick={login}
        >
          Submit
        </button>
        <img className="coffee" src={Coffee} alt="Worker" />
      </div>
      <p className="quote">
        A professional make <br />
        everything neater
      </p>
    </div>
  );
}

export default UserLogin;

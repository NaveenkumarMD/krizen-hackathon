import "./home.css";
import logo from "../../Assets/workerslogo.png";
import { Link,useHistory } from "react-router-dom";
export default function HomePage() {
  const history=useHistory()
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" srcset="" height="auto" width="100px" />
        </div>

        <div className="navbtns">
          <button className="secondary" onClick={()=>history.push("/user-login")}>Log In</button>
          <button className="primary" onClick={()=>history.push("/user-signup")}>Get started</button>
        </div>
      </nav>
      <section className="body-content">
        <h1>Workers Collaborative Agency</h1>
        <p>
          Ahead with more than 2000+ workers and more than 5 lakhs customers
          around the world
        </p>
        <button className="primary" style={{marginTop:"20px"}} 
          onClick={()=>{
            history.push("/User-signup")
          }}
        >Get started</button>
      </section>

      <section className="footer-cards">
        <div className="secondary-card">
          <h2>For People</h2>
          <p>We provide most promising household services.</p>
          
          <Link style={{color:"white",textDecoration:"none"}} to="/User-login" className="view">View &rarr;</Link>
        </div>
        <div className="primary-card secondary-card">
          <h2>For Workers</h2>
          <p>We provide opportunity to work.</p>
          <Link style={{color:"white",textDecoration:"none"}} to="/Login-worker" className="view">View &rarr;</Link>
        </div>
      </section>
    </div>
  );
}

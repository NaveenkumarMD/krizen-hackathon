import './home.css'
import logo from '../../Assets/workerslogo.png';
export default function HomePage(){
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" srcset="" height="auto" width="100px"/>
                    
                </div>
          
                <div className="navbtns">
                    <button className="secondary">Sign Up</button>
                    <button className="primary">Get started</button>
                </div>
            </nav>
            <section className="body-content">
                <h1>Workers Collaborative Agency</h1>
                <p>Ahead with more than 2000+ workers and more than  5 lakhs customers around the world</p>
                <button className="primary">Get started</button>
            </section>

            <section className="footer-cards">
                <div className="secondary-card">
                    <h2>For People</h2>
                    <p>We provide most promising household services.</p>
                    <div className="view">
                        View &rarr;
                    </div>
                </div>
                <div className="primary-card secondary-card">
                    <h2>For Workers</h2>
                    <p>We provide opportunity to work.</p>
                    <div className="view">
                        View &rarr;
                    </div>
                </div>
            </section>
        </div>
    );
}
import React from "react";
import Navbar from "../../Components/navbar";
import "./ViewAssignedworks.css"

export default function ViewAssignedworks() {
    return (
        <div className="searchworkers">
            <Navbar />
    
            <div className="searchworkers-container">
                <h1>Jobs Assigned</h1>
                <p> <br/>Jobs that you have been assigned</p>
                
                <p style={{marginTop:"8%"}}>10 jobs found</p>
                <div className="search-container">  
                    <div className="search-result">
                        <div className="search-result-name">
                            <div className="search-profile"></div>
                            <div className="profile-name-container">
                                   <div>Naveenkumar</div>
                                   <div className="profile-skills">
                                        <div className="profile-skill">Plumber</div>
                                        <div className="profile-skill">Plumber</div>
                                   </div>
                         </div>
                        </div>
                        <div>
                            <button className="btn search-button">Status</button>
                        </div>
                    </div>
                    <div className="work-container">
                        <h3>Description</h3>
                        <p className="name1">Some of lawn works and other works</p>
                        
                    </div>
                    <div className="btn2">
                    <button className="btn search-button">Accept</button>
                    </div>
                    <div className="line">

                    </div>
                </div>
            </div>

        </div>
    );
}
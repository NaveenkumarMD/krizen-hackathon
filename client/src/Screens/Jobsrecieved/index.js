import React from 'react'
import Navbar from '../../Components/navbar'
import './josbrecieved.css'
function Jobsrecieved() {
    return (
        <div>
            <Navbar />
            <div className="searchworkers-container">
                <h1>Jobs recieved</h1>
                <p>Jobs that you have recieved from the people</p>

                <p style={{ marginTop: "5%" }}>5 matches found</p>
                <div className="search-container">
                    <div style={{borderBottom:"1px solid gray"}}>
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
                        </div>
                        <div className="description-content">
                            <h4 className="description-title">Description</h4>
                            <p className="description-content-x">Some of the household works</p>
                        </div>
                        <div className="accept-button">
                            <div></div>
                            <button style={{ marginBottom: "0px" }} className="btn search-button">
                                Accept
                            </button>
                        </div>
                    </div><div>
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
                        </div>
                        <div className="description-content">
                            <h4 className="description-title">Description</h4>
                            <p className="description-content-x">Some of the household works</p>
                        </div>
                        <div className="accept-button">
                            <div></div>
                            <button style={{ marginBottom: "0px" }} className="btn search-button">
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobsrecieved

import React from 'react'
import Navbar from '../../Components/navbar'
import './searchworkers.css'
import searchicon from '../../Assets/search.svg'
function Searchworkers() {
    return (
        <div className="searchworkers">
            <Navbar />
            <div className="searchworkers-container">
                <h1>Search Workers</h1>
                <p>Find the appropriate workers for your specific job </p>
                <div className="search-container">
                    <div className="search-row">
                        <div className="search-row-container">
                            <img src={searchicon} alt="search" width="25px" height="25px" />
                            <input placeholder="Search with the work title " />
                        </div>
                        <div>
                            <div className="btn-group">
                                <button className="btn clear-button">
                                    Clear
                                </button>
                                <button className="btn search-button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="filters">
                        <select name="cars" id="cars" className="sort-button">
                            <option value="volvo" style={{ padding: "90px" }}>Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" id="cars" className="sort-button">
                            <option value="volvo" style={{ padding: "90px" }}>Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <p style={{marginTop:"8%"}}>5 matches found</p>
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
                            <button className="btn search-button">View</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Searchworkers

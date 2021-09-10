import React from 'react'
import Navbar from '../../Components/navbar'
import searchicon from '../../Assets/search.svg'
function Addskills() {
    return (
        <div>
           <Navbar/>
           <div className="searchworkers-container">
           <h1>Add skills</h1>
           <p>Seach for a skill and add it to your profile</p>
           <div className="search-container" style={{paddingBottom:"50px"}}>
                    <div className="search-row">
                        <div className="search-row-container">
                            <img src={searchicon} alt="search" width="25px" height="25px" />
                            <input placeholder="Search for the skills.. " />
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
                    
                </div>
                <p style={{marginTop:"8%"}}>5 matches found</p>
                <div className="search-container">  
                    <div className="search-result">
                        <div className="search-result-name">
                            <div className="search-profile"></div>
                            <div className="profile-name-container">
                                   <div>Plumbing</div>
                         </div>
                        </div>
                        <div>
                            <button className="btn search-button">Add</button>
                        </div>
                    </div>
                    </div>
            </div> 
        </div>
    )
}

export default Addskills

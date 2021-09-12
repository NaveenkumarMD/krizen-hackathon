import React,{useEffect} from 'react'
import Navbar from '../../Components/navbar'
import './searchworkers.css'
import searchicon from '../../Assets/search.svg'
import works from '../../Assets/jobsdata'
import cities from '../../Assets/citiesdata'
function Searchworkers() {
    useEffect(()=>{
        fetch("")
    },[])
    return (
        <div className="searchworkers">
            <Navbar />
            <div className="searchworkers-container">
                <h1>Search Works</h1>
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
                        <select name="skills" id="skills" className="sort-button">{
                            works.map(data => {
                                return (
                                    <option value={data}>{data}</option>
                                )
                            })
                        }
                        </select>
                        <select name="location" id="location" className="sort-button">{
                            cities.map(data => {
                                if (data.length < 13) {
                                    return (
                                        <option value={data}>{data}</option>
                                    )
                                }
                            })
                        }
                        </select>

                    </div>
                </div>
                <p style={{ marginTop: "8%" }}>5 matches found</p>
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

import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/navbar'
import './searchworkers.css'
import searchicon from '../../Assets/search.svg'
import works from '../../Assets/jobsdata'
import cities from '../../Assets/citiesdata'
import logo from '../../Assets/site-logo.png'
import {Link,useHistory} from 'react-router-dom'
import profile from '../../Assets/profile.png'
function Searchworkers() {
    const history=useHistory()
    const [data, setdata] = useState([])
    const [search,setsearch] =useState("")
    const [skill,setskill]=useState("")
    const [location,setlocation]=useState("")
    const clear=()=>{
        setsearch("")
        setskill("")
        setlocation("")
    }
    useEffect(async () => {
        fetch("http://localhost:2000/allworkers", {
            method: "GET",
            headers: {
                "content-type": "applicatiom/json"
            }
        }).then(res => res.json()).then(data => {
            setdata(data)
        })
    }, [])
    return (
        <div className="searchworkers">
            <Navbar/>
            <div className="searchworkers-container">
                <div className="flex space-between align-center">
                    <div>
                    <h1>Search Works</h1>
                <p>Find the appropriate workers for your specific job </p>
                    </div>
                    <button onClick={()=>history.push("/viewassignedworks")}
                     className="btn search-btn" style={{color:"white",backgroundColor:"#286EF1"}}>View Assigned jobs</button>
                </div>

                <div className="search-container">
                    <div className="search-row">
                        <div className="search-row-container">
                            <img src={searchicon} alt="search" width="25px" height="25px" />
                            <input placeholder="Search with the work title " onChange={e=>setsearch(e.target.value)} value={search}/>
                        </div>
                        <div>
                            <div className="btn-group">
                                <button className="btn clear-button" onClick={clear}>
                                    Clear
                                </button>
                                <button className="btn search-button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="filters">
                        <select name="skills" id="skills" className="sort-button" onChange={e=>setskill(e.target.value)}>{
                            works.map(data => {
                                return (
                                    <option value={data}>{data}</option>
                                )
                            })
                        }
                        </select>
                        <select name="location" id="location" className="sort-button" onChange={e=>setlocation(e.target.value)}>{
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
                    {
                        data.map(data => {
                            console.log(data.location.toLowerCase()===location.toLowerCase() || location =="")
                            console.log((data.skills.includes(skill) || skill===""))
                            if(data.name.toLowerCase().indexOf(search)>-1 && (data.skills.includes(skill) || skill==="") && (location==="" || data.location.toLowerCase()===location.toLowerCase())){
                            return (
                                <div className="search-result">
                                <div className="search-result-name">
                                    <div className="search-profile"></div>
                                    <div className="profile-name-container">
                                        <div>{data.name}</div>
                                        <div className="profile-skills">
                                            <div className="profile-skill">{data.location}</div>
                                            {
                                                data.skills.map(res=>{
                                                    return(
                                                    <div className="profile-skill">{res}</div>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn search-button" onClick={()=>{
                                        history.push("/worker",{
                                            ...data
                                        })
                                    }}>View</button>
                                </div>
                            </div>
                                )}
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Searchworkers

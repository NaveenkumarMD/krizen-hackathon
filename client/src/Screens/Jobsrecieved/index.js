import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../../Components/navbar'
import './josbrecieved.css'
function Jobsrecieved() {
    const [jobs, setjobs] = useState([])
    const history=useHistory()
    useEffect(() => {
        fetch("http://localhost:2000/job", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                workerId: JSON.parse(localStorage.getItem('workerdata')).id
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            setjobs(data)
        })
    }, [])
    const acceptbid=(id)=>{
        fetch("http://localhost:2000/accept",{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                jobId:id
            })
        }).then(res=>{
            alert("Job has been accepted and his contact details are revealed .You can contact him now")
            window.location.reload()
        })
    }
    return (
        <div>
            <Navbar />
            <div className="searchworkers-container">
                <div className="flex space-between align-center">
                    <div>
                    <h1>Jobs recieved</h1>
                <p>Jobs that you have recieved from the people</p>
                    </div>
                    <button  className="btn search-btn" style={{color:"white",backgroundColor:"#286EF1"}} onClick={()=>history.push("/addskills")}>Add skillls</button>
                </div>
                


                <div className="search-container">

                    {jobs.map(job => {
                        console.log(job.customerId.name)
                        return(
                            <div>
                                <div className="search-result">
                                    <div className="search-result-name">
                                        <div className="search-profile"></div>
                                        <div className="profile-name-container">
                                            <div>{job.customerId.name}</div>
                                            <div className="profile-skills">
                                                <div className="profile-skill">{job.location}</div>
                                                <div className="profile-skill">{job.time}</div>
                                                <div className="profile-skill">
                                                {job.status==="accepted" && 
                                                <a>{job.customerId.number}</a>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description-content">
                                    <h4 className="description-title">Description</h4>
                                    <p className="description-content-x">{job.description || "none"}</p>
                                </div>
                                <div className="accept-button">
                                    <div></div>
                                    {job.status !="accepted" && 
                                             <button style={{ marginBottom: "0px" }} className="btn search-button"
                                             onClick={
                                                 ()=>acceptbid(job._id)
                                             }
                                             >
                                                 Accept
                                             </button>   
                                    }
                                   
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Jobsrecieved

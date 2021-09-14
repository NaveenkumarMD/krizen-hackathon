import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar";
import "./ViewAssignedworks.css"

export default function ViewAssignedworks() {
    const [data, setData] = useState([])
    const userdata = localStorage.getItem('userdata')
    const remove=(id)=>{
        fetch("http://localhost:2000/removejob",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                id
            })
        }).then(res=>res.json()).then(data=>{
            console.log(data)
        }).catch(err=>{
            alert("something went wrong...")
        })
    }
    useEffect(() => {
        fetch("http://localhost:2000/getuserjobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userId: JSON.parse(userdata).id
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            setData(data)
        }).catch(err => {
            alert("someting went wrong")
        })
    }, [])
    return (
        <div className="searchworkers">
            <Navbar />

            <div className="searchworkers-container">
                <h1>Jobs Assigned</h1>
                <p> <br />Jobs that you have been assigned</p>

                <p style={{ marginTop: "8%" }}>10 jobs found</p>
                <div className="search-container">

                    {data.map(data => {
                        const worker=data.workerId
                        return (

                            <>
                                <div className="search-result">
                                    <div className="search-result-name">
                                        <div className="search-profile"></div>
                                        <div className="profile-name-container">
                                            <div>{worker.name}</div>
                                            <div className="profile-skills">
                                                <div className="profile-skill">{data.location}</div>
                                                <div className="profile-skill">{data.time}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn search-button" style={{backgroundColor:[data.status=="pending"?"orange":"green"]}}>{data.status}</button>
                                    </div>
                                </div>
                                <div className="work-container">
                                    <h3>Description</h3>
                                    <p className="name1">{data.description || "none"}</p>

                                </div>
                                { data.status=="pending" &&
                                <div className="btn2">
                                    <button className="btn search-button" style={{backgroundColor:"red"}} onClick={()=>remove(data._id)}>Remove</button>
                                </div>}
                                <div className="line">

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}
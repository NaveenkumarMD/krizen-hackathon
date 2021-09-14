import logo from '../../Assets/workerslogo.png';
import avater from '../../Assets/profile.png';
import './Worker.css';
import cities from '../../Assets/citiesdata'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Modal from 'react-modal';
import React, { useState } from 'react'
import Navbar from '../../Components/navbar';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "black",
        width:"40%"
    },
};
export default function FindWorkers(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [description,setDescription]=useState("")
    const [time,setTime]=useState("")
    const [bid,setbid]=useState()
    const [location,setlocation]=useState("")

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    console.log(props.history.location.state)
    const data = props.history.location.state
    const book = () => {
        fetch("http://localhost:2000/newjob", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                customerId: JSON.parse(localStorage.getItem('userdata')).id,
                workerId: data._id,
                status: "pending",
                minimumbid: 500,
                time: time,
                location:location,
                description:description
            })
        }).then(res => res.json()).then(data => {
            alert("done")
        }).catch(err => {
            alert("Done")
        })
    }
    return (
        <div>

            <Navbar/>

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex space-between align-center">
                    <h3>
                        Work details
                    </h3>
                    <div style={{cursor:"pointer"}} onClick={closeModal}>
                    close
                    </div>
                </div>
                <div className="" style={{textAlign:"center",padding:"20px"}}>
                    <label className="input-label" style={{margin:"20px"}}>maximum Bid</label><br/>
                    <input className="input-div" value={bid} onChange={e=>setbid(e.target.value)}/><br/><br/>
                    <label className="input-label" >Time</label><br/>
                    <input className="input-div" type="date" onChange={e=>setTime(e.target.value)}/><br/><br/>
                    <label className="input-label">Location</label><br/>
                    <select name="location" id="location" className="sort-button" onChange={e=>setlocation(e.target.value)}>{
                            cities.map(data => {
                                if (data.length < 13) {
                                    return (
                                        <option value={data}>{data}</option>
                                    )
                                }
                            })
                        }
                        </select><br/><br/>
                    <label>
                        Description
                        </label><br/>
                        <textarea className="input-div" onChange={e=>setDescription(e.target.value)}></textarea><br/>
                        <button className="btn search-btn" style={{backgroundColor:"#286EF1",marginTop:"30px"}} onclick={book}>Submit</button>
                </div>
            </Modal>


            <section>
                <header >
                    <h2>Service Details</h2>
                    <button className="primary-btn" onClick={openModal}>Book</button>
                </header>
                <section className="body-content">
                    <img src={avater} alt="" srcset="" className="profile" />
                    <Divider variant="middle" light />
                    <main>

                        <div className="details">
                            <p className="details-head">Name</p>
                            <p>: {data.name}</p>
                        </div>
                        <div className="details">
                            <p className="details-head">Charges</p>
                            <p>: $500/day</p>
                        </div>

                        <div className="details">
                            <p className="details-head">Service</p>
                            <p>: {data.skills.toString(",")}</p>
                        </div>
                        <div className="details">
                            <p className="details-head">Location</p>
                            <p>: {data.location}</p>
                        </div>
                    </main>

                </section>
                <section className="review-section" style={{ marginTop: "50px", marginBottom: "40px" }}>
                    <h2 style={{ marginBottom: "20px" }}>Review and Ratings</h2>
                    {data.ratings.map(datum => {
                        return (
                            <div className="review">
                                <header>
                                    <div>
                                        <img src={avater} alt="" srcset="" className="avatar" />
                                        <p style={{ marginLeft: "20px" }}>{datum.name || "Unknown user"}</p>
                                    </div>
                                    <div>
                                        <Box component="fieldset" borderColor="transparent">
                                            <Rating name="disabled" value={datum.rating} disabled />
                                        </Box>
                                    </div>

                                </header>

                                <div className="feedback">
                                    {datum.comment}
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </div>
    );
}
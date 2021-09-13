import logo from '../../Assets/workerslogo.png';
import avater from '../../Assets/profile.png';
import './Worker.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

export default function FindWorkers(props) {
    console.log(props.history.location.state)
    const data=props.history.location.state
    const book=()=>{
        fetch("http://localhost:2000/newjob",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
               customerId:JSON.parse(localStorage.getItem('userdata')).id,
               workerId:data._id,
               status:"pending",
               minimumbid:500,
               time: new Date(),
               location:data.location,
            })
        }).then(res=>res.json()).then(data=>{
            alert("done")
        }).catch(err=>{
            alert("Something happened")
        })
    }
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" srcset="" width="100px" height="auto"/>
                </div>
                <div >
                    <img src={avater} alt="" srcset="" className="avatar"  style={{marginRight:"5%"}}/>
                </div>
            </nav>

            <section>
                <header >
                    <h2>Service Details</h2>
                    <button className="primary-btn" onClick={book}>Book</button>
                </header>
                <section className="body-content">
                    <img src={avater} alt="" srcset="" className="profile" />
                    <Divider variant="middle" light/>
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
                <section className="review-section" style={{marginTop:"50px",marginBottom:"40px"}}>
                        <h2 style={{marginBottom:"20px"}}>Review and Ratings</h2>
                        {data.ratings.map(datum=>{
                            return(
                                <div className="review">
                                <header>
                                    <div>
                                        <img src={avater} alt="" srcset="" className="avatar" />
                                        <p style={{marginLeft:"20px"}}>{datum.name || "Unknown user"}</p>
                                    </div>
                                    <div>
                                         <Box component="fieldset"  borderColor="transparent">
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
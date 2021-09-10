import logo from '../../Assets/workerslogo.png';
import avater from '../../Assets/profile.png';
import './Worker.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

export default function FindWorkers() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                    <h2>Find workers</h2>
                </div>
                <div >
                    <img src={avater} alt="" srcset="" className="avatar" />
                </div>
            </nav>

            <section>
                <header >
                    <h2>Service Details</h2>
                    <button className="primary-btn">Book</button>
                </header>
                <section className="body-content">
                    <img src={avater} alt="" srcset="" className="profile" />
                    <Divider variant="middle" light/>
                    <main>
                     
                            <div className="details">
                                <p className="details-head">Name</p>
                                <p>: NaveenKumar M</p>
                            </div>
                            <div className="details">
                                <p className="details-head">Charges</p>
                                <p>: $500/day</p>
                            </div>

                        <div className="details">
                            <p className="details-head">Service</p>
                            <p>: Plumbing</p>
                        </div>
                        <div className="details">
                            <p className="details-head">Location</p>
                            <p>: Coimbatore</p>
                        </div>
                    </main>
                    
                </section>
                <section className="review-section">
                        <h2>Review and Ratings</h2>
                        
                        <div className="review">
                            <header>
                                <div>
                                    <img src={avater} alt="" srcset="" className="avatar" />
                                    <p>Loganathan D</p>
                                </div>
                                <div>
                                     <Box component="fieldset"  borderColor="transparent">
                                         <Rating name="disabled" value={5} disabled />
                                     </Box>
                                </div>
                         
                            </header>
                           
                          <div className="feedback">
                            A nice and kind worker who completed everything in a quick manner
                          </div>
                        </div>
                    
                       
                        <div className="review">
                            <header>
                                <div>
                                    <img src={avater} alt="" srcset="" className="avatar" />
                                    <p>Loganathan D</p>
                                </div>
                                <div>
                                     <Box component="fieldset"  borderColor="transparent">
                                         <Rating name="disabled" value={5} disabled />
                                     </Box>
                                </div>
                         
                            </header>
                           
                          <div className="feedback">
                            A nice and kind worker who completed everything in a quick manner
                          </div>
                        </div>
                    </section>
            </section>
        </div>
    );
}
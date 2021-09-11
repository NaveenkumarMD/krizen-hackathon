import React, { useEffect ,useState} from 'react'
import Navbar from '../../Components/navbar'
import searchicon from '../../Assets/search.svg'
import work from '../../Assets/jobsdata'
function Addskills() {
    const [search,setsearch]=useState("")
    const [results,setresults]=useState(0)
    useEffect(() => {
        var count=0
        work.map((data)=>{
            if(data.indexOf(search)>-1){
                count+=1
            }
        })
        setresults(count)
    }, [search])
    return (
        <div>
            <Navbar />
            <div className="searchworkers-container">
                <h1>Add skills</h1>
                <p>Seach for a skill and add it to your profile</p>
                <div className="search-container" style={{ paddingBottom: "50px" }}>
                    <div className="search-row">
                        <div className="search-row-container">
                            <img src={searchicon} alt="search" width="25px" height="25px" />
                            <input placeholder="Search for the skills.. " onChange={e=>setsearch(e.target.value)}/>
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
                <p style={{ marginTop: "8%" }}>{results} matches found</p>
                <div className="search-container">
                    {
                        work.map((data) => {
                            if(data.indexOf(search)>-1){
                            return (
                                <div className="search-result" >
                                    <div className="search-result-name">
                                        <div className="search-profile"></div>
                                        <div className="profile-name-container">
                                            <div>{data}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn search-button">Add</button>
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

export default Addskills

import React from 'react'
import profile from '../Assets/profile.png'
import '../Styles/navbar.css'
import logo from '../Assets/site-logo.png'
import {Link,useHistory} from 'react-router-dom'
function Navbar() {
    const history=useHistory()
    return (
        <div className="navbar">
            <div className="site-logo">
               <img src={logo} alt="v" width="100px" height="auto"/>
            </div>

            <div className="menu" style={{display:"flex",alignItems:"center"}}>
                <img src={profile} alt="profile"  width="35px"/>
                <div onClick={()=>{
                    localStorage.clear()
                    history.push("/")
            }} style={{cursor:"pointer"}}>Logout</div>
            </div>
        </div>
    )
}

export default Navbar

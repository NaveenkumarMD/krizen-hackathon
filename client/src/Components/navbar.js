import React from 'react'
import profile from '../Assets/profile.png'
import '../Styles/navbar.css'
import logo from '../Assets/site-logo.png'
function Navbar() {
    return (
        <div className="navbar">
            <div className="site-logo">
               <img src={logo} alt="v"width="100px" height="auto"/>
            </div>
            <div className="menu">
                <img src={profile} alt="profile"  width="35px"/>
            </div>
        </div>
    )
}

export default Navbar

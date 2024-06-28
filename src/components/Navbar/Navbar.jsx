import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} className="icons" alt="" />
            <p>Children</p>
            <img src={bell_icon} alt="" className="icons" />
            <div className="navbar-profile">
                <img src={profile_img} alt="" className="profile"/>
                <img style={{width: "12px"}} src={caret_icon} alt="" className="profile" />
                <div className="dropdown"><p>Sign out of Netflix</p></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import Logo from '../../Assets/Aarohna.png'
const DesktopNav = () => {
  return (
    <>
        <div className='nav-elements'>
        <img src={Logo} alt="Antara" className='logo' />
        <nav className="nav-bar">
            <ul className="nav-unod-list">
                <li className="nav-list"><Link to={''} className="nav-link"> Home </Link></li>
                <li className="nav-list"><Link to={''} className="nav-link"> Events </Link></li>
                <li className="nav-list"><Link to={''} className="nav-link"> Timeline </Link></li>
                <li className="nav-list"><Link to={''} className="nav-link"> FAQs </Link></li>
                <li className="nav-list"><Link to={''} className="nav-link"> Contacts </Link></li>
            </ul>
        </nav>
        </div>
    </>


  )
}

export default DesktopNav
import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import Logo from '../../Assets/Aarohna.png'
const DesktopNav = () => {

  const linkStyle = "mx-5 inline-block no-underline text-2xl font-bold text-white transition-all duration-500 hover:bg-white hover:text-blue-500 hover:px-2 hover:rounded-lg";

  return (
    <>
        <div className='flex justify-between items-center h-24 bg-black p-8 z-10'>
        <img src={Logo} alt="Antara" className=' z-10 pt-5 w-72 h-96' />
        <nav className="nav-bar">
            <ul className="flex text-blue-500">
                <Link to={''} className={linkStyle}> Home </Link>
                <Link to={''} className={linkStyle}> Events </Link>
                <Link to={''} className={linkStyle}> Timeline </Link>
                <Link to={''} className={linkStyle}> FAQs </Link>
                <Link to={''} className={linkStyle}> Contacts </Link>
            </ul>
        </nav>
        </div>
    </>

  )
}

export default DesktopNav
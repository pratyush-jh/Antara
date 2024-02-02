import React from 'react'
import DesktopNav from '../Components/Navbar/DesktopNav'
import MobileNav from '../Components/Navbar/MobileNav'
import './Navbar.css'
import { useEffect , useState} from 'react'

const Navbar = () => {


     const [width, setWidth] = useState(window.innerWidth);
     const breakpoint = 620;
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);

  return (
     <>

     {width < breakpoint ? <MobileNav /> : <DesktopNav />}
          
     </>
  )
}

export default Navbar
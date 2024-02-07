import React from 'react'
import DesktopNav from '../Components/Navbar/DesktopNav'
import MobileNav from '../Components/Navbar/MobileNav'
import { useEffect , useState} from 'react'

const NavbarPage = () => {


     const [width, setWidth] = useState(window.innerWidth);
     const breakpoint = 620;
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);
   //   * Function to check if the user have a valid token or not and navigate to the login page if the token is not present
  return (
     <>

     {width < breakpoint ? <MobileNav /> : <DesktopNav />}
          
     </>
  )
}

export default NavbarPage
import React from 'react'
import DesktopNav from '../Components/Navbar/DesktopNav'
import MobileNav from '../Components/Navbar/MobileNav'
import { useEffect , useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Modal from 'react-modal'
import { API_URL } from '../Functions/Constants'
import axios from 'axios'

const NavbarPage = () => {
      const navigate = useNavigate();
      const [alertMessage, setAlertMessage] = useState(null); 
      const [width, setWidth] = useState(window.innerWidth);
      const [user , setUser] = useState([]);

     const breakpoint = 620;
    //* Function to switch between mobile and desktop view
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);

    //! Function to check the validation of the token and get the user data

    const authUser = async () => {
      const token = localStorage.getItem('token');
      if(token){
        try{
          const response = await axios.get(`${API_URL}/auth-user`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          setUser(response.data.data);
        }
        catch(error){
          console.log('Error:', error);
          if (error.response && ( error.response.status == 401)) {
              alert('Login Again to continue');
              localStorage.removeItem('token');
              navigate('/login');
          }
        }
      }
    }

    //* Function to show congratulation message if the user is login first time after Admin verification
     useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
      authUser();
      const congratulationsShown = localStorage.getItem('congratulations-shown');
      if(congratulationsShown == 0 && user?.is_verified === true ){
            showAlert('🎉 Congratulations! Your account has been verified. 🎉');
            localStorage.setItem('congratulations-shown', 1);
       }
      }
     }, [navigate]);     


  return (
     <>
     <Modal isOpen={!!alertMessage} onRequestClose={() => setAlertMessage(null)}
       className={`
       absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skin p-8 rounded-lg flex flex-col items-center gap-2` }
      >
        <p className=''>{alertMessage}</p>
        <p>🎉 You can now participate in the events.🎉 </p>
      <Link to ={'/events'}>
      <button className='bg-brown text-white p-2 rounded-lg mt-4 w-20 '
         onClick={() => setAlertMessage(null)}>Close</button>
      </Link>
      </Modal>

     {width < breakpoint ? <MobileNav /> : <DesktopNav />}
          
     </>
  )
}

export default NavbarPage
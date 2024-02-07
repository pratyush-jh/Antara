import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from './Constants';
import axios from 'axios'; // Import axios

const Api = () => {
  const navigate = useNavigate();

  const authUser = async () => {
    // * Function to check if the user is verified or not 
    const token = localStorage.getItem('token');

    if(!token){
      navigate('/login');
    }
    try{
      const response = await axios.get(`${API_URL}/auth-user`, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = response.data;
      if (response.status === 401) {
        navigate('/login');
      }
      return data;
    }
    catch(error){
      console.error('Error:', error);
    }
  }
  return (
    {authUser}
  )
}

export default Api
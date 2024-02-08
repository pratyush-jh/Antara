import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from './Constants';
import axios from 'axios'; 

const Api = () => {
  const navigate = useNavigate();

  //* Function to check if the user is verified or not and if the token is valid or not
  const authUser = async () => {
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

  const fetchApi = (method, path, ) =>{
    const token = localStorage.getItem('token');
    try {
      const response = axios({
        method: method,
        url: `${API_URL}/${path}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      return response;
  }
  catch(error){
    console.error('Error:', error);
    return response;
  }
}



  return (
    {authUser , fetchApi}
  )
}

export default Api
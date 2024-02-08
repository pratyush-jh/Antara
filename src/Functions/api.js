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

  const fetchApi = async(method, path, ) =>{
    const token = localStorage.getItem('token');
    try {
      const response = await axios({
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

const login = async(values) => {
        try {
          const response = await fetch( `${API_URL}/login` , {
              method: 'POST',
              headers: {
                    'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
          });
          const data = await response.json();     
          if (response.status === 200) {
              localStorage.setItem('token', data.access_token);
              authUser().then((data) => {  
                    if(data.data.email_verified_at == null){
                        navigate('/verify');
                    }
              })
              if (!localStorage.getItem('congratulations-shown')) {
                    localStorage.setItem('congratulations-shown', 0);
              }
              navigate('/');
          } else {
              alert('Wrong Credentials! Please try again.');
              console.log('Login failed');
          }
      } catch (error) {
          if (error){
              alert('Something went wrong! Please try again.');
          }
          console.error('Error:', error);
      }
}


  return (
    {authUser , fetchApi , login} 
  )
}

export default Api
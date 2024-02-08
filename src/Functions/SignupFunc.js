import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from './Constants';

const SignupFunc = () => {
     const navigate = useNavigate();
     const [isLoading, setIsLoading] = useState(false);
     const initialValues = {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',

     };

     const validationSchema = Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
               .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
                    'Must contain 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character'
               )
               .required('Required'),
          password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
     });
     const onSubmit = async (values) => {
          setIsLoading(true);
               const formData = new FormData();
               for (const key in values) {
               formData.append(key, values[key]);
               }
          try {
            const response = await axios.post(`${API_URL}/register`, formData , {
                 headers: {
                       'Content-Type': ' multipart/form-data',
                     }
                     , method: 'POST'
               }
            ); 
            const data = await response.data;
          if (response.status == 200) {
              localStorage.setItem('token', data.access_token);
              navigate(`/thanks`);
            } else {

              alert("Signup failed! Please try again.");
              console.log('Signup failed');
            }
          } catch (error) {
               if(error.response.status == 422){
                    alert("Email already exists.");   
                    setIsLoading(false);
                    return
               }
            console.error('Error:', error.response.data.ErrorMessage);
          }
        };
  return (
    { initialValues, validationSchema, onSubmit , isLoading}
  )
}

export default SignupFunc
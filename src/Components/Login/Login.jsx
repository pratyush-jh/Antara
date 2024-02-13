import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import Api from '../../Functions/api';
import './Login.css'
import Profile from '../../assets/userProfile.png'
const Login = ({path}) => {

     const navigate = useNavigate();
     const {login , isLoading} = Api();

     useEffect(() => {
          const checkAndNavigate = async () => {
               const token = localStorage.getItem('token');
               if (token) {
                    navigate('/');
               }
          };
          checkAndNavigate();
     }, [navigate]);

     const initialValues = {
          email: '',
          password: '',
     };

     const validationSchema = Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
     });

     const onSubmit = async (values) => {
          login(values);
     };
     const handleAutofill = (e) => {
          e.preventDefault();
          const email = e.target.elements.email.value;
          const password = e.target.elements.password.value;
          const values = {
               email,
               password,
          };
          onSubmit(values);
     };

     return (
          <div className={`${isLoading? 'opacity-40': 'opacity-100'}`} >
               <div className="container-login100" >
                    <div className="wrap-login100">
                         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                              <Form className="login100-form validate-form" onSubmit={handleAutofill}>
                                   <span className="login100-form-logo">
                                         <img src={Profile} alt="" />
                                   </span>
                                   <span className="login100-form-title">
                                        Log in
                                   </span>
                                   <div className="wrap-input100 validate-input" data-validate = "Enter username">
                                        <Field type="email" name="email" className="input100 text-white placeholder:text-white " placeholder="Email"  />
                                        <span className='focus-input100' data="❖"></span>
                                   </div>
                                   <div className="wrap-input100 validate-input" data-validate="Enter password">
                                        <Field type="password" name="password" className="input100 placeholder:text-white" placeholder="Password" />
                                        <span className="focus-input100" data="❖"></span>
                                   </div>
                                   <div className="container-login100-form-btn">
                                        <button type="submit" className="login100-form-btn" disabled={isLoading}>
                                             Login
                                        </button>
                                   </div>
                                   <div className="text-center">
                                        <Link to="/registration" className="txt1">
                                             Don't Have an account? <p className=' text-white font-medium'> Singup</p> 
                                        </Link>
                                   </div>
                              </Form>
                         </Formik>
                    </div>
               </div>
          </div>
     );
};

     
export default Login;
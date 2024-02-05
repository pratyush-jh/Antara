import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { API_URL, checkToken } from '../../Functions/ApiCall';




const Login = ({path}) => {
     const navigate = useNavigate();

     useEffect(() => {
          const checkAndNavigate = async () => {
               const result = await checkToken();
               console.log("the current state is " + result);
               if (!result) {
                 navigate('/login');
               } else {
                 navigate('/events');
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
          try {
               const response = await fetch( `${API_URL}/${path}` , {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
               });

               const data = await response.json();
               console.log(data);
               if (response.status === 200) {
                    console.log('Login success');
                    localStorage.setItem('token', data.token);
                    navigate('/events');

               } else {
                    alert('Wrong Credentials! Please try again.');
                    console.log('Login failed');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
               <div className="w-96 h-96 bg-white p-5 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                         <Form className="mt-5">
                              <div className="mb-5">
                                   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                                   <Field type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   <ErrorMessage name="email" component="div" />
                              </div>
                              <div className="mb-5">
                                   <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                   <Field type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   <ErrorMessage name="password" component="div" />
                              </div>
                              <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-md focus:outline-none">Login</button>
                         </Form>
                    </Formik>
               </div>
          </div>
     );
};

export default Login;
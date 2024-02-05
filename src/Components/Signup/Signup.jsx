import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../Functions/Constants';

const Signup = () => {
     const navigate = useNavigate();

     const initialValues = {
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
     };

     const validationSchema = Yup.object({
          userName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
     });

     const onSubmit = async (values) => {
          try {
               const response = await fetch(`${API_URL}/signup-antara`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
               });

               const data = await response.json();
               console.log(data);
               if (response.status === 400) {
                    alert('User already exists! Please login.');
               }
               else if (response.status === 200) {
                    console.log('Signup success');
                    localStorage.setItem('token', data.token);
                    navigate(`/events`);
               } else {
                    alert("Signup failed! Please try again.");
                    console.log('Signup failed');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <div className="flex justify-center items-center h-full p-10 bg-gray-100">
               <div className="w-96 h-full bg-white p-5 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Signup</h1>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                         <Form className="mt-5">
                              <div className="mb-5">
                                   <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                                   <Field type="text" id="userName" name="userName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   <ErrorMessage name="userName" component="div" />
                              </div>
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
                              <div className="mb-5">
                                   <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
                                   <Field type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   <ErrorMessage name="confirmPassword" component="div" />
                              </div>
                              <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-md focus:outline-none">Signup</button>
                         </Form>
                    </Formik>
               </div>
          </div>
     );
};

export default Signup;
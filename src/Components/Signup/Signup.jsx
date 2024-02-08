import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate , Link} from 'react-router-dom';
import SignupFunc from '../../Functions/SignupFunc';
const Signup = () => {

     const { initialValues, validationSchema, onSubmit, isLoading } = SignupFunc();
     const navigate = useNavigate();
     useEffect(() => {
          const checkAndNavigate = async () => {
               const token = localStorage.getItem('token');
               if (token) {
                    navigate('/');
               }
          };
          checkAndNavigate();
     }, [navigate]);
 
     return (
          <>
    
               <div className={`flex justify-center items-center h-full p-10 bg-gray-100 ${isLoading ? 'opacity-10': `opacity-100`}`}>
                    <div className="w-96 h-full bg-white p-5 rounded-lg shadow-lg">
                         <h1 className="text-3xl font-bold text-center text-gray-800">Signup</h1>
                         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                              <Form className="mt-5">
                                   <div className="mb-5">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                                        <Field type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" autoComplete="name" />
                                        <ErrorMessage name="name" component="div" />
                                   </div>
                                   <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                                        <Field type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" autoComplete="email" />
                                        <ErrorMessage name="email" component="div" />
                                   </div>
                                   <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                        <Field type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" autoComplete="new-password" />
                                        <ErrorMessage name="password" component="div" />
                                   </div>
                                   <div className="mb-5">
                                        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
                                        <Field type="password" id="password_confirmation" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" autoComplete ="new-password"/>
                                        <ErrorMessage name="password_confirmation" component="div" />
                                   </div>
                                   {/* * input field to upload screen shot */}
                                   {/* <div className="mb-5">
                                        <label htmlFor="screenshot" className="block mb-2 text-sm font-medium text-gray-600">Upload Screenshot</label>
                                        <input type="file" id="screenshot" name="screenshot" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   </div> */}
                                   <Link to={'/tutorial'} className=" text-darkBlue w-full text-center " target='_blank' 
                                    >How to do this task?</Link>
                                   <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-md focus:outline-none">Signup</button>
                              </Form>
                         </Formik>
                    </div>
               </div> 

          </>
     );
};

export default Signup;
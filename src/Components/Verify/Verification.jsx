import React from 'react';
import { useEffect , useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate , useParams} from 'react-router-dom';
import { API_URL } from '../../Functions/Constants';
import ApiCall from '../../Functions/ApiCall';

const Verification = () => {
     const navigate = useNavigate();
     const { checkToken, tokenData, isToken ,tokenUserData} = ApiCall();
     const [user , setUser] = useState(null);
     useEffect(() => {
          const checkAndNavigate = async () => {
               const Token  = await tokenData();
               console.log("the current state is " + isToken);
               if (!Token) {
                    navigate('/login');
               } 
               else{
                    setUser(tokenUserData.userId);
               }
          };
          checkAndNavigate();
     }, [navigate]);

     const sendOTP = async () => {
          try {
               const response = await fetch(`${API_URL}/send-otp`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user}),
               });

               const data = await response.json();
               console.log(data);
               if (response.status === 200) {
                    console.log('OTP sent');
               } else {
                    alert('OTP sending failed! Please try again.');
                    console.log('OTP sending failed');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     // Function to send the OTP to the server
     console.log(user);

     const initialValues = {
          otp: '',
     };

     const validationSchema = Yup.object({
          otp: Yup.string().required('Required'),
     });

     const onSubmit = async (values) => {
          try {
               const response = await fetch(`${API_URL}/verify`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({values , user}),
               });

               const data = await response.json();
               console.log(data);
               if (response.status === 200) {
                    console.log('Verification success');
                    navigate('/login');
               } else {
                    alert('Verification failed! Please try again.');
                    console.log('Verification failed');
               }
          } catch (error) {
               console.error('Error:', error);
          }
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
               <div className="w-96 h-96 bg-white p-5 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Verification</h1>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                         <Form className="mt-5">
                              <div className="mb-5">
                                   <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-600">Please verify Your account</label>
                                   <Field type="text" id="otp" name="otp" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                                   <ErrorMessage name="otp" component="div" />
                              </div>
                              <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-md focus:outline-none">Verify</button>
                         </Form>
                    </Formik>
               </div>
          </div>
     );
};

export default Verification;
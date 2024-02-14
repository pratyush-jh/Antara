import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../Functions/api';
import './RegisterForm.css';
const RegistrationForm = () => {
     // * Check if the user's Email is verified or not
     const { authUser } = Api();
     const navigate = useNavigate();
     const [user , setUser] = useState([]);
     useEffect(() => {
          const token = localStorage.getItem('token');
          if(token){
            authUser().then((data) => {
                    if(data.email_verified_at == null){
                         navigate('/verify');
                    }
            })
          }
        }, [navigate]);
        if(user.length === 0){
          return (
            <div>
              <h1>Loading...</h1>
            </div>
          )
        }
     const { teamSize } = useParams();

     const initialValues = {};
     const validationSchema = {};

     for (let i = 0; i < parseInt(teamSize); i++) {
          initialValues[`player${i + 1}Name`] = '';
          initialValues[`player${i + 1}PhoneNumber`] = '';
          initialValues[`player${i + 1}CollegeId`] = '';

          validationSchema[`player${i + 1}Name`] = Yup.string().required('Required');
          validationSchema[`player${i + 1}PhoneNumber`] = Yup.string().required('Required');
          validationSchema[`player${i + 1}CollegeId`] = Yup.string().required('Required');
     }

     return (
          <Formik
               initialValues={initialValues}
               validationSchema={Yup.object(validationSchema)}
               onSubmit={(values) => {
                    console.log(values);
               }}
          >
               {({ errors, touched }) => (
                    <Form className="space-y-4">
                         {Array.from({ length: parseInt(teamSize) }).map((_, i) => (
                              <div key={i} className="space-y-2">
                                   <label htmlFor={`player${i + 1}Name`} className="block">Name:</label>
                                   <Field name={`player${i + 1}Name`} type="text" className="block w-full p-2 border border-gray-300 rounded" />
                                   {errors[`player${i + 1}Name`] && touched[`player${i + 1}Name`] ? <div className="text-red-500">{errors[`player${i + 1}Name`]}</div> : null}

                                   <label htmlFor={`player${i + 1}PhoneNumber`} className="block">Phone Number:</label>
                                   <Field name={`player${i + 1}PhoneNumber`} type="tel" className="block w-full p-2 border border-gray-300 rounded" />
                                   {errors[`player${i + 1}PhoneNumber`] && touched[`player${i + 1}PhoneNumber`] ? <div className="text-red-500">{errors[`player${i + 1}PhoneNumber`]}</div> : null}

                                   <label htmlFor={`player${i + 1}CollegeId`} className="block">College ID:</label>
                                   <Field name={`player${i + 1}CollegeId`} type="text" className="block w-full p-2 border border-gray-300 rounded" />
                                   {errors[`player${i + 1}CollegeId`] && touched[`player${i + 1}CollegeId`] ? <div className="text-red-500">{errors[`player${i + 1}CollegeId`]}</div> : null}
                              </div>
                         ))}
                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                    </Form>
               )}
          </Formik>
     );
};

export default RegistrationForm;
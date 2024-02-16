import React from 'react'
import { useState } from 'react';
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../../Functions/api';
import axios from 'axios';
import { API_URL } from '../../Functions/Constants';
import { useNavigate } from 'react-router-dom';
const PaidPart = ({event}) => {
     const { date, description, start_at, ends_at, rounds, paid_event, minimum_size , society , tag_line, title,  upi_id, venue , image_url, individual_fee, team_fee, maximum_size, id } = event;
     const navigate = useNavigate();
     const [buttonSelected, setButtonSelected] = useState("Solo");

     const initialValue = {
          team_name: '',
          team_size: '',
          team_code: '',
          competition_id : id,
     };
     const initialValueMaxSize = {
          team_code: '',
          competition_id : id,
     };
     const validationSchema = Yup.object({
          team_name: Yup.string().required('Required'),
          team_size: Yup.number().required('Required').min(minimum_size, `Must be at least ${minimum_size} `).max(maximum_size, `Must be at most ${maximum_size}`),
          // screenShot: Yup.mixed().required('A screenshot is required'),
     });
     
     const validationSchemaTeam = Yup.object({
          // screenShot: Yup.mixed().required('A screenshot is required'),
     });

     const {fetchApi} = Api();
     const onSubmit = (values) => {
          const token = localStorage.getItem('token');
          const formData = new FormData();
          for (const key in values) {
              if (key === 'screenshot' && values[key]) {
                  formData.append(key, values[key], values[key].name);
              } else {
                  formData.append(key, values[key]);
              }
          }
          try {
               const response =    axios.post(`${API_URL}/api/participations`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                });
               if (response.status === 200 || response.status === 204) {
                    alert("Participation Successfull");
                    navigate(`/dashboard`);
               } else {
                    alert("Participation failed! Please try again.");
               }
          }
          catch (error) {
               alert("Participation failed! Please try again.");
          }
     };

     const onSubmitTeam = async (values) => {
          const token = localStorage.getItem('token');
          const formData = new FormData();
          for (const key in values) {
               formData.append(key, values[key]);
          }
          try {
               const response =    axios.post(`${API_URL}/api/participations`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                });
               if (response.status === 200 || response.status === 204) {
                    alert("Congratulations! You have successfully joined the team.");
                    navigate(`/dashboard`);
               } else {
                    alert("Participation failed! Please try again.");
               }
          }
          catch (error) {
               alert("Participation failed! Please try again.");
          }

     };


  return (
    <div>

                              
          <div className=" flex gap-10 justify-center mb-10 mt-5">
          <button onClick={() => setButtonSelected("Solo")} className={`text-lg font-semibold ${buttonSelected === "Solo" ? "bg-gray-800 text-white" : "text-gray-500"} pt-2 pb-2 pl-4 pr-4 rounded-lg`}>
               {
               maximum_size > 1 ? "Create Team" : "Solo"
               }
          </button>
          {
          maximum_size > 1 ? (
               <button  onClick={() => setButtonSelected("Team")} className={`text-lg font-semibold ${buttonSelected === "Team" ? "bg-gray-800 text-white" : "text-gray-500"} pt-2 pb-2 pl-4 pr-4 rounded-lg`}>
               Join Team
               </button> ) : null
          }
          </div>
          { buttonSelected === "Solo" ?
               <Formik   
               initialValues={ maximum_size > 1 ? initialValue : initialValueMaxSize}
               onSubmit={ maximum_size > 1 ? onSubmit : onSubmitTeam}
               validationSchema={ maximum_size > 1 ? validationSchema : validationSchemaTeam}
               >
               {({isValid , values, setFieldValue}) => (
               <Form>
                    <div className=" flex flex-col gap-4 items-center">
                    {maximum_size > 1 && (
                    <>
                         <Field 
                         type="text" 
                         id="team_name" 
                         placeholder="Team Name" 
                         name="team_name" 
                         className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" 
                         />
                         <ErrorMessage name="team_name" />
                         <Field 
                         type="number" 
                         id="team_size" 
                         placeholder="Team Size" 
                         name="team_size" 
                         className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" 
                         max={maximum_size}
                         min={minimum_size}
                         />
                         <ErrorMessage name="team_size" />
                    </>
                    )}
                         <p>
                              This event is a paid event.
                         </p>
                         <p>
                              The fee for this event is {
                                   team_fee == null ? `Rs. ${individual_fee* 
                                   (maximum_size > 1 ? minimum_size : 1)}` : `Rs. ${team_fee} `
                              } for whole team.
                         </p>
                         <div>
                         <input
                              id="screenshot"
                              name="screenshot"
                              type="file"
                              required
                              onChange={(event) => {
                              setFieldValue("screenshot", event.currentTarget.files[0]);
                              setFieldValue(
                              "screenshotPreview",
                              URL.createObjectURL(event.currentTarget.files[0])
                              );
                              }}
                              className=" placeholder:text-white bg-black hidden "
                              accept="image/*"
                         />
                         <label htmlFor="screenshot" className="file-label1">
                              {values.screenshot ? values.screenshot.name : "Upload Screenshot"}
                         </label>
                         </div>
  
                         <p>
                              Upload a screenshot of the payment
                         </p>

                         <button type="submit" disabled={!isValid} className={`bg-gray-800 text-white p-2 rounded-lg
                         ${
                              isValid ? 'cursor-pointer' : 'cursor-not-allowed'
                         }`}>Submit</button>
                    </div>
                    
               </Form>
               )}
          </Formik>
          :
          <Formik
          initialValues = {{
               team_code: '',
               competition_id: id
          }}
          onSubmit= {onSubmitTeam}
          validationSchema={Yup.object({
               team_code: Yup.string().required('Required'),
          })}
          >
          {({isValid, values}) => (
          <Form>
               <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex flex-col gap-5 items-center justify-center">
                         <Field name="team_code" type="text" placeholder="Team Code" className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" />
                    </div>
                    <div>
                    <ErrorMessage name="team_code" component="div" /> 
                    </div>

                    <button type="submit" className={`bg-gray-800 text-white p-2 rounded-lg
                         ${
                              isValid ? 'cursor-pointer' : 'cursor-not-allowed'
                         }`} disabled = {!isValid} >
                         Submit
                    </button>
                         
                    
               </div>
          </Form>
          )}
     </Formik>
          }
    </div>
  )
}

export default PaidPart
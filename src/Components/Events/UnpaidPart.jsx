import React from 'react'
import { useState } from 'react';
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../../Functions/api';
import axios from 'axios';
import { API_URL } from '../../Functions/Constants';

const UnpaidPart = ({event}) => {
  const { date, description, start_at, ends_at, rounds, paid_event, minimum_size , society , tag_line, title,  upi_id, venue , image_url, individual_fee, team_fee, maximum_size, id } = event;

const [buttonSelected, setButtonSelected] = useState("Solo");

const initialValue = {
  teamName: '',
  numberOfMembers: '',
  teamCode: null,
  competition_id : id,
};
const initialValueMaxSize = {
  teamCode: 'null',
  competition_id : id,
};
const validationSchema = Yup.object({
  teamName: Yup.string().required('Required'),
  numberOfMembers: Yup.number().required('Required').min(minimum_size, `Must be at least ${minimum_size} `).max(maximum_size, `Must be at most ${maximum_size}`),
});

const validationSchemaTeam = Yup.object({});

const {fetchApi} = Api();
const onSubmit = async (values) => {
  const response = await fetchApi(`participations/${id}/individual`, {
    method: 'POST',
    body: JSON.stringify(values),
  });
  const data = await response.json();
  if (response.status === 200) {
    alert("Participation Successfull");
  } else {
    alert("Participation failed! Please try again.");
  }
};

const onSubmitTeam = async (values) => {
  const response = await fetchApi(`participations/${event.id}/team`, {
    method: 'POST',
    body: JSON.stringify(values),
  });
  const data = await response.json();
  if (response.status === 200) {
    alert("Congratulations! You have successfully joined the team.");
  } else {
    alert("Participation failed! Please try again.");
  }
};

return (
  <div>
    <div className=" flex gap-20 justify-center mb-10 mt-5">
      <button onClick={() => setButtonSelected("Solo")} className={`text-lg font-semibold ${buttonSelected === "Solo" ? "bg-gray-800 text-white" : "text-gray-500"} pt-2 pb-2 pl-4 pr-4 rounded-lg`}>
        Solo
      </button>
      {
        maximum_size > 1 ? (
          <button  onClick={() => setButtonSelected("Team")} className={`text-lg font-semibold ${buttonSelected === "Team" ? "bg-gray-800 text-white" : "text-gray-500"} pt-2 pb-2 pl-4 pr-4 rounded-lg`}>
            Team
          </button> ) : null
      }
    </div>
    { buttonSelected === "Solo" ?
      <Formik   
        initialValues={ maximum_size > 1 ? initialValue : initialValueMaxSize}
        onSubmit={ maximum_size > 1 ? onSubmit : onSubmitTeam}
        validationSchema={ maximum_size > 1 ? validationSchema : validationSchemaTeam}
      >
        {({isValid , values}) => (
          <Form>
            <div className=" flex flex-col gap-4 items-center">
              {maximum_size > 1 && (
                <>
                  <Field 
                    type="text" 
                    id="teamName" 
                    placeholder="Team Name" 
                    name="teamName" 
                    className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" 
                  />
                  <ErrorMessage name="teamName" />
                  <Field 
                    type="number" 
                    id="numberOfMembers" 
                    placeholder="Members" 
                    name="numberOfMembers" 
                    className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" 
                    max={maximum_size}
                    min={minimum_size}
                  />
                  <ErrorMessage name="numberOfMembers" />
                </>
              )}
              <button type="submit" disabled={!isValid} className={`bg-gray-800 text-white p-2 rounded-lg
                ${
                  isValid ? 'cursor-pointer' : 'cursor-not-allowed'
                }`}>Register</button>
            </div>
          </Form>
        )}
      </Formik>
      :
      <Formik
        initialValues = {{
          teamCode: '',
          competition_id: id
        }}
        onSubmit= {onSubmitTeam}
        validationSchema={Yup.object({
          teamCode: Yup.string().required('Required'),
        })}
      >
        {({isValid, values}) => (
          <Form>
            <div className="flex flex-col gap-10 items-center justify-center">
              <div className="flex flex-col gap-5 items-center justify-center">
                <Field name="teamName" type="text" placeholder="Team Code" className="w-72 h-12 bg-slate-700 border-2 border-gray-800 rounded-md p-4 placeholder:text-white text-white" />
              </div>
              <div>
                <ErrorMessage name="teamName" component="div" />
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


export default UnpaidPart
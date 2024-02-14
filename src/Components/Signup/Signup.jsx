import React, { useEffect,useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import Profile from '../../assets/userProfile.png';
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from '../../Functions/Constants';


const Signup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        screenshot: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
                'Weak Password'
            )
            .required('Required'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        screenshot: Yup.mixed().required('A screenshot is required'),
    });

    const onSubmit = async (values) => {
        setIsLoading(true);
        const formData = new FormData();
        for (const key in values) {
            if (key === 'screenshot' && values[key]) {
                formData.append(key, values[key], values[key].name);
            } else {
                formData.append(key, values[key]);
            }
        }
        try {
            const response = await axios.post(`${API_URL}/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            const data = response.data;
            if (response.status === 200) {
                setIsLoading(false);
                localStorage.setItem('token', data?.access_token);
                navigate(`/thanks`);
            } else {
                setIsLoading(false);
                alert("Signup failed! Please try again.");
                console.log('Signup failed');
            }
        } catch (error) {
            setIsLoading(false);
            if (error?.response.status === 422) {
                alert("Email already exists.");
            }
            console.error('Error:', error.response.data.ErrorMessage);
        }
    };

    useEffect(() => {
        const checkAndNavigate = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                navigate('/');
            }
        };
        checkAndNavigate();
    }, [navigate]);

    const handleAutofill = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const password_confirmation = e.target.elements.password_confirmation.value;
        const selectedFile = e.target.elements.screenshot.files[0]; // Get the uploaded file
        const values = {
            name,
            email,
            password,
            password_confirmation,
            screenshot: selectedFile, // Add the selected file to the form data
        };
        onSubmit(values);
    };

    return (
        <div className={`${isLoading ? 'opacity-40' : 'opacity-100'} `}>
            <div className="container-login100 min-h-screen mt-2 ">
                <div className="wrap-login100 ">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
               {({ values, errors }) => (
                        <Form className="login100-form validate-form" onSubmit={handleAutofill}>
                            <span className="login100-form-logo">
                                <img src={Profile} alt="" />
                            </span>
                            <span className="login100-form-title">Signup</span>
                            <div className="wrap-input100 validate-input" data-validate="Enter username">
                              <Field type="text" name="name" className="input100 text-white placeholder:text-white" placeholder="Username" />
                              <span className="focus-input100" data="&#xf207;"></span>
                              </div>
                              <ErrorMessage name="name" component="div" className="error-message"/>
                              <div className="wrap-input100 validate-input" data-validate="Enter email">
                                   <Field type="email" name="email" className="input100 placeholder:text-white" placeholder="Email" />
                                   <span className="focus-input100" data="&#xf15a;"></span>
                              </div>
                              <ErrorMessage name="email" component="div" className="error-message" />
                              <div className="wrap-input100 validate-input" data-validate="Enter password">
                              <Field type="password" name="password" className="input100 placeholder:text-white" placeholder="Password" />
                              <span className="focus-input100" data="&#xf191;"></span>
                              </div>
                              <ErrorMessage name="password" component="div" className="error-message" />
                              <div className="wrap-input100 validate-input" data-validate="Confirm password">
                              <Field type="password" name="password_confirmation" className="input100 placeholder:text-white" placeholder="Confirm Password" />
                              <span className="focus-input100" data="&#xf191;"></span>
                              </div>
                              <ErrorMessage name="password_confirmation" component="div" className="error-message" />
                              <div className="validate-input">
                            <Field name="screenshot" type="file" className="input100 placeholder:text-white file-input" accept="image/*" id="screenshot" />
                            <label htmlFor="screenshot" className="file-label">
                                {values.screenshot ? values.screenshot.split('\\').pop() : 'Upload Screenshot'}
                            </label>
                        </div>
                            <ErrorMessage name="screenshot" component="div" className="error-message" />
                              <div className="text-center">
                                <Link to="tutorial" className="txt1" > How to do this task?</Link>
                            </div>
                            <div className="container-login100-form-btn">
                                <button type="submit" className={`login100-form-btn ${Object.keys(errors).length ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer opacity-100'}`} disabled={!!Object.keys(errors).length}>
                                    Signup
                                </button>
                            </div>

                        </Form>
                         )}
                    </Formik>
                </div>

            </div>

            <div id='tutorial'>
               Tutorial
            </div>
        </div>
    );
};

export default Signup;

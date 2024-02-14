import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import SignupFunc from '../../Functions/SignupFunc';
import Profile from '../../assets/userProfile.png';

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

    const handleAutofill = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const password_confirmation = e.target.elements.password_confirmation.value;
        const values = {
            name,
            email,
            password,
            password_confirmation
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
                              {values.password && (
                                   <div className={errors.password ? 'password-weak error-message' : 'password-strong error-message'}>
                                        {errors.password ? '' : 'Strong password'}
                                   </div>
                              )}
                              <div className="wrap-input100 validate-input" data-validate="Confirm password">
                              <Field type="password" name="password_confirmation" className="input100 placeholder:text-white" placeholder="Confirm Password" />
                              <span className="focus-input100" data="&#xf191;"></span>
                              </div>
                              <ErrorMessage name="password_confirmation" component="div" className="error-message" />
                              <div className=" flex justify-center validate-input screenshotBox">
                              <Field type="file" name="screenshot" className="  file-input" accept="image/*" id="screenshot" />
                              <label htmlFor="screenshot" className="file-label">
                                   Upload
                              </label>
                              </div>
                              <ErrorMessage name="screenshot" component="div" className="error-message" />
                              <div className="text-center">
                                <Link to="tutorial" className="txt1" > How to do this task?</Link>
                            </div>
                            <div className="container-login100-form-btn">
                                <button type="submit" className={`login100-form-btn ${values?'opacity-40 cursor-not-allowed':""} `}disabled={values}>
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

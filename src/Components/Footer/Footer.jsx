import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const checkAndNavigate = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsLoggedIn(true);
            }
        };
        checkAndNavigate();
    }, [navigate]);

    const color = isLoggedIn ? 'brown' : 'darkBlue';
    const textColor = isLoggedIn ? 'brown' : 'darkBlue';
    

    return ( 
        <div className=' bottom-0'>
            <footer className={`${!isLoggedIn ? 'bg-skyBlue': 'bg-skin'}`}>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="Antara/src/Components/Home/Home.jsx" className="flex items-center">
                                <span className={`self-center text-5xl font-bold whitespace-nowrap text-${textColor}`}>Arohana</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className={`mb-6 text-sm font-semibold text-${textColor} uppercase dark:text-${textColor}`}>Resources</h2>
                                <ul className={`text-${textColor} dark:text-${textColor} font-medium`}>
                                    <li className="mb-4">
                                        <a href="https://pgdavhyperion.in/" className="hover:underline">Hyperion</a>
                                    </li>
                                    <li>
                                        <a href="https://www.pgdavcollege.in//" className="hover:underline">PGDAV College</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={`mb-6 text-sm font-semibold text-${textColor} uppercase dark:text-${textColor}`}>Follow us</h2>
                                <ul className={`text-${textColor} dark:text-${textColor} font-medium`}>
                                    <li className="mb-4">
                                        <a href="https://www.instagram.com/hyperion_pgdav/" className="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://m.facebook.com/PGDAVhyperion?_rdr" className="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={`mb-6 text-sm font-semibold text-${textColor} uppercase dark:text-${textColor}`}>Team</h2>
                                <ul className={`text-${textColor} dark:text-${textColor} font-medium`}>
                                    <li className="mb-4">
                                        <p>Hyperion - PGDAV</p>
                                    </li>
                                    <li>
                                        <p>Website Development Team <br />
                                        Techwhiz - IT Society</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className={`my-6 border-${color}-500 sm:mx-auto dark:border-${textColor}`} />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className={`text-sm text-${textColor}-500 sm:text-center dark:text-${textColor}`}>  
                        </span>
                        <span className={`text-sm text-${textColor} sm:text-center dark:text-${textColor}`}>© 2024 <a href="https://pgdavhyperion.in/" className="hover:underline">Hyperion™</a>
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0"> </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer

import React, { useState, useEffect } from 'react';
import Api from '../../Functions/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';

const Categories = () => {
    const { fetchApi , isLoading } = Api();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
     const index = 2;
    useEffect(() => {
        const result = fetchApi('GET', 'api/categories', 'events');
        result.then(response => {
            if (response?.status === 200) {
                setCategories(response?.data?.data);
            }
        });
    }, []);


    return (
        <div className="flex flex-col justify-center items-center">
               <h1 className="text-4xl font-bold mt-10 mb-5" data-aos="fade-up"                                       data-aos-duration="2000"
               data-aos-delay={index * 100}>Categories</h1>
            { 
            isLoading ? <div className=" min-h-screen bg-orange-100"></div>:
            <div className="flex flex-wrap justify-center items-center">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="w-80 h-80 m-5 rounded-lg flex flex-col justify-center items-center border border-gray-200 shadow-lg"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay={index * 200}
                    >
                        <Link to={`/events/${category.id}`}>
                            <h1 className="text-2xl font-bold">{category.name}</h1>
                        </Link>
                        <img
                            src={category.background_image}
                            alt={category.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}

            </div>
            }
        </div>
    );
};

export default Categories;

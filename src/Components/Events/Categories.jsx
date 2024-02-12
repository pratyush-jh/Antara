import React, { useState, useEffect } from 'react';
import Api from '../../Functions/api';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import EventsCards from './EventsCards';

const Categories = () => {
    const { fetchApi , isLoading } = Api();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
     const [length, setLength] = useState(0);
    useEffect(() => {
        const result = fetchApi('GET', 'api/categories', 'events');
        result.then(response => {
            if (response?.status === 200) {
                setCategories(response?.data?.data);
                setLength(response?.data?.data.length);
            }
        });
    }, []);

    if(length === 0){
        return (
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mt-10 mb-5" data-aos="fade-up">Categories</h1>
                <div className="wrapper min-h-screen flex items-center justify-center" data-aos="fade-up">
                    Loading 
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col justify-center items-center">
               <h1 className="text-4xl font-bold mt-10 mb-5" data-aos="fade-up">Categories</h1>
                <div className=' min-w-full m-auto items-center flex' >
                <EventsCards category={categories} key={categories.id} length={length} data-aos="fade-up" />
                </div>

        </div>
    );
};

export default Categories;

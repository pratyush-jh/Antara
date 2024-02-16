// import React, { useState, useEffect } from 'react';
// import Api from '../../Functions/api';
// import { useNavigate } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import DayTabs from './DayTabs';
// import Spinner2 from '../ShimmerAndSpinner/Spinner2';
// import TimelineBody from './TimelineBody';

// const Timeline = () => {
//   const { fetchApi, isLoading } = Api();
//   const navigate = useNavigate();
//   const [eventsData, setEventsData] = useState([]);
//   const [length, setLength] = useState(0);
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (tabIndex) => {
//     setActiveTab(tabIndex);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchApi('GET', 'api/timeline', 'timeline');
//         if (response?.status === 200) {
//           setEventsData(response?.data?.data);
//           setLength(response?.data?.data.length);
//         }
//       } catch (error) {
//         console.error('Error fetching timeline data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (length === 0) {
//     return (
//       <div className='w-screen h-screen flex justify-center items-center'>
//         <Spinner2 />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="text-center">
//       <h1 className="text-4xl font-bold mt-10 mb-5 text-black" data-aos="fade-up">Timeline</h1>

//       </div>
//       <div className='min-w-full m-auto flex items-center justify-center'>
//         <DayTabs eventsData={eventsData} activeTab={activeTab} onTabClick={handleTabClick} />
//       </div>
//       <div className='min-w-full m-auto flex items-center justify-center'>
//         <TimelineBody eventsData={Object.values(eventsData)[activeTab]} />
//       </div>
//     </div>
//   );
// };

// export default Timeline;

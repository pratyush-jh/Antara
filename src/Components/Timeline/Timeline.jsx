import React, { useState, useEffect } from 'react';
import Api from '../../Functions/api';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import DayTabs from './DayTabs';
import Spinner2 from '../ShimmerAndSpinner/Spinner2';
import TimelineBody from './TimelineBody';
import './timeline.css';

const Timeline = () => {
  const { fetchApi, isLoading } = Api();
  const navigate = useNavigate();
  const [eventsData, setEventsData] = useState([]);
  const [length, setLength] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi('GET', 'api/timeline', 'timeline');
        if (response?.status === 200) {
          setEventsData(response?.data?.data);
          setLength(response?.data?.data.length);
        }
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };
    fetchData();
  }, []);
  // const eventsData = {
  //   "Monday": [
  //     {
  //       "day": "Monday",
  //       "id": 9,
  //       "title": "Nartanam",
  //       "date": "2024-02-26",
  //       "start_at": "11:00:00",
  //       "ends_at": "13:00:00",
  //       "name": "Natraj",
  //       "venue": "New Seminar Hall",
  //       "society_id": 23
  //     }
  //   ],
  //   "Wednesday": [
  //     {
  //       "day": "Wednesday",
  //       "id": 7,
  //       "title": "Dance Nigga Dance",
  //       "date": "2024-02-28",
  //       "start_at": "13:00:00",
  //       "ends_at": "16:10:00",
  //       "name": "TechWhiz",
  //       "venue": "Shor Ground",
  //       "society_id": 22
  //     },
  //     {
  //       "day": "Wednesday",
  //       "id": 10,
  //       "title": "LIVE SKETCHING",
  //       "date": "2024-02-28",
  //       "start_at": "10:00:00",
  //       "ends_at": "12:00:00",
  //       "name": "IMPRESSIONS",
  //       "venue": "CR ROOM",
  //       "society_id": 17
  //     },
  //     {
  //       "day": "Wednesday",
  //       "id": 11,
  //       "title": "FACE PAINTING",
  //       "date": "2024-02-28",
  //       "start_at": "10:11:00",
  //       "ends_at": "12:10:00",
  //       "name": "IMPRESSIONS",
  //       "venue": "CR ROOM",
  //       "society_id": 17
  //     },
  //     {
  //       "day": "Wednesday",
  //       "id": 12,
  //       "title": "ART EXHIBITION",
  //       "date": "2024-02-28",
  //       "start_at": "11:00:00",
  //       "ends_at": "12:00:00",
  //       "name": "IMPRESSIONS",
  //       "venue": "CR ROOM",
  //       "society_id": 17
  //     }
  //   ],
  //   "Thursday": [
  //     {
  //       "day": "Thursday",
  //       "id": 13,
  //       "title": "Nigga Got Talent",
  //       "date": "2024-02-29",
  //       "start_at": "07:24:00",
  //       "ends_at": "15:24:00",
  //       "name": "TechWhiz",
  //       "venue": "Kaddu Ground",
  //       "society_id": 22
  //     }
  //   ]

  // }

  if (length === 0) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <Spinner2 />
      </div>
    );
  }

  return (
    <div
      className="w-full flex flex-col justify-center items-center timeline-wrapper"
    >
      <div className="text-center">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 mb-8 text-white underline font-serif" data-aos="fade-up">Timeline</h1>
      </div>
      <div className='min-h-screen w-full'
      // style={{
      //     backgroundImage: `url(${bg})`,
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat',
      // }}
      >

        <div className='min-w-full m-auto flex items-center justify-center'>
          <DayTabs eventsData={eventsData} activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        <div className='min-w-full m-auto flex items-center justify-center'>
          <TimelineBody eventsData={Object.values(eventsData)[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

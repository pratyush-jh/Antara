import React from 'react';
import EventCard from './EventCard';

const DayTimeline = ({ dayData }) => {
  return (
    <div className="flex flex-col items-center mb-8 ">
      <h2 className="text-xl font-bold mb-4">{dayData.date} - {dayData.day}</h2>
      <div className="flex overflow-scroll py-2 space-x-4 ">
        {dayData.events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
export default DayTimeline
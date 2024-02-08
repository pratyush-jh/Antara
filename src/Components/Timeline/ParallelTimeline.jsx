import React from 'react';
import eventsData from './eventsData.json'; // Adjust the import path as necessary
import DayTimeline from './DayTimeline';

const ParallelTimelines = () => {
    return (
        <div className="space-y-8">
            {eventsData.map((day, index) => (
                <DayTimeline key={index} dayData={day} />
            ))}
        </div>
    );
};

export default ParallelTimelines;

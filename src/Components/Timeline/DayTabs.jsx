import React from 'react';

const DayTabs = ({ eventsData, activeTab, onTabClick }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8 mb-4">
      {Object.keys(eventsData).map((dayName, index) => (
        <button
          key={index}
          className={`text-md px-4 py-2 rounded-lg font-bold text-center focus:outline-none hover:opacity-80 ${
            activeTab === index
              ? 'timeline-tabs'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
          onClick={() => onTabClick(index)}
        >
          {dayName}
        </button>
      ))}
    </div>
  );
};

export default DayTabs;

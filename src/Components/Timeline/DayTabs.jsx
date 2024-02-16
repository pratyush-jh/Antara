// import React, { useState } from 'react';
// // import TimelineBody from './TimelineBody';

// const DayTabs = ({ eventsData, activeTab, onTabClick }) => {
//     // const [activeTab, setActiveTab] = useState(0);

//     // const handleTabClick = (tabIndex) => {
//     //     setActiveTab(tabIndex);
//     // };

//     return (
//       <>
//             <div className="flex space-x-4 mt-8 mb-4">
//                 {Object.keys(eventsData).map((dayName, index) => (
//                     <div
//                         key={index}
//                         className={`cursor-pointer px-4 py-2 rounded-lg ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                             }`}
//                         onClick={() => onTabClick(index)}
//                     >
//                         {dayName}
//                     </div>
//                 ))}
//             </div>
//             {/* <div>
//                 <TimelineBody eventsData={Object.values(eventsData)[activeTab]} />
//             </div> */}
//         </>
//     );
// };

// export default DayTabs;

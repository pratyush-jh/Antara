// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// const TimelineBody = ({ eventsData }) => {
//     return (
//         <VerticalTimeline>
//             {eventsData.map((event, index) => (
//                 <VerticalTimelineElement
//                     key={index}
//                     className="vertical-timeline-element--work"
//                     date={`${event.date} - ${event.start_at}`}
//                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                 >
//                     <h3 className="vertical-timeline-element-title">{event.title}</h3>
//                     <h4 className="vertical-timeline-element-subtitle">{event.venue}</h4>
//                     <p className="text-sm">{`Organizer: ${event.name}`}</p>
//                     {event.link && <a href={event.link} className="text-blue-500 hover:underline">More Info</a>}
//                 </VerticalTimelineElement>
//             ))}
//         </VerticalTimeline>
//     );
// }

// export default TimelineBody;
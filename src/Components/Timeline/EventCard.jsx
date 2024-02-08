import React from "react";

const EventCard = ({ event }) => {
    return (
        <div className="min-w-max bg-white shadow-lg rounded-lg p-4">
            <h3 className="font-semibold">{event.title}</h3>
            <p className="text-sm">{event.time}</p>
            <p className="text-sm">{event.venue}</p>
            <p className="text-sm">{event.organizer}</p>
            {event.link && <a href={event.link} className="text-blue-500 hover:underline text-xs">More info</a>}
        </div>
    );
};
export default EventCard
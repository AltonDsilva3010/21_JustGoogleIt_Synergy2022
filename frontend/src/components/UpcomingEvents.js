import React from "react";
import "./UpcomingEvents.css";
import EventCard from "./EventCard";
import eventsdata from "./eventsdata";

const UpcomingEvents = () => {
  //dispatch the reducer function to get all the events from a route
  return (
    <div className="upcoming-events">
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {eventsdata.map((event, index) => {
          return (
            <div>
              <EventCard key={index} {...event} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;

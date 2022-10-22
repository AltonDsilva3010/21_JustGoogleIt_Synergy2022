import React, { useEffect } from "react";
import "./UpcomingEvents.css";
import EventCard from "./EventCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../store/someSlice";

const UpcomingEvents = () => {
  //dispatch the reducer function to get all the events from a route
  let dispatch = useDispatch();
  let eventsdata = [];
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  eventsdata = useSelector((state) => state.event.events);
  console.log(eventsdata);
  return (
    <div className="upcoming-events">
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {eventsdata
          ? eventsdata.map((event, index) => {
              return (
                <div>
                  <EventCard key={event.id} {...event} />
                </div>
              );
            })
          : console.log("Loading..")}
      </div>
    </div>
  );
};

export default UpcomingEvents;

import axios from "axios";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEventsData = async () => {
    const response = await axios.get(`http://localhost:9000/events`);
    if (response.status === 200) {
      setEvents(response.data.result);
    }
  };
  useEffect(() => {
    fetchEventsData();
  }, []);
  console.log(events);
  return (
    <div className="event_container">
      <h2>All events for collecting donation</h2>
      <div className="ec_container">
        {events.map((event, i) => {
          return <EventCard key={i} data={event} />;
        })}
      </div>
    </div>
  );
};

export default Events;

const EventCard = ({ data }) => {
  const { id, title, description, targeted_amount, raised_amount, deadline } = data;
  return (
    <div className="event_card__container">
      <div className="ecc_image"></div>
      <div className="ecc_body">
        <h3><span>{id}</span>{title}</h3>
        <p>{description}</p>
        <p>Targeted amount : {targeted_amount}</p>
        <p>Raised amount : {raised_amount}</p>
        <p>Deadline : {deadline}</p>
        <div className="eccb__buttons">
          <button className="btn-secondary">Update</button>
          <button className="btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
};

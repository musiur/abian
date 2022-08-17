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
    <div>
      <h2>All events for collecting donation</h2>
      <div>
        {events.map((event, i) => {
          return <EventCard key={i} data={event} />;
        })}
      </div>
    </div>
  );
};

export default Events;

const EventCard = ({ data }) => {
  console.log(data);
  const { title, description, targeted_amount, raised_amount, deadline } = data;
  return (
    <div>
      <div></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{targeted_amount}</p>
        <p>{raised_amount}</p>
        <p>{deadline}</p>
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

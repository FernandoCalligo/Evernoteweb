import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const event = prompt('Enter event details');
    if (event) {
      setEvents([...events, { date, event }]);
    }
  };

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {events
          .filter(event => event.date.toDateString() === date.toDateString())
          .map((event, index) => (
            <li key={index}>{event.event}</li>
          ))}
      </ul>
    </div>
  );
}

export default MyCalendar;

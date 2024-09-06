import React from 'react';
import EventCalendar from '../components/EventCalendar';

function CalendarPage() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Calendario de Eventos</h1>
      <EventCalendar />
    </div>
  );
}

export default CalendarPage;

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import { saveCalendarEventsToLocalStorage, loadCalendarEventsFromLocalStorage } from '../utils/calendarLocalStorage';
import './CustomCalendar.css'; // Importa el archivo CSS

function EventCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const savedEvents = loadCalendarEventsFromLocalStorage();
    console.log('Loaded events from localStorage:', savedEvents);
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    console.log('Saving events to localStorage:', events);
    saveCalendarEventsToLocalStorage(events);
  }, [events]);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    setOpen(true);
  };

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents(prevEvents => ({
        ...prevEvents,
        [selectedDate.toDateString()]: newEvent,
      }));
      setNewEvent('');
      setOpen(false);
    }
  };

  const tileContent = ({ date, view }) => {
    const event = events[date.toDateString()];
    return view === 'month' && event ? (
      <div className="p-1 rounded bg-blue-300 text-blue-800 text-xs text-center">
        {event}
      </div>
    ) : null;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Calendar
        className="custom-calendar bg-white shadow-lg rounded-lg p-4"
        onClickDay={handleDateChange}
        value={date}
        tileContent={tileContent}
        onChange={setDate}
      />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Agregar Evento</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            {selectedDate?.toDateString()}
          </Typography>
          <TextField
            label="Evento"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAddEvent} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventCalendar;

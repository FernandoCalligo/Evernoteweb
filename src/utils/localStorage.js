// utils/localStorage.js

export const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const loadNotesFromLocalStorage = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  
  export const saveEventsToLocalStorage = (events) => {
    localStorage.setItem('events', JSON.stringify(events));
  };
  
  export const loadEventsFromLocalStorage = () => {
    const events = localStorage.getItem('events');
    return events ? JSON.parse(events) : [];
  };
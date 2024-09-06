// utils/calendarLocalStorage.js

export const saveCalendarEventsToLocalStorage = (events) => {
    console.log('Saving events to localStorage:', events); // Agrega un log para verificar
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  };
  
  export const loadCalendarEventsFromLocalStorage = () => {
    const events = localStorage.getItem('calendarEvents');
    console.log('Loaded events from localStorage:', events); // Agrega un log para verificar
    return events ? JSON.parse(events) : {};
  };
  
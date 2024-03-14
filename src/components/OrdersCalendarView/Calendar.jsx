// import React, { useState } from "react";
import  { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


const Calendar = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Product1", start: "2024-03-07", end: "2024-03-09" },
    { id: 2, title: "Product2", start: "2024-03-11", end: "2024-03-14" },
    { id: 3, title: "Product3", start: "2024-03-12", end: "2024-03-13" },
    { id: 3, title: "Product4", start: "2024-03-15", end: "2024-03-15" },
  ]);

  const handleDateSelect = (selectInfo) => {
    const newEvent = {
      id: Date.now(),
      title: prompt("Enter the details"),
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    };
    if(newEvent.title===null ||newEvent.title==="" ){
      return;
    }
    setEvents([...events, newEvent]);
  };

 
const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event);
    const eventIndex = events.findIndex(
      (event) =>{
    //   console.log(event)
    //   console.log(event.id)
    //   console.log(clickInfo.event.id);
      return (event.id == clickInfo.event.id)
      }
    );
    // console.log(eventIndex);
      if (eventIndex === -1) {
      return;
    }
  
    const updatedEvent = { ...events[eventIndex] };
    updatedEvent.title = prompt("Update event title:");
    if(updatedEvent.title===null ||updatedEvent.title==="" ){
      return;
    }
    const updatedEvents = [
      ...events.slice(0, eventIndex),
      updatedEvent,
      ...events.slice(eventIndex + 1),
    ];
  
    setEvents(updatedEvents);
  };
  

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      height="90vh"
      events={events}
      selectable
      select={handleDateSelect}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;
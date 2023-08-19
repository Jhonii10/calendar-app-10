/* eslint-disable no-unused-vars */

import { CalendarEvent, CalendarModal, Navbar } from "../components";
import { Calendar } from 'react-big-calendar';

import { addHours } from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessage, localizer } from "../../helpers";
import { useState } from "react";



const events = [
  {
    title: 'cumpleaños del jefe',
    notes: 'hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        _id:'123',
        name:'jhoni'
    }
  }
];

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastview','agenda'));

    console.log({lastView});
    const eventsStyleGetter = (event,start,end,isSelected)=>{
        

    
        const style = {
            backgroundColor : '#347CF7',
            borderRadius:'0px',
            opacity:0.8,
            color:'white',
        }
        return{
            style
        }
    }

    const onDoubleClick = (event)=>{
        console.log({doubleClick: event});
    }

    const onSelect = (event)=>{
        console.log({click: event});
    }
    
    const onViewChange = (event)=>{
        localStorage.setItem('lastview',event);
        setLastView(lastView)
    }



  return (
    <>
      <Navbar/>
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessage()}
        eventPropGetter={eventsStyleGetter}
        components={{
            event: CalendarEvent,

        }}

        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
      <CalendarModal/>
    </>
  );
}

 

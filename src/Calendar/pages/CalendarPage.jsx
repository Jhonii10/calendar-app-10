/* eslint-disable no-unused-vars */

import { CalendarEvent, CalendarModal, Navbar } from "../components";
import { Calendar } from 'react-big-calendar';

import { addHours } from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessage, localizer } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore} from "../../hooks";






export const CalendarPage = () => {

    const {events} = useCalendarStore()
    console.log(events);
    const {openDateModal} = useUiStore()
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
      openDateModal()
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

 

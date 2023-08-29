/* eslint-disable no-unused-vars */

import { CalendarEvent, CalendarModal, FabAddNew, Navbar } from "../components";
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessage, localizer } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore} from "../../hooks";
import { FabDelete } from "../components/FabDelete";






export const CalendarPage = () => {

    const {events,setActiveEvent} = useCalendarStore()
    

    const {openDateModal,} = useUiStore()
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' );


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
    }

    const onSelect = (event)=>{
      setActiveEvent(event)
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
      <FabAddNew/>
      <FabDelete/>
    </>
  );
}

 

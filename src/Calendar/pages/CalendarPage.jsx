
import { Navbar } from "../components";
import { Calendar } from 'react-big-calendar';

import { addHours } from "date-fns";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessage, localizer } from "../../helpers";



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

    const eventsStyleGetter = (event,start,end,isSelected)=>{
        console.log({event,start,end,isSelected});

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




  return (
    <>
      <Navbar/>
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessage()}
        eventPropGetter={eventsStyleGetter}
      />
    </>
  );
}

 

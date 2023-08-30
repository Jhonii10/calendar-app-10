import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events,activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent)=>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent)=>{
        // todo: llegar al backend

        // todo correcto

        if (calendarEvent._id) {
            dispatch(onUpdateEvent({...calendarEvent})) 
        }else{
            // creando
            const {data} = await calendarApi.post('/events', calendarEvent);
            dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id}))
        }
    }

    const startDeleteEvent = ()=>{
        dispatch(onDeleteEvent())
    }


    const startLoginEvents = async()=>{
        const {data}= await calendarApi.get('/events');
        console.log(data)
    }

    return {
        // propiedades 
        events,
        activeEvent,
        hasEventSelect: !!activeEvent,

        // * Metodos
        setActiveEvent,
        startSavingEvent,
        startDeleteEvent,
        startLoginEvents,


    }
}



import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";
import { useAuthStore } from "./useAuthStore";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events,activeEvent} = useSelector(state => state.calendar);

    

    const {user}  = useAuthStore()

    const setActiveEvent = (calendarEvent)=>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent)=>{
        // todo: llegar al backend

        try {
            if (calendarEvent.id) {
                 await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent)
                dispatch(onUpdateEvent({...calendarEvent , user})) 
              }else{
                  // creando
                  const {data} = await calendarApi.post('/events', calendarEvent);
                  dispatch(onAddNewEvent({...calendarEvent, id: data.evento._id,user}))
              }
            
        } catch (error) {
            console.log(error)
            Swal.fire('Error al guardar',error.response.data.msg,'error')
        }

       
    }

    const startDeleteEvent = async()=>{



        
        try {
              
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent())
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Evento eliminado',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.log(error)
            Swal.fire('Error al Eliminar',error.response.data.msg,'error')
        }
        
        
    }


    const startLoginEvents = async()=>{

        try {
            const {data}= await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos)
            dispatch( onLoadEvents( events ) );
            
        } catch (error) {
            console.log('Error cargando eventos')
            console.log(error);
        }
        
       
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



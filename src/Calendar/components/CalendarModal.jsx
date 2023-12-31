import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from 'date-fns/locale/es';
import Swal from 'sweetalert2';
import {  useCalendarStore, useUiStore } from '../../hooks';


registerLocale('es', es)

export const CalendarModal = () => {


    const {isDateModalOpen, closeDateModal} = useUiStore()
    const {activeEvent, startSavingEvent}= useCalendarStore()


    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValue, setFormValue] = useState({
        title: '',
        notes:'',
        start: new Date(),
        end: addHours(new Date(),2),
    });

    const onFormValueChage = ({target})=>{
        setFormValue({
            ...formValue,
            [target.name]:target.value
        })
    }

    const titleClass = useMemo(()=>{
        if (!formSubmitted) return '';
        return (formValue.title.length > 0 ) 
                ? ''
                : 'is-invalid'


    },[formValue.title , formSubmitted])

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValue({...activeEvent})
        }
    }, [activeEvent]);

    const onDateChage =(event,changing)=>{
        setFormValue({
            ...formValue,
            [changing]:event
        })
    }
   

    const onCloseModal = ()=>{
        closeDateModal()
    }


    const onSubmit = async(event)=>{
        event.preventDefault()
        setFormSubmitted(!formSubmitted)
      
        

        const difference = differenceInSeconds(formValue.end , formValue.start);

        if(isNaN(difference) || difference < 0){
            Swal.fire({
                icon: 'error',
                title: 'Fechas incorrectas ',
                text: 'Revisa las fechas ingresadas',
              })
            return;
        }
        if (formValue.title.length <= 0) return;

        // todo:
        
        await startSavingEvent(formValue)
        closeDateModal();
        
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      Modal.setAppElement('#root');

    return (
        <div>
            <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className={'modal'}
            overlayClassName={"modal-fondo"}
            closeTimeoutMS={200}
            >

<h1> Nuevo evento </h1>
<hr />
<form className="container" onSubmit={onSubmit}>

    <div className="form-group mb-2 " style={{display:'grid'}}>
        <label>Fecha y hora inicio</label>
        <DatePicker 
            className="form-control" 
            selected={formValue.start} 
            onChange={(event)=>onDateChage(event,'start')}
            dateFormat={'Pp'}
            showTimeSelect
            locale='es'
            timeCaption="Hora"
        />
    </div>

    <div className="form-group mb-2" style={{display:'grid'}}>
        <label>Fecha y hora fin</label>
        <DatePicker 
            className="form-control" 
            selected={formValue.end} 
            onChange={(event)=>onDateChage(event,'end')}
            dateFormat={'Pp'}
            minDate={formValue.start}
            showTimeSelect
            locale='es'
            timeCaption="Hora"
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            value={formValue.title}
            onChange={onFormValueChage}
            autoComplete="off"
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.notes}
            onChange={onFormValueChage}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>

            </Modal>
        </div>
    );
}




import { useCalendarStore } from "../../hooks";


export const FabDelete = () => {

    const {startDeleteEvent, hasEventSelect} = useCalendarStore()
    
    const handleClikDelete = ()=>{
        
        startDeleteEvent()
    }
    
    return (
        <button
            className=" btn btn-danger fab-danger"
            onClick={handleClikDelete}
            style={{
                display: hasEventSelect ? '':'none'
            }}
        >
        <i className="fas fa-trash-alt  "></i>
            
        </button>
    );
}

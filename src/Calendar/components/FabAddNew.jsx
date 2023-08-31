import { addHours } from "date-fns";
import { useAuthStore, useCalendarStore, useUiStore } from "../../hooks";


export const FabAddNew = () => {

    const {user} = useAuthStore()

    const {openDateModal}= useUiStore()
    const {setActiveEvent } = useCalendarStore()
    
    const handleClikNew = ()=>{
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: user.uid
        })
        openDateModal()

    }
    
    return (
        <button
            className=" btn btn-primary fab"
            onClick={handleClikNew}
        >
        <i className="fas fa-plus"></i>
            
        </button>
    );
}


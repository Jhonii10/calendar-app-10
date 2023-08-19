import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../Calendar";


export const AppRouter = () => {



    return (
        <>
           <Routes>
           
            
              <Route path="/auth/*" element={<LoginPage/>}/>
              <Route path="/" element={<CalendarPage/>}/>
           
            {/* <Route path="/*" element={<Navigate to={'/auth/login'}/>}/> */}
            
           </Routes>
        </>
    );
}

 

import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { CalendarPage } from "../Calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";


export const AppRouter = () => {


    const {status,checkAuthToken} = useAuthStore()


    useEffect(() => {
        checkAuthToken()
    }, []);

    if (status === 'checking') {
        return (
            <>
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh' }} >
            
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden"></span>
            </div>
            </div>
            </>
        )
    }




    return (
        <>
           <Routes>
           {
            (status === 'not-authenticated')
                ?
                (
                    <>
                    <Route path="/auth/*" element={<LoginPage/>}/>
                    <Route path="/auth/register" element={<RegisterPage/>}/>
                    <Route path="/*" element={<Navigate to={'/auth/login'}/>}/>
                    </>
                ) 
                : (
                    <>
                    <Route path="/" element={<CalendarPage/>}/>
                    <Route path="/*" element={<Navigate to={'/'}/>}/>

                    </>

                )
           }
            
            
           </Routes>
        </>
    );
}

 

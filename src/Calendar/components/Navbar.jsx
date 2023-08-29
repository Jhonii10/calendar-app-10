import { useAuthStore } from "../../hooks";


export const Navbar = () => {


    const {user,startLogout} = useAuthStore()

    return (
        <nav className="navbar  navbar-dark bg-dark">
        <span className="navbar-brand">
        <i className="fa-regular fa-calendar-days"></i>
            &nbsp;
            {user.name}
        </span>
        <button className="btn btn-outline-danger" onClick={startLogout} >
            <span className="">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            &nbsp;
                salir
            </span>
        </button>
        </nav>
    );
}

 

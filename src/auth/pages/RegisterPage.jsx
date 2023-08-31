import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './loginPage.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const registerFormFields ={
    registerName: '',
    registerEmail:'',
    registerPassword: '',
    registerPassword2:'',
}

export const RegisterPage = () => {

    const {startRegister, errormessage} = useAuthStore()

    const {registerName , registerEmail ,registerPassword , registerPassword2, onInputChange: onRegisterInputChange,} =useForm(registerFormFields);

  


    const registerSubmit = (event)=>{
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en el registro', 'Las contraseñas no coinciden','error')
            return;
        }

        startRegister({name:registerName , email:registerEmail ,password:registerPassword })

    }


    useEffect(() => {
        if (errormessage !== undefined) {
            Swal.fire('Error en la autenticacion',errormessage,'error')
        }
    }, [errormessage]);

    return (
        <div className=" bodddy " >
<div className="video-bg">
<video width={320} height={240} autoPlay loop muted>
    <source
      src="https://assets.codepen.io/3364143/7btrrd.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video></div>
            <div className="row ">
                <div className="login-form-1 app">
                <div className="header">
  <div className="menu-circle" />
  <div className="header-Page">
        <h2>Register</h2>
    </div>
    
  
</div>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="input-10"
                                placeholder="Name"
                                name="registerName"   
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="input-10"
                                placeholder="Email"
                                name="registerEmail"   
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="input-10"
                                placeholder="Password" 
                                name="registerPassword"   
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="input-10"
                                placeholder="Confirmation Password" 
                                name="registerPassword2"   
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mt-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Sign Up" />
                            <Link to={'/auth/login'} className='link-10 ' style={{marginLeft:'18px'}}>You Have account</Link>
                        
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

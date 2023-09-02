/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import './loginPage.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const loginFormFields ={
    loginEmail: '',
    loginPassword:'',
}

export const LoginPage = () => {

    const {startLogin, errormessage} = useAuthStore()

    const {loginEmail , loginPassword , onInputChange: onLoginInputChange,} =useForm(loginFormFields);

    const loginSubmit = (event)=>{
        event.preventDefault();

        startLogin({email:loginEmail,password:loginPassword})
    }



    useEffect(() => {
        if (errormessage !== undefined) {
            Swal.fire('Error en la autenticacion',errormessage,'error')
        }
    }, [errormessage]);

    return (
        <div className=" bodddy " >
<div className="video-bg">
<video width={320} height={240} autoPlay loop muted playsInline >
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
        <h2>Login</h2>
    </div>
</div>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="input-10"
                                placeholder="Email"
                                name="loginEmail"   
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-label mb-2">
                            <input
                                type="password"
                                className="input-10"
                                placeholder="Password"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Sign In"
                            />
                        </div>


                        <div className="form-group mb-2">
                            <span>
                                <p>Don't have an account</p>
                                <Link to={'register'} className='link-10'>Sign Up</Link>
                            </span>
                        </div>
                    </form>
                </div>

                </div>
        </div>
    )
}
 
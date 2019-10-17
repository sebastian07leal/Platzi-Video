import React from 'react';
import '../assets/styles/components/Login.sass';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
    <section className="container-fullheight">
        <section className="login__container">
            <h2 className="login__container--titulo">Inicia Sesión</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesion</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" value="checkbox" /> Recuerdame
                    </label>
                    <a href="#">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Logo goole" />Ingresa con Google</div>
                <div><img src={twitterIcon} alt="Logo Twitter" />Ingresa con Twitter</div>
                <p className="login__container--register">No tienes ninguna cuenta <a href="#">Registrate</a></p>
            </section>
        </section>
    </section>
);

export default Login;
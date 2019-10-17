import React from 'react';

const Register = () => (
    <section className="container-fullheight">
        <section className="login__container">
            <h2 className="login__container--titulo">Regístrate</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="email" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button>Registrarme</button>
            </form>
            <p className="login__container--iniciar"><a href="#">Iniciar sesión</a></p>
        </section>
    </section>
);

export default Register;
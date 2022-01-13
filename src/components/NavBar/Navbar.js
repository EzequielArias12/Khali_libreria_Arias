/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartWidget from '../CartWidget/index';

const Navbar = () => {
    return (
        <header>
        <div className='navbar-top row'>
            <p className='logo col-3'>Khali<br/>Libreria</p>

            <form className="col-6">
                <input className='input-search' type="text" placeholder="  ¿Que estas buscando?"/>
            </form>
            

            <div className="nav-admin col-3">
                <p>Iniciar sesion<br/>-------------------<br/> Crear cuenta</p>
                <CartWidget/>
            </div>
        </div>
        
        <nav className="navbar-bottom">
            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Artistica</a></li>
                <li><a href="#">Comercial</a></li>
                <li><a href="#">Escolar</a></li>
                <li><a href="#">Papeleria</a></li>
                <li><a href="#">Kits</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
       
    </header>
    )
}

export default Navbar;

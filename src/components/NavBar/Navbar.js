/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartWidget from '../CartWidget/index';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
        <div className='navbar-top row'>
            <Link className='logo col-3' to="/">Khali<br/>Libreria</Link>

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
                <li><Link className='LinkA' to='/category/fibrones'>Fibrones</Link></li>
                <li><Link className='LinkA' to='/category/gomasDeBorrar'>Gomas</Link></li>
                <li><Link className='LinkA' to='/'>Catalogo</Link></li>
                <li><Link className='LinkA' to='/category/Lapiceria'>Lapiceria</Link></li>
                <li><Link className='LinkA' to='/category/Kits'>Kits</Link></li>
            </ul>
        </nav>

    </header>
    )
}

export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import CartWidget from '../CartWidget/index';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
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

                <li>
                    <Link 
                    className='LinkA'
                     to='/category/fibrones'
                     >
                         Fibrones
                    </Link>
                </li>

                <li>
                    <Link 
                    className='LinkA' 
                    to='/category/gomasDeBorrar'
                    >
                        Gomas
                    </Link>
                </li>

                <li>
                    <Link 
                    className='LinkA' 
                    to='/'
                    >
                        Catalogo
                    </Link>
                </li>

                <li>
                    <Link 
                    className='LinkA' 
                    to='/category/lapicera'
                    >
                        Lapicera
                    </Link>
                </li>
                <li>
                    <Link 
                    className='LinkA'
                    to='/category/kits'
                    >
                    Kits
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="nav-icon"onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} ></i>    
        </div>
    </header>
    )
}

export default Navbar;

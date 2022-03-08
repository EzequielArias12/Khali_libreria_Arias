/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import CartWidget from '../CartWidget/index';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [show2,setShow2] = useState(false);

    const handleProduct = () => setShow(!show);
    // eslint-disable-next-line no-unused-vars
    const handleMenu = () => setShow2(!show2);

    return (
        <header>
        <div className='navbar-top row'>
            <NavLink className='logo col-3' to="/">Khali<br/>Libreria</NavLink>

            <form className="col-6">
                <input className='input-search' type="text" placeholder="  ¿Que estas buscando?"/>
            </form>
            

            <div className="nav-admin col-3">
                <NavLink className="mobile-season" to="/">Iniciar sesion<br/>-------------------<br/> Crear cuenta</NavLink>
                <CartWidget/>
            </div>
        </div>
        
        <nav className="navbar-bottom">

            <ul className={show ? "nav-links active" : "nav-links"}>

                <li>
                    <NavLink 
                    activeClassName = "active"
                    className='LinkA'
                     to='/category/fibrones'
                     >
                         Fibrones
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    activeClassName = "active"
                    className='LinkA' 
                    to='/category/gomasDeBorrar'
                    >
                        Gomas
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    activeClassName = "active"
                    className='LinkA' 
                    to='/'
                    >
                        Catalogo
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    activeClassName = "active"
                    className='LinkA' 
                    to='/category/lapicera'
                    >
                        Lapicera
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    activeClassName = "active"
                    className='LinkA'
                    to='/category/kits'
                    >
                    Kits
                    </NavLink>
                </li>
            </ul>

            <div className="nav-icon" >
            <span className="nav-text" onClick={handleProduct} > Productos</span>   
            <span className="nav-text">Menu</span>  
        </div>
        </nav> 
        
    </header>
    )
}

export default Navbar;

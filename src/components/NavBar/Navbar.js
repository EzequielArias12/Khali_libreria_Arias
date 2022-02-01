/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartWidget from '../CartWidget/index';
import {Link} from 'react-router-dom';
import {NavbarContainer,IconLogoMobile, NavBarWrapper,MenuItemLink,Menu,MenuItem} from './NavBar_elements';

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
        <NavbarContainer>
            <NavBarWrapper>
                <IconLogoMobile>
                    
                </IconLogoMobile>
                <Menu>
                    <MenuItem>
                    <MenuItemLink>Fibrones</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>Gomas</MenuItemLink>
                    </MenuItem>
                   <MenuItem>
                   <MenuItemLink>Catalogo</MenuItemLink>
                   </MenuItem>
                    <MenuItem>
                    <MenuItemLink>Lapicera</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                    <MenuItemLink>Kits</MenuItemLink>
                    </MenuItem>
                    
                </Menu>
            </NavBarWrapper>
        </NavbarContainer>
       

    </header>
    )
}

export default Navbar;

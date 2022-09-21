import React from 'react';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return(
        <div className="container-fluid bg-success position position-sticky">
            <nav className="nav d-flex justify-content-between">
                <div className="nav__Brand">
                    <a href="" className="nav_link"><span className='fs-1 text-dark'>TecnoSoft</span></a>
                </div>
                <a href="" className="nav_link"><span className='fs-1 text-dark'>Shop</span></a>
                <a href="" className="nav_link"><span className='fs-1 text-dark'>Contacto</span></a>
                <input type="search" name="" id="" placeholder='Buscar productos...' height="20px" width="200px" />
                <a href="" className="nav_link"><span className='fs-1 text-dark'>Carrito</span></a>
            </nav>
        </div>
    );
}

export default NavBar;
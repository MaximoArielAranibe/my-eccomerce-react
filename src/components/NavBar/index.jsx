import './NavBar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <div className="container-fluid bg-dark position position-sticky p-3 contenedor">
            <nav className="nav d-flex justify-content-between">
                <div className="nav__Brand">
                    <NavLink to='/' className="nav_link">
                        <div className='div_logo '>
                            <img src="" alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" classnName="bi bi-x-lg navbar-logo-svg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                            <span className='fs-1 text-light'>FilmsAddict</span>
                        </div>
                    </NavLink>
                </div>
                <NavLink to='/categoria/films' className="nav_link"><span className='fs-1 text-light'>Movies</span></NavLink>
                <NavLink to='/categoria/series' className="nav_link"><span className='fs-1 text-light'>Series</span></NavLink>
                <input type="search" name="" id="" placeholder='Buscar peliculas/series...' height="100px" width="200px" />
                <NavLink to='/cart' className="nav_link"><span className='fs-1 text-light'>Carrito</span></NavLink>
            </nav>
        </div>
    );
}

export default NavBar;
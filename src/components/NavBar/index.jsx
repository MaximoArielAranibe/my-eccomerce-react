import './NavBar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return(
        <div className="container-fluid bg-success position position-sticky p-3">
            <nav className="nav d-flex justify-content-between">
                <div className="nav__Brand">
                    <NavLink to='/' className="nav_link">
                        <div className='div_logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fillRule="currentColor" className="bi bi-balloon-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"/>
                            </svg>
                        <span className='fs-1 text-dark'>FilmsAddict</span>
                        </div>
                    </NavLink>
                </div>
                <NavLink to='/categoria/films' className="nav_link"><span className='fs-1 text-dark'>Movies</span></NavLink>
                <NavLink to='/categoria/series' className="nav_link"><span className='fs-1 text-dark'>Series</span></NavLink>
                <input type="search" name="" id="" placeholder='Buscar peliculas/series...' height="20px" width="200px" />
                <NavLink to='/cart' className="nav_link"><span className='fs-1 text-dark'>Carrito</span></NavLink>
            </nav>
        </div>
    );
}

export default NavBar;
import React from 'react';


export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav__Brand">
                    <a href="" className="nav_link"></a>
                </div>
                <ul className="nav__list">
                    <li className='nav__link' href="#">Item</li>
                    <li className='nav__link' href="#">Item</li>
                    <li className='nav__link' href="#">Item</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
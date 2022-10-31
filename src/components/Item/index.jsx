import './Item.css'

import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const Item = ({info}) => {
    const { nombre } = useContext(CartContext);

    return(
            <Link to={`/detalle/${info.id}`} className="film">
                <div className='item-container'>            
                    <p>{info.title}</p>
                    <img src={info.image} alt="" />
                    <p>{info.price}</p>
                </div>
            </Link>
    );
}

export default Item;
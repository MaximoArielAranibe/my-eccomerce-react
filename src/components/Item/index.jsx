import './Item.css'

import { Link } from 'react-router-dom';

import React from 'react'

const Item = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className="film">
            <p>{info.title}</p>
            <img src={info.image} alt="" />
        </Link>
    );
}

export default Item;
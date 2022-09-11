import './Item.css'
import React from 'react'

const Item = ({info}) => {
    return(
        <a href="" className="film">
            <p>{info.title}</p>
            <img src={info.image} alt="" />
        </a>
    );
}

export default Item;
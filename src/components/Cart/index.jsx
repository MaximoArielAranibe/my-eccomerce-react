import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

export const Cart = () => {
    const { cart , totalPrice } = useCartContext();

    if (cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        )
    }

    return(
        <>
        <h1> Tu carrito </h1>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />) 
        }
        <p>
            Total: {totalPrice()}
        </p>
        </>
    );
}

export default Cart
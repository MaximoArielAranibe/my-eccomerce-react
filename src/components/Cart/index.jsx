import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

export const Cart = () => {
    const { cart , totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Maximo' ,
            email: 'maximo123@hotmail.com' ,
            phone: '549247712412',
            adress: 'calle siempreviva 1234' 
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id));

    }

    if (cart.length === 0) {
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
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
        <button onClick={handleClick}>Emitir compra</button>
        </>
    );
}

export default Cart
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart} = props
    let total = 0
    for (const product of cart){
        total = total + product.price
    }
    return (
        <div className='cart'>
            <div className='cart-item'>
                <h4>Order summary</h4>
                <p>Seleted Items - {cart.length}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping : $</p>
                <p>Tax : $</p>
                <h6>Grand Total : $</h6>
            </div>
        </div>
    );
};

export default Cart;
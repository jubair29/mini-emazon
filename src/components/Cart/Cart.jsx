import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // const {cart} = props
    let totalPrice = 0
    let shippingPrice = 0
    for (const product of cart){
        totalPrice = totalPrice + product.price
        shippingPrice = shippingPrice + product.shipping
    }
    const tax = totalPrice *7/100
    const grandTotal = totalPrice + shippingPrice + tax
    return (
        <div className='cart'>
            <div className='cart-item'>
                <h4>Order summary</h4>
                <p>Seleted Items - {cart.length}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Total Shipping : ${shippingPrice}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;
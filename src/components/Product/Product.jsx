import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,seller,price,img,ratings} = props.product
    const product = props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Start</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {
         fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveCart = []
        // step 1 : get id
        for(const id in storedCart){
            //    step 2 : get the product using id
            const addedProduct = products.find(product => product.id === id)
            // step 3 : get quantity of the product
            if(addedProduct){
              const quantity = storedCart[id]
              addedProduct.quantity = quantity
              // step 4 : add the added product to the save cart
              saveCart.push(addedProduct)
            }
            console.log(addedProduct);

        }
        // step 5 : set the cart
        setCart(saveCart)
        
    },[products])

    const handleAddToCart = (product) => {
        //   console.log(product);
          const newCart = [...cart, product]
          setCart(newCart)
          addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                  products.map(product => <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  ></Product>)
                }
            </div>
            <div className="card-container">
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
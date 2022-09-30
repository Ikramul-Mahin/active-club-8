import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (products) => {
        const newCart = [...cart, products]
        setCart(newCart)
    }

    return (
        <div className='containers mt-3'>

            <div className='products-container'>

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='menu-bar'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;
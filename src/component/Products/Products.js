import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='menu-bar'>
                <p>About me</p>
            </div>
        </div>
    );
};

export default Products;
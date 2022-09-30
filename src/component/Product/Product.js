import React from 'react';
import './Product.css'

const Product = (props) => {
    const { addToCart, product } = props
    const { name, time, img, about, age } = product


    return (
        <div className='product py-3'>


            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p className='card-text'>{about}</p>
            <h6>Age:{age}</h6>
            <h6>Time:{time}s</h6>

            <div className='btn-add'>
                <button className='btn btn-primary w-75' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>

        </div>


    );
};

export default Product;
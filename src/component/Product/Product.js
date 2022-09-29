import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, time, img, about, age } = props.product
    return (
        <div className='product'>


            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p className='card-text'>{about}</p>
            <h6>Age:{age}</h6>
            <h6>Time:{time}s</h6>
            <button className='btn btn-primary w-75'>Add To Cart</button>
            <div>

            </div>

        </div>


    );
};

export default Product;
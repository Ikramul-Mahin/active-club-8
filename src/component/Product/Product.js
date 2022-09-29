import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, time, img } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Time:{time}</p>

        </div>
    );
};

export default Product;
import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div className='border border-2 py-4'>
            <p>cart:{cart.length}</p>
            <div>
                <img src="" alt="" />
                <div>
                    <h2>Abdullah Mamun</h2>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='d-flex ms-3'>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Height</h4>
                    <p>6.7ft</p>
                </div>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Weight</h4>
                    <p>70kg</p>
                </div>
                <div className='bg-primary rounded text-white mx-1 px-2'>
                    <h4>Age</h4>
                    <p>23</p>
                </div>
            </div>
            <div className='mt-3'>
                <h3>Add a break</h3>
                <div>
                    <button className='btn-primary border-none mx-1'>20s</button>
                    <button className='btn-primary border-none mx-1'>30s</button>
                    <button className='btn-primary border-none mx-1'>30s</button>
                    <button className='btn-primary border-none mx-1'>50s</button>
                </div>
            </div>
            <div className='mt-5'>
                <h3>Exercise Details</h3>

                <div className='text-left'>
                    <h4 className='bg-secondary text-white rounded'>Study Time:</h4>
                    <h4 className='bg-secondary text-white rounded'>Break Time:</h4>

                    <button className='btn btn-primary'>Activity Completed</button>
                </div>


            </div>
        </div>
    );
};

export default Cart;